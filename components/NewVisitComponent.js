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
  constructor(props) {
    super(props);
    this.state = {
      textToAdd: '',
      valueToAdd: 0,
      validForm: false,
      dishes: [],
      date: new Date()
    };
  }

  changeAdd = value => {
    this.setState({ textToAdd: value }, this.checkForm);
  };

  checkForm = () => {
    if (this.state.textToAdd.length > 0 && this.state.valueToAdd > 0) {
      this.setState({ validForm: true });
    } else {
      this.setState({ validForm: false });
    }
  };

  onValue1 = () => {
    this.setState({ valueToAdd: 1 }, this.checkForm);
  };

  onValue2 = () => {
    this.setState({ valueToAdd: 2 }, this.checkForm);
  };

  onValue3 = () => {
    this.setState({ valueToAdd: 3 }, this.checkForm);
  };

  onValue4 = () => {
    this.setState({ valueToAdd: 4 }, this.checkForm);
  };

  onValue5 = () => {
    this.setState({ valueToAdd: 5 }, this.checkForm);
  };

  onAdd = () => {
    var temp = this.state.dishes;
    temp.push({
      value: this.state.valueToAdd,
      name: this.state.textToAdd,
      id: this.state.dishes.length
    });
    this.setState(
      {
        dishes: temp,
        textToAdd: '',
        valueToAdd: 0
      },
      this.checkForm
    );
  };

  onDelete = index => {
    var salida = [];
    var temp = this.state.dishes;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id != index) {
        salida.push(temp);
      }
    }
    this.setState({ dishes: salida });
  };

  onSave = () => {
    appstore.placesStore.addVisit(this.state.date, this.state.dishes, this.onSaveOk, this.onSaveFail);
  };

  onSaveOk = () => {
    this.props.navigator.state.params.placeDetail.refreshVisits();
    this.props.navigator.goBack(null);
  };

  onSaveFail = msg => {
    //TODO controlar error
  };

  render() {
    var place = appstore.placesStore.selectedPlace;
    return (
      <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={css.gradient}>
        <View style={css.floatingPanel}>
          <Text style={css.itemTitle}>{place.name}</Text>
          <Text style={css.itemAddress}>{place.vicinity}</Text>
        </View>
        <View style={[css.floatingPanel, css.floatingPanelSearch]}>
          <Input
            placeholder="Qué comiste?"
            placeholderTextColor="#ccc"
            style={css.inputSearch}
            onChangeText={this.changeAdd}
            value={this.state.textToAdd}
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
            <Button
              onPress={this.onAdd}
              style={this.state.validForm ? [css.btn, css.btnAzul] : [css.btn, css.btnGris]}
              disabled={!this.state.validForm}
            >
              <Text style={css.btnText}>Agregar</Text>
            </Button>
          </View>
        </View>
        <View style={[css.floatingPanel, css.floatingPanelList]}>
          <FlatList
            data={this.state.dishes}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
            ListHeaderComponent={<Text style={css.titleGris}>En esta visita has consumido:</Text>}
            ListEmptyComponent={<Text style={css.noData}>Nada Todavía!</Text>}
            renderItem={({ item, index }) => (
              <View style={index % 2 != 0 ? css.divPlato : css.divPlatoGris}>
                <Button onPress={() => this.onDelete(index)} style={css.btnRemove}>
                  <Icon name="remove-circle" style={css.removeIcon} />
                </Button>
                <Text style={css.plato}>{item.name}</Text>
                <StarComponent starCount={item.value} />
              </View>
            )}
          />
        </View>
        <View style={css.divFinalButtons}>
          <Button
            onPress={this.onSave}
            disabled={this.state.dishes.length == 0}
            style={
              this.state.dishes.length == 0 ? [css.btnFull, css.btn, css.btnGris] : [css.btnFull, css.btn, css.btnAzul]
            }
          >
            <Text style={css.btnTextFull}>Guardar Visita</Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
