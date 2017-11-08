import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';

import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import PlaceDetailComponent from './PlaceDetailComponent';

import styles from '../styles/MainStyle';

const ListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent openDrawer={this.openDrawer} isDetail={false} />
    <MainComponent navigator={navigation} />
  </View>
);

const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    <HeaderComponent isDetail={true} navigator={navigation} />
    <PlaceDetailComponent />
  </View>
);

const RootNavigator = StackNavigator(
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

export default RootNavigator;
