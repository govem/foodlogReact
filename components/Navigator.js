import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';

import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import PlaceDetailComponent from './PlaceDetailComponent';
import NuevaVisitaComponent from './NuevaVisitaComponent';
import MapComponent from './MapComponent';
import NuevoLugarComponent from './NuevoLugarComponent';
import NotasComponent from './NotasComponent';

import styles from '../styles/MainStyle';

const ListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="FoodLog" openDrawer={this.openDrawer} headerMode="menu" />
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
    <NuevaVisitaComponent />
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
    <NuevoLugarComponent />
  </View>
);

const NotasScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent title="Notas" navigator={navigation} headerMode="modalCancel" />
    <NotasComponent />
  </View>
);

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
