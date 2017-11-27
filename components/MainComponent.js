'use strict';

import React from 'react';
import { observer } from 'mobx-react';
import { LinearGradient } from 'expo';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { Icon } from 'native-base';
import FAB from 'react-native-fab';

import appstore from '../stores/Appstore.js';

import CardComponent from './CardComponent';
import styles from '../styles/MainStyle.js';
import colors from '../styles/Colors.js';

@observer
class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentDidMount = () => {
    appstore.placesStore.userPlaces(false);
  };

  _cardRender = ({ item }) => <CardComponent item={item} visited={false} navigator={this.props.navigator} />;

  _cardVisitedRender = ({ item }) => <CardComponent item={item} visited={true} navigator={this.props.navigator} />;

  _keyExtractor = item => item.id;

  onRefresh = () => {
    this.setState({ refreshing: true });
    if (this.selectedTabIndex == this.INDEX_POR_VISITAR) {
      appstore.placesStore.userPlaces(false, this.refreshDone);
    } else {
      appstore.placesStore.userPlaces(true, this.refreshDone);
    }
  };

  refreshDone = () => {
    this.setState({ refreshing: false });
  };

  onFab = () => {
    this.props.navigator.navigate('NuevoLugar');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={{ height: '100%' }}>
          <FlatList
            style={styles.placesList}
            data={
              appstore.selectedTabIndex == 0
                ? appstore.placesStore.notVisitedUserPlaces
                : appstore.placesStore.visitedUserPlaces
            }
            ListEmptyComponent={
              <Text style={styles.noData}>
                {appstore.selectedTabIndex == 0
                  ? 'No has guardado ningún lugar para visitar'
                  : 'No has visitado ninguno de tus lugares'}
              </Text>
            }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
                title="Tire para recargar"
              />
            }
            keyExtractor={this._keyExtractor}
            renderItem={appstore.selectedTabIndex == 0 ? this._cardRender : this._cardVisitedRender}
          />
        </LinearGradient>
        <FAB
          buttonColor={colors.azulClaro}
          iconTextColor={colors.blanco}
          onClickAction={this.onFab}
          visible={true}
          style={styles.fabStyle}
          iconTextComponent={<Icon name="add" />}
        />
      </View>
    );
  }
}

export default MainComponent;
