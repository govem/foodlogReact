import React from 'react';
import { observer } from 'mobx-react';

import colors from '../styles/Colors';
import css from '../styles/NewVisitStyle.js';
import { LinearGradient } from 'expo';
import { Input, Button, Icon } from 'native-base';
import { View, Text, FlatList } from 'react-native';
import StarComponent from './StarComponent';

import appstore from '../stores/Appstore.js';

@observer
export default class NewVisitComponent extends React.Component {
  platos = [
    {
      id: 1,
      name: 'cafe',
      value: 4
    },
    {
      id: 2,
      name: 'cafe',
      value: 4
    },
    {
      id: 3,
      name: 'cafe',
      value: 4
    },
    {
      id: 4,
      name: 'cafe',
      value: 4
    },
    {
      id: 5,
      name: 'cafe',
      value: 4
    },
    {
      id: 6,
      name: 'cafe',
      value: 4
    },
    {
      id: 7,
      name: 'cafe',
      value: 4
    },
    {
      id: 8,
      name: 'cafe',
      value: 4
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      textToAdd: '',
      valueToAdd: 0
    };
  }

  changeAdd = value => {
    this.setState({ textToAdd: value });
  };

  onValue1 = () => {
    if (this.state.valueToAdd != 1) {
      this.setState({ valueToAdd: 1 });
    } else {
      this.setState({ valueToAdd: 0 });
    }
  };

  onValue2 = () => {
    this.setState({ valueToAdd: 2 });
  };

  onValue3 = () => {
    this.setState({ valueToAdd: 3 });
  };

  onValue4 = () => {
    this.setState({ valueToAdd: 4 });
  };

  onValue5 = () => {
    this.setState({ valueToAdd: 5 });
  };

  render() {
    return (
      <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={css.gradient}>
        <View style={css.floatingPanel}>
          <Text style={css.itemTitle}>{appstore.placesStore.selectedPlace.name}</Text>
          <Text style={css.itemAddress}>{appstore.placesStore.selectedPlace.address}</Text>
          <Text style={css.itemTime}>{appstore.placesStore.selectedPlace.time}</Text>
        </View>
        <View style={[css.floatingPanel, css.floatingPanelSearch]}>
          <Input
            placeholder="Qué comiste?"
            placeholderTextColor="#ccc"
            style={css.inputSearch}
            onChangeText={this.changeAdd}
          />
          <View style={css.divStars}>
            <Button transparent onPress={this.onValue1}>
              <Icon name={this.state.valueToAdd >= 1 ? 'md-star' : 'md-star-outline'} style={css.starButton} />
            </Button>
            <Button transparent onPress={this.onValue2}>
              <Icon name={this.state.valueToAdd >= 2 ? 'md-star' : 'md-star-outline'} style={css.starButton} />
            </Button>
            <Button transparent onPress={this.onValue3}>
              <Icon name={this.state.valueToAdd >= 3 ? 'md-star' : 'md-star-outline'} style={css.starButton} />
            </Button>
            <Button transparent onPress={this.onValue4}>
              <Icon name={this.state.valueToAdd >= 4 ? 'md-star' : 'md-star-outline'} style={css.starButton} />
            </Button>
            <Button transparent onPress={this.onValue5}>
              <Icon name={this.state.valueToAdd >= 5 ? 'md-star' : 'md-star-outline'} style={css.starButton} />
            </Button>
          </View>
          <View style={css.divButton}>
            <Button onPress={this.onAdd} style={[css.btn, css.btnAzul]}>
              <Text style={css.btnText}>Agregar</Text>
            </Button>
          </View>
        </View>
        <View style={[css.floatingPanel, css.floatingPanelList]}>
          <FlatList
            data={this.platos}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
            ListHeaderComponent={<Text style={css.titleGris}>En esta visita has consumido:</Text>}
            ListEmptyComponent={<Text style={css.noData}>Nada Todavía!</Text>}
            renderItem={({ item, index }) => (
              <View style={index % 2 != 0 ? css.divPlato : css.divPlatoGris}>
                <Text style={css.plato}>{item.name}</Text>
                <StarComponent starCount={item.value} />
              </View>
            )}
          />
        </View>
        <View style={css.divFinalButtons}>
          <Button onPress={this.onSave} style={[css.btnFull, css.btn, css.btnAzul]}>
            <Text style={css.btnTextFull}>Guardar</Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
