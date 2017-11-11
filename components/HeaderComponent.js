'use strict';

import React from 'react';
import { observer } from 'mobx-react';
import { View, TouchableOpacity } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Right, Item, Input, Text } from 'native-base';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import styles from '../styles/HeaderStyle.js';
import appstore from '../stores/Appstore.js';
import { NavigationActions } from 'react-navigation';

@observer
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchText: null
    };
  }

  onClickHamburguer = () => {
    this.props.openDrawer();
  };

  onClickTab = index => {
    appstore.changeIndex(index);
  };

  onClickBack = () => {
    this.props.navigator.dispatch(NavigationActions.back());
  };

  onSearchPress = () => {
    this.setState({ searching: true });
  };

  onCancelSearch = () => {
    this.setState({
      searching: false,
      searchText: null
    });
  };

  changeSearch = value => {
    this.setState({ searchText: value });
  };

  onSubmitSearch = () => {
    console.log('buscando: ' + this.state.searchText);
  };

  render() {
    var buttonLeft;
    var buttonRight;

    switch (this.props.headerMode) {
      case 'menu':
        buttonLeft = (
          <Left>
            <Button transparent onPress={this.onClickHamburguer}>
              <Icon name="menu" />
            </Button>
          </Left>
        );
        buttonRight = <Right style={{ flex: 0.5 }} />;
        break;

      case 'detail':
        buttonLeft = (
          <Left>
            <Button transparent onPress={this.onClickBack}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        );
        buttonRight = <Right style={{ flex: 0.5 }} />;
        break;

      case 'modalCancel':
        buttonLeft = (
          <Left>
            <Button transparent onPress={this.onClickBack} style={styles.leftRightButton}>
              <Text style={styles.leftRightText}>Cancelar</Text>
            </Button>
          </Left>
        );
        buttonRight = <Right style={{ flex: 0.5 }} />;
        break;

      case 'modalOk':
        buttonLeft = <Left style={{ flex: 0.5 }} />;
        buttonRight = (
          <Right style={{ flex: 0.5 }}>
            <Button transparent onPress={this.onClickBack} style={styles.leftRightButton}>
              <Text style={styles.leftRightText}>OK</Text>
            </Button>
          </Right>
        );
        break;
      default:
        break;
    }

    return (
      <View>
        <Header noShadow>
          {buttonLeft}
          <Body style={styles.headerBody}>
            <Title style={styles.headerTitle}>{this.props.title}</Title>
          </Body>
          {buttonRight}
        </Header>
        {this.props.headerMode === 'menu' && (
          <View style={styles.extendedViewHeader}>
            {!this.state.searching ? (
              <View style={styles.segmentView}>
                <SegmentedControlTab
                  values={['Por visitar', 'Visitados']}
                  selectedIndex={appstore.selectedTabIndex}
                  tabsContainerStyle={styles.segment}
                  tabStyle={styles.segmentTab}
                  tabTextStyle={styles.segmentTabText}
                  activeTabStyle={styles.segmentActive}
                  activeTabTextStyle={styles.segmentActiveText}
                  onTabPress={this.onClickTab}
                />
                <TouchableOpacity onPress={this.onSearchPress}>
                  <Icon name="search" style={styles.searchIcon} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.searchPanel}>
                <Item rounded style={styles.itemInput}>
                  <Input
                    placeholder="Busca lugares, platos, comentarios..."
                    placeholderTextColor="#ccc"
                    style={styles.inputSearch}
                    returnKeyType="search"
                    onChangeText={this.changeSearch}
                    onSubmitEditing={this.onSubmitSearch}
                  />
                </Item>
                <Button transparent onPress={this.onCancelSearch} style={styles.cancelSearchButton}>
                  <Text style={styles.cancelSearchText}>Cancelar</Text>
                </Button>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default HeaderComponent;
