import React from 'react';
import { observer } from 'mobx-react';

import { View, FlatList, Text, Keyboard } from 'react-native';
import { Input, Icon, Button, Card, CardItem, Body, Spinner } from 'native-base';
import ResultSearchComponent from './ResultSearchComponent';
import { LinearGradient, Constants, Location, Permissions } from 'expo';

import css from '../styles/NewPlaceStyle.js';
import colors from '../styles/Colors';
import appstore from '../stores/Appstore.js';

@observer
class NuevoLugarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchText: '',
      error: false,
      errorMessage: ''
    };
  }

  componentWillMount = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      //TODO que hacer si no dan permiso?
      //establecer alguna ubicacion por defecto?
      //levantar un popup informando?
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }
  };

  changeSearch = value => {
    this.setState({
      searchText: value
    });
  };

  onSubmitSearch = () => {
    Keyboard.dismiss();
    if (this.state.searchText == null || this.state.searchText.length < 3) {
      this.setState({
        error: true,
        errorMessage: 'Tu búsqueda debe tener 3 caracteres como mínimo'
      });
    } else {
      this.setState({ searching: true });
      if (!Constants.isDevice) {
        appstore.placesStore.searchPlace(
          this.state.searchText,
          -33.44865,
          -70.65402,
          this.searchResult,
          this.searchFail
        );
      } else {
        appstore.placesStore.searchPlace(
          this.state.searchText,
          this.state.location.coords.latitude,
          this.state.location.coords.longitude,
          this.searchResult,
          this.searchFail
        );
      }
    }
  };

  searchResult = resultnum => {
    this.setState({ searching: false });
    if (resultnum == 0) {
      this.setState({
        error: true,
        errorMessage: 'Sin resultados! intenta refinar tu búsqueda'
      });
    } else {
      this.setState({ error: false });
    }
  };

  searchFail = msg => {
    this.setState({
      error: true,
      errorMessage: msg
    });
  };

  keyExtractor = item => item.id;

  renderItem = ({ item, index }) => {
    console.log(item);
    return <ResultSearchComponent item={item} index={index} />;
  };

  render() {
    return (
      <View style={css.container}>
        <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={{ height: '100%' }}>
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
                  {this.state.searching ? (
                    <Spinner style={css.spinner} color={colors.azulClaro} />
                  ) : (
                    <Button transparent onPress={this.onSubmitSearch} style={css.searchButton}>
                      <Icon name="search" style={css.searchButtonIcon} />
                    </Button>
                  )}
                </View>
              </Body>
            </CardItem>
          </Card>
          {appstore.placesStore.searchResults.length > 0 && (
            <FlatList
              style={css.resultList}
              data={appstore.placesStore.searchResults}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          )}
          {this.state.error == true && (
            <View style={css.errorDiv}>
              <Text style={css.errorText}>{this.state.errorMessage}</Text>
            </View>
          )}
        </LinearGradient>
      </View>
    );
  }
}

export default NuevoLugarComponent;
