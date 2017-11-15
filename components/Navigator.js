import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';

import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import PlaceDetailComponent from './PlaceDetailComponent';
import NewVisitComponent from './NewVisitComponent';
import MapComponent from './MapComponent';
import NewPlaceComponent from './NewPlaceComponent';
import NotasComponent from './NotasComponent';

import styles from '../styles/MainStyle';

const ListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="FoodLog" headerMode="menu" />
    <MainComponent navigator={navigation} />
  </View>
);

const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="Detalle" navigator={navigation} headerMode="detail" />
    <PlaceDetailComponent navigator={navigation} />
  </View>
);

const NuevaVisitaScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="Nueva Visita" navigator={navigation} headerMode="modalCancel" />
    <NewVisitComponent />
  </View>
);

const MapScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="Ubicación" navigator={navigation} headerMode="modalOk" />
    <MapComponent />
  </View>
);

const NuevoLugarScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="Nuevo Lugar" navigator={navigation} headerMode="modalCancel" />
    <NewPlaceComponent />
  </View>
);

const NotasScreen = ({ navigation }) => <NotasComponent navigation={navigation} />;

const SideNavigator = StackNavigator(
  {
    Listado: {
      screen: ListScreen
    },
    Detalle: {
      screen: DetailScreen
    }
  },
  {
    headerMode: 'none'
  }
);

const ModalNavigator = StackNavigator(
  {
    Home: {
      screen: SideNavigator
    },
    NuevaVisita: {
      screen: NuevaVisitaScreen
    },
    Mapa: {
      screen: MapScreen
    },
    NuevoLugar: {
      screen: NuevoLugarScreen
    },
    Notas: {
      screen: NotasScreen
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

export default ModalNavigator;
