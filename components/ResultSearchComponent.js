import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import css from '../styles/ResultSearchStyle.js';
import endpoints from '../utils/Endpoints';
import appstore from '../stores/Appstore';
import { NavigationActions } from 'react-navigation';

class ResultSearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onAdd = () => {
    appstore.placesStore.addPlace(this.props.item, this.addresult);
  };

  addresult = errmsg => {
    if (errmsg == null) {
      appstore.changeIndex(appstore.INDEX_POR_VISITAR, true);
      this.props.navigator.dispatch(NavigationActions.back());
    } else {
      //TODO mostrar error
    }
  };

  onVer = () => {
    this.props.navigator.dispatch(NavigationActions.back());
  };

  render() {
    var viewStyle = this.props.index % 2 == 0 ? css.cellResult : css.cellResultGris;
    var holderStyle =
      this.props.index % 2 == 0 ? [css.imageHolder, css.holderGris] : [css.imageHolder, css.holderBlanco];

    var imgUrl;
    if (this.props.item.photos !== undefined && this.props.item.photos.length > 0) {
      imgUrl = endpoints.PLACE_PHOTO_URL + '?height=52&reference=' + this.props.item.photos[0].photo_reference;
    }

    return (
      <View style={viewStyle}>
        {this.props.item.photos !== undefined && this.props.item.photos.length > 0 ? (
          <Image style={css.cellImage} source={{ uri: imgUrl }} />
        ) : (
          <View style={holderStyle}>
            <Text style={css.imageTextHolder}>{this.props.item.name.substring(0, 1)}</Text>
          </View>
        )}
        <View style={css.cellTextZone}>
          <Text style={css.cellTitle}>{this.props.item.name}</Text>
          <Text style={css.cellText}>{this.props.item.vicinity}</Text>
        </View>
        {this.props.item.exists != true ? (
          <Button style={css.btnAdd} onPress={this.onAdd}>
            <Icon name="add" />
          </Button>
        ) : (
          <Button style={css.btnAdd} onPress={this.onVer}>
            <Text>Ver</Text>
          </Button>
        )}
      </View>
    );
  }
}

export default ResultSearchComponent;
