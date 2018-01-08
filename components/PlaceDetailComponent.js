import React from 'react';
import css from '../styles/PlaceDetailStyle.js';

import { observer } from 'mobx-react';

import { View, Image, Text, SectionList } from 'react-native';
import { Button, Icon } from 'native-base';
import StarComponent from './StarComponent';

import appstore from '../stores/Appstore.js';
import endpoints from '../utils/Endpoints';

import moment from 'moment';
import localization from 'moment/locale/es';

@observer
class PlaceDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visits: [],
      loadingVisits: false,
      loadError: false,
      loadMsg: ''
    };
    moment.locale('es');
  }

  componentDidMount = () => {
    if (this.props.navigator.state.params.visited == true) {
      this.refreshVisits();
    }
  };

  refreshVisits = () => {
    this.setState(
      {
        loadingVisits: true
      },
      () => {
        appstore.placesStore.loadVisits(this.okCallback, this.failCallback);
      }
    );
  };

  okCallback = () => {
    this.setState({ loadingVisits: false });
  };

  failCallback = msg => {
    this.setState({
      loadingVisits: false,
      loadError: true,
      loadMsg: msg
    });
  };

  renderHeader = ({ section }) => {
    return (
      <View style={css.divItemVisita}>
        <Text style={css.itemFecha}>
          {moment(section.title).fromNow(true) + ' (' + moment(section.title).format('L') + ')'}
        </Text>
      </View>
    );
  };

  renderItem = ({ item, index }) => (
    <View key={item.id} style={index % 2 == 0 ? css.itemPlatoGris : css.itemPlato}>
      <Text style={css.platoTitle}>{item.name}</Text>
      <StarComponent starCount={item.value} />
    </View>
  );

  onNuevaVisita = () => {
    this.props.navigator.navigate('NuevaVisita', { placeDetail: this });
  };

  onFavorite = () => {};

  onMap = () => {
    this.props.navigator.navigate('Mapa');
  };

  onNotes = () => {
    this.props.navigator.navigate('Notas');
  };

  onShare = () => {
    this.props.navigator.navigate('Share');
  };

  render() {
    var titulo = appstore.placesStore.selectedPlace.name;
    var direccion = appstore.placesStore.selectedPlace.vicinity;

    var headerComponent = <Text style={css.visitTitle}>Visitas anteriores</Text>;
    var emptyComponent;

    if (this.state.loadingVisits) {
      emptyComponent = (
        <View style={css.noDataDiv}>
          <Text style={css.noData}>Cargando visitas...</Text>
        </View>
      );
    } else {
      emptyComponent = (
        <View style={css.noDataDiv}>
          <Text style={css.noData}>No tienes ninguna visita!</Text>
          <Text style={css.noData}>Qué estás esperando para visitarlo?</Text>
        </View>
      );
    }

    var imgUrl;
    if (
      appstore.placesStore.selectedPlace.photos !== undefined &&
      appstore.placesStore.selectedPlace.photos.length > 0
    ) {
      imgUrl =
        endpoints.PLACE_PHOTO_URL +
        '?height=230&reference=' +
        appstore.placesStore.selectedPlace.photos[0].photo_reference;
    }

    return (
      <View style={css.container}>
        <Image style={css.imgStyle} source={{ uri: imgUrl }} />
        <View style={css.floatingContainer}>
          <View style={css.floatingPanel}>
            <Text style={css.itemTitle}>{titulo}</Text>
            <Text style={css.itemAddress}>{direccion}</Text>
          </View>
        </View>
        <View style={css.botonera}>
          <Button transparent style={css.btn} onPress={this.onNuevaVisita}>
            <Icon ios="md-add" android="md-add" style={css.btnIcon} />
          </Button>
          <Button transparent style={css.btn} onPress={this.onFavorite}>
            <Icon ios="ios-star" android="md-star" style={css.btnIcon} />
          </Button>
          <Button transparent style={css.btn} onPress={this.onMap}>
            <Icon ios="ios-pin" android="md-pin" style={css.btnIcon} />
          </Button>
          <Button transparent style={css.btn} onPress={this.onNotes}>
            <Icon ios="ios-paper-outline" android="md-paper" style={css.btnIcon} />
          </Button>
          <Button transparent style={css.btn} onPress={this.onShare}>
            <Icon ios="ios-share-outline" android="md-share" style={css.btnIcon} />
          </Button>
        </View>
        {headerComponent}
        <SectionList
          ListEmptyComponent={emptyComponent}
          style={css.listaVisitas}
          sections={appstore.placesStore.selectedPlace.visits}
          keyExtractor={item => item._id}
          renderSectionHeader={this.renderHeader}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default PlaceDetailComponent;
