import React from 'react';
import styles from '../styles/CardStyle.js';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';

import appstore from '../stores/Appstore.js';
import endpoints from '../utils/Endpoints';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getStars = estrellas => {
    let buffer = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= estrellas) {
        buffer.push(<Image key={i} source={require('../assets/estrellaLlena.png')} style={styles.star} />);
      } else {
        buffer.push(<Image key={i} source={require('../assets/estrellaVacia.png')} style={styles.star} />);
      }
    }
    return buffer;
  };

  getFila = (visitas, item, moredata) => {
    if (item.order % 2 == 0) {
      if (item.order == visitas.length && moredata == 0) {
        return [styles.filaVisitasGris, styles.ultimaFila];
      } else {
        return styles.filaVisitasGris;
      }
    } else {
      if (item.order == visitas.length && moredata == 0) {
        return [styles.filaVisitas, styles.ultimaFila];
      } else {
        return styles.filaVisitas;
      }
    }
  };

  getVisits = () => {
    if (this.props.visited == true) {
      return this.props.item.visits + ' / ' + this.props.item.visitas.length + ' tuyas';
    } else {
      return this.props.item.visits;
    }
  };

  pressCard = () => {
    appstore.placesStore.setSelectedPlace(this.props.item);
    this.props.navigator.navigate('Detalle');
  };

  render() {
    var filteredVisits = [];
    var hasMoreData = 0;
    if (this.props.visited == true) {
      if (this.props.item.visitas.length > 2) {
        filteredVisits = this.props.item.visitas.slice(0, 2);
        hasMoreData = this.props.item.visitas.length - 2;
      } else {
        filteredVisits = this.props.item.visitas;
        hasMoreData = 0;
      }
    } else {
      hasMoreData = 0;
    }

    var imgUrl;
    if (this.props.item.photos !== undefined && this.props.item.photos.length > 0) {
      imgUrl = endpoints.PLACE_PHOTO_URL + '?height=80&reference=' + this.props.item.photos[0].photo_reference;
    }

    return (
      <View>
        <TouchableOpacity onPress={this.pressCard}>
          <Card style={styles.cell}>
            <CardItem style={styles.cellCardItem}>
              <Body>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.cellImage} source={{ uri: imgUrl }} />
                  <View style={styles.cellTextZone}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.cellTitle}>
                      {this.props.item.name}
                    </Text>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.cellText}>
                      {this.props.item.vicinity}
                    </Text>
                    <Text style={styles.cellTextHL}>{this.getVisits()}</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
        {this.props.visited == true && (
          <FlatList
            style={hasMoreData > 0 ? styles.visitedListMasDatos : styles.visitedList}
            data={filteredVisits}
            keyExtractor={item => item.order}
            renderItem={({ item }) => (
              <View>
                <View key={item.order} style={this.getFila(this.props.item.visitas, item, hasMoreData)}>
                  <Text style={styles.filaFecha}>{item.date}</Text>
                  <Text style={styles.filaTexto}>{item.content}</Text>
                  <View style={styles.filaNota}>{this.getStars(item.stars)}</View>
                </View>
              </View>
            )}
          />
        )}
        {this.props.visited == true &&
          hasMoreData > 0 && (
            <View style={styles.filaMasDatos}>
              <Text style={styles.textoMasDatos}>{hasMoreData + ' visitas más...'}</Text>
            </View>
          )}
      </View>
    );
  }
}

export default CardComponent;
