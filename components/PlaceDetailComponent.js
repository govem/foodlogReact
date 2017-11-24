import React from 'react';
import css from '../styles/PlaceDetailStyle.js';

import { observer } from 'mobx-react';

import { View, Image, Text, SectionList } from 'react-native';
import { Button, Icon } from 'native-base';
import StarComponent from './StarComponent';

import appstore from '../stores/Appstore.js';

@observer
class PlaceDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader = ({ section }) => (
    <View style={css.divItemVisita}>
      <Text style={css.itemFecha}>{section.title}</Text>
    </View>
  );

  renderItem = ({ item, index }) => (
    <View key={item.id} style={index % 2 == 0 ? css.itemPlatoGris : css.itemPlato}>
      <Text style={css.platoTitle}>{item.name}</Text>
      <StarComponent starCount={item.value} />
    </View>
  );

  onNuevaVisita = () => {
    this.props.navigator.navigate('NuevaVisita');
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
    var data = [
      { data: [{ id: 1, name: 'plato', value: 3 }], title: '9 jul 17' },
      {
        data: [
          { id: 1, name: 'plato', value: 3 },
          { id: 2, name: 'plato', value: 3 },
          { id: 3, name: 'plato', value: 3 }
        ],
        title: '10 jul 17'
      },
      { data: [{ id: 1, name: 'plato', value: 3 }, { id: 2, name: 'plato', value: 3 }], title: '11 jul 17' },
      { data: [{ id: 1, name: 'plato', value: 3 }, { id: 2, name: 'plato', value: 3 }], title: '12 jul 17' },
      { data: [{ id: 1, name: 'plato', value: 3 }, { id: 2, name: 'plato', value: 3 }], title: '13 jul 17' },
      { data: [{ id: 1, name: 'plato', value: 3 }, { id: 2, name: 'plato', value: 3 }], title: '14 jul 17' }
    ];

    var titulo = appstore.placesStore.selectedPlace.name;
    var direccion = appstore.placesStore.selectedPlace.address;
    var horario = appstore.placesStore.selectedPlace.time;

    var headerComponent = <Text style={css.visitTitle}>Visitas anteriores</Text>;
    var emptyComponent = (
      <View style={css.noDataDiv}>
        <Text style={css.noData}>No tienes ninguna visita!</Text>
        <Text style={css.noData}>Qué estás esperando para visitarlo?</Text>
      </View>
    );

    return (
      <View style={css.container}>
        <Image style={css.imgStyle} source={require('../assets/cafe.png')} />
        <View style={css.floatingPanel}>
          <Text style={css.itemTitle}>{titulo}</Text>
          <Text style={css.itemAddress}>{direccion}</Text>
          <Text style={css.itemTime}>{horario}</Text>
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
          sections={data}
          keyExtractor={item => item.id}
          renderSectionHeader={this.renderHeader}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default PlaceDetailComponent;
