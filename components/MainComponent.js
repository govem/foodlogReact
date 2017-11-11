'use strict';

import React from 'react';
import { observer } from 'mobx-react';
import { LinearGradient } from 'expo';
import { FlatList, RefreshControl } from 'react-native';
import { Icon, Content } from 'native-base';
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

  _cardRender = ({ item }) => <CardComponent item={item} visited={false} navigator={this.props.navigator} />;

  _cardVisitedRender = ({ item }) => <CardComponent item={item} visited={true} navigator={this.props.navigator} />;

  _keyExtractor = item => item.id;

  onRefresh = () => {
    this.setState({ refreshing: true });
    console.log('refreshing');
    //TODO buscar datos y setear false cuando lleguen los datos
    this.setState({ refreshing: false });
  };

  onFab = () => {
    this.props.navigator.navigate('NuevoLugar');
  };

  render() {
    return (
      <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={{ height: '100%' }}>
        <Content>
          <FlatList
            style={styles.placesList}
            data={appstore.items}
            refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} title="Tire para recargar" />}
            keyExtractor={this._keyExtractor}
            renderItem={appstore.selectedTabIndex == 0 ? this._cardRender : this._cardVisitedRender}
          />
          <FAB buttonColor={colors.azulClaro} iconTextColor={colors.blanco} onClickAction={this.onFab} visible={true} iconTextComponent={<Icon name="add" />} />
        </Content>
      </LinearGradient>
    );
  }
}

export default MainComponent;
