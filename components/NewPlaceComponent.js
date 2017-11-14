import React from 'react';
import { observer } from 'mobx-react';

import { View, FlatList } from 'react-native';
import { Input, Icon, Button, Card, CardItem, Body } from 'native-base';
import ResultSearchComponent from './ResultSearchComponent';

import css from '../styles/NewPlaceStyle.js';
import appstore from '../stores/Appstore.js';

@observer
class NuevoLugarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      resultItems: []
    };
  }

  componentDidMount = () => {
    this.setState({
      resultItems: []
    });
  };

  changeSearch = value => {
    this.setState({
      searchText: value
    });
  };

  onSubmitSearch = () => {
    this.setState({
      resultItems: appstore.items
    });
  };

  keyExtractor = item => item.id;

  renderItem = ({ item, index }) => <ResultSearchComponent item={item} index={index} />;

  render() {
    return (
      <View style={css.container}>
        <Card style={css.card}>
          <CardItem style={css.cardItem}>
            <Body>
              <View style={css.divInput}>
                <Input
                  placeholder="Busca lugares"
                  placeholderTextColor="#ccc"
                  style={css.inputSearch}
                  returnKeyType="search"
                  onChangeText={this.changeSearch}
                  onSubmitEditing={this.onSubmitSearch}
                />
                <Button transparent onPress={this.onSubmitSearch} style={css.searchButton}>
                  <Icon name="search" style={css.searchButtonIcon} />
                </Button>
              </View>
            </Body>
          </CardItem>
        </Card>
        {this.state.resultItems.length > 0 && (
          <FlatList
            style={css.resultList}
            data={appstore.items}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

export default NuevoLugarComponent;
