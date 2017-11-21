import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import css from '../styles/ResultSearchStyle.js';
import endpoints from '../utils/Endpoints';

class ResultSearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.index % 2 == 0 ? css.cellResult : css.cellResultGris}>
        {this.props.item.photos !== undefined && this.props.item.photos.length > 0 ? (
          <Image
            style={css.cellImage}
            source={{
              uri: endpoints.PLACE_PHOTO_URL + '?height=52&reference=' + this.props.item.photos[0].photo_reference
            }}
          />
        ) : (
          <View
            style={this.props.index % 2 == 0 ? [css.imageHolder, css.holderGris] : [css.imageHolder, css.holderBlanco]}
          >
            <Text style={css.imageTextHolder}>{this.props.item.name.substring(0, 1)}</Text>
          </View>
        )}
        <View style={css.cellTextZone}>
          <Text style={css.cellTitle}>{this.props.item.name}</Text>
          <Text style={css.cellText}>{this.props.item.vicinity}</Text>
        </View>
        <Button style={css.btnAdd}>
          <Icon name="add" />
        </Button>
      </View>
    );
  }
}

export default ResultSearchComponent;
