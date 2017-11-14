import React from 'react';
import { observer } from 'mobx-react';

import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Card, CardItem, Icon, Button, ActionSheet } from 'native-base';
import Collapsible from 'react-native-collapsible';

import appstore from '../stores/Appstore.js';
import colors from '../styles/Colors';
import css from '../styles/NotasStyle.js';

@observer
class NotasComponent extends React.Component {
  notas = [
    {
      id: 1,
      date: '01/01/01',
      note:
        'Set to false to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set textAlignVertical to center. Default is true.'
    },
    {
      id: 2,
      date: '01/01/01',
      note:
        'Set to false to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set textAlignVertical to center. Default is true.'
    },
    {
      id: 3,
      date: '01/01/01',
      image: true,
      note:
        'Set to false to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set textAlignVertical to center. Default is true.'
    },
    {
      id: 4,
      date: '01/01/01',
      note:
        'Set to false to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set textAlignVertical to center. Default is true.'
    },
    {
      id: 5,
      date: '01/01/01',
      note:
        'Set to false to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set textAlignVertical to center. Default is true.'
    }
  ];

  BUTTONS = ['Desde la cámara', 'Desde la galería', 'Cancelar'];

  constructor(props) {
    super(props);
    this.state = {
      newNoteOpen: false
    };
  }

  openNewNote = () => {
    this.setState({ newNoteOpen: !this.state.newNoteOpen });
  };

  onNewNote = () => {};

  onPhoto = () => {
    ActionSheet.show(
      {
        options: this.BUTTONS,
        cancelButtonIndex: 2,
        title: 'Agregar foto'
      },
      buttonIndex => {
        this.setState({ clicked: this.BUTTONS[buttonIndex] });
      }
    );
  };

  noteComponent = item => (
    <Card style={css.cardNote}>
      <CardItem>
        <Text style={css.dateNote}>{item.date}</Text>
      </CardItem>

      {item.image == true && (
        <CardItem style={css.itemImage}>
          <Image source={require('../assets/food.jpg')} style={css.imageNote} />
        </CardItem>
      )}
      <CardItem>
        <Text style={css.textNote}>{item.note}</Text>
      </CardItem>
    </Card>
  );

  render() {
    return (
      <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={css.gradient}>
        <View style={css.floatingPanel}>
          <Text style={css.itemTitle}>{appstore.placesStore.selectedPlace.name}</Text>
          <Text style={css.itemAddress}>{appstore.placesStore.selectedPlace.address}</Text>
          <Text style={css.itemTime}>{appstore.placesStore.selectedPlace.time}</Text>
        </View>
        <View style={css.floatingPanel}>
          <TouchableOpacity onPress={this.openNewNote}>
            <View style={css.flexrow}>
              <Text style={[css.flexFull, css.titleNewNote]}>Nueva nota</Text>
              <Icon
                name={this.state.newNoteOpen == false ? 'ios-arrow-back' : 'ios-arrow-down'}
                style={{ color: colors.grisClaro }}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={!this.state.newNoteOpen}>
            <View>
              <TextInput multiline={true} style={css.textInput} />
              <View style={css.divBtns}>
                <Button onPress={this.onPhoto} iconLeft style={css.btnNewNote}>
                  <Icon name="image" style={css.icnBlanco} />
                  <Text style={css.textBtnNewNote}>Agregar foto</Text>
                </Button>
                <Button onPress={this.onSaveNote} iconLeft style={css.btnNewNote}>
                  <Icon name="add" style={css.icnBlanco} />
                  <Text style={css.textBtnNewNote}>Guardar</Text>
                </Button>
              </View>
            </View>
          </Collapsible>
        </View>
        <FlatList
          style={css.listaNotas}
          data={this.notas}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
          ListEmptyComponent={<Text style={css.noData}>No tienes ninguna nota</Text>}
          renderItem={({ item }) => this.noteComponent(item)}
        />
      </LinearGradient>
    );
  }
}

export default NotasComponent;
