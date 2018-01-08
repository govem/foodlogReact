import React from 'react';
import { observer } from 'mobx-react';

import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient, FileSystem, ImagePicker } from 'expo';
import { Card, CardItem, List, Icon, Button, ActionSheet } from 'native-base';
import Collapsible from 'react-native-collapsible';
import HeaderComponent from './HeaderComponent';

import appstore from '../stores/Appstore.js';
import colors from '../styles/Colors';
import css from '../styles/NotasStyle.js';

import moment from 'moment';

@observer
class NotasComponent extends React.Component {
  BUTTONS = ['Desde la cámara', 'Desde la galería', 'Cancelar'];

  constructor(props) {
    super(props);
    this.state = {
      newNoteOpen: false,
      photoData: null,
      noteText: '',
      newNoteTitle: 'Nueva nota',
      loadingNotes: false
    };
  }

  componentDidMount = () => {
    this.setState({ loadingNotes: true }, () => {
      appstore.notesStore.loadNotes(this.onOkLoad, this.onFailLoad);
    });
  };

  openNewNote = () => {
    this.setState({ newNoteOpen: !this.state.newNoteOpen });
  };

  onSaveNote = () => {
    console.log('guardando nota');
    this.setState({
      newNoteOpen: false,
      newNoteTitle: 'Guardando nota...'
    });
    appstore.notesStore.saveNote(this.state.noteText, this.state.photoData, this.onOkSave, this.onFailSave);
  };

  onOkSave = () => {
    this.setState({
      newNoteTitle: 'Nueva nota',
      noteText: '',
      photoData: null,
      loadingNotes: true
    });
    appstore.notesStore.loadNotes(this.onOkLoad, this.onFailLoad);
  };

  onFailSave = () => {
    this.setState({
      newNoteOpen: true,
      newNoteTitle: 'Error guardando nota'
    });
  };

  onOkLoad = () => {
    this.setState({ loadingNotes: false });
    if (appstore.placesStore.selectedPlace.notes.length == 0) {
      this.setState({ newNoteOpen: true });
    }
  };

  onFailLoad = () => {
    //TODO mensaje de error?
    this.setState({ loadingNotes: false });
  };

  onPhoto = () => {
    ActionSheet.show(
      {
        options: this.BUTTONS,
        cancelButtonIndex: 2,
        title: 'Agregar foto'
      },
      this.onPhotoAction
    );
  };

  onPhotoAction = async buttonIndex => {
    var photo;
    var options = {
      allowsEditing: false,
      base64: true
    };
    if (buttonIndex == 0) {
      photo = await ImagePicker.launchCameraAsync(options);
    } else if (buttonIndex == 1) {
      photo = await ImagePicker.launchImageLibraryAsync(options);
    }
    if (photo.cancelled == false) {
      this.setState({ photoData: photo });
    }
  };

  deletePhoto = () => {
    this.setState({ showConfirm: !this.state.showConfirm });
  };

  onConfirmDelete = async () => {
    await FileSystem.deleteAsync(this.state.photoData.uri);
    this.setState({
      photoData: null,
      showConfirm: false
    });
  };

  noteComponent = item => (
    <Card style={css.cardNote}>
      <CardItem style={css.cardItem}>
        <Text style={css.dateNote}>{moment(item.createdAt).format('L')}</Text>
      </CardItem>

      {item.image == true && (
        <CardItem style={css.itemImage}>
          <Image source={require('../assets/food.jpg')} style={css.imageNote} />
        </CardItem>
      )}
      <CardItem style={css.cardItem}>
        <Text style={css.textNote}>{item.text}</Text>
      </CardItem>
    </Card>
  );

  changeText = value => {
    this.setState({ noteText: value });
  };

  emptyComponent = () => {
    var mensaje = 'Aún no tienes notas sobre este lugar';
    if (this.state.loadingNotes) {
      mensaje = 'Cargando notas...';
    }
    return <Text style={css.noData}>{mensaje}</Text>;
  };

  swipeDeleteNote = (secId, rowId, rowMap) => {};

  render() {
    var collapsibleNewNote = (
      <Collapsible collapsed={!this.state.newNoteOpen}>
        <View>
          <TextInput
            multiline={true}
            style={css.textInput}
            onChangeText={this.changeText}
            value={this.state.noteText}
          />
          <View style={css.divBtns}>
            {this.state.photoData != null ? (
              <View style={css.divPhotoBtns}>
                <TouchableOpacity onPress={this.deletePhoto}>
                  <Image source={{ uri: this.state.photoData.uri }} style={css.thumbnail} />
                  <Icon name="close-circle" style={css.btnErasePhoto} />
                </TouchableOpacity>
                {this.state.showConfirm && (
                  <Button onPress={this.onConfirmDelete} style={css.btnConfirm}>
                    <Icon name="trash" style={css.icnBlanco} />
                  </Button>
                )}
              </View>
            ) : (
              <Button onPress={this.onPhoto} iconLeft style={css.btnNewNote}>
                <Icon name="image" style={css.icnBlanco} />
              </Button>
            )}
            <Button
              onPress={this.onSaveNote}
              iconLeft
              style={
                this.state.noteText.length > 0 || this.state.photoData != null ? css.btnNewNote : css.btnNewNoteDisabled
              }
              disabled={this.state.noteText.length == 0 && this.state.photoData == null}
            >
              <Icon name="add" style={css.icnBlanco} />
              <Text style={css.textBtnNewNote}>Guardar</Text>
            </Button>
          </View>
        </View>
      </Collapsible>
    );

    var place = appstore.placesStore.selectedPlace;

    return (
      <View style={css.container}>
        <HeaderComponent title="Notas" navigator={this.props.navigation} headerMode="modalOk" />
        <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={css.gradient}>
          <View style={css.floatingPanel}>
            <Text style={css.itemTitle}>{place.name}</Text>
            <Text style={css.itemAddress}>{place.vicinity}</Text>
          </View>
          <View style={css.floatingPanel}>
            <TouchableOpacity onPress={this.openNewNote}>
              <View style={css.flexrow}>
                <Text style={[css.flexFull, css.titleNewNote]}>{this.state.newNoteTitle}</Text>
                <Icon
                  name={this.state.newNoteOpen == false ? 'ios-arrow-back' : 'ios-arrow-down'}
                  style={{ color: colors.grisClaro }}
                />
              </View>
            </TouchableOpacity>
            {collapsibleNewNote}
          </View>
          <List
            style={css.listaNotas}
            dataSource={appstore.placesStore.selectedPlace.notes}
            keyExtractor={item => item._id}
            alwaysBounceVertical={false}
            ListEmptyComponent={this.emptyComponent}
            renderRow={({ item }) => this.noteComponent(item)}
            disableRightSwipe={true}
            renderLeftHiddenRow={(data, secId, rowId, rowMap) => (
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
            )}
            leftOpenValue={-75}
            rightOpenValue={75}
          />
        </LinearGradient>
      </View>
    );
  }
}

export default NotasComponent;
