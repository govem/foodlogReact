'use strict';

import { observable, action } from 'mobx';
import endpoints from '../utils/Endpoints';
import services from '../utils/Services';

class NotesStore {
  constructor(appstore) {
    this.appstore = appstore;
  }

  @action
  saveNote(noteText, photoData, callback, failcallback) {
    services
      .doPost(endpoints.ADD_NOTE, {
        userId: this.appstore.loggedUser._id,
        placeId: this.appstore.placesStore.selectedPlace._id,
        text: noteText
      })
      .then(
        action('savenote result', response => {
          console.log('nota guardada');
          if (callback != null) {
            callback();
          }
        })
      )
      .catch(
        action('savenote fail', err => {
          console.log('fallo guardando nota: ' + err.message);
          if (failcallback != null) {
            failcallback();
          }
        })
      );
  }

  @action
  loadNotes(callback, failcallback) {
    services
      .doGet(
        endpoints.LOAD_NOTES + '/' + this.appstore.loggedUser._id + '/' + this.appstore.placesStore.selectedPlace._id
      )
      .then(
        action('loadnotes result', response => {
          console.log('notas cargadas:' + response.length);
          this.appstore.placesStore.setNotesToPlace(response);
          if (callback != null) {
            callback();
          }
        })
      )
      .catch(
        action('loadnotes fail', err => {
          console.log('fallo cargando notas: ' + err.message);
          if (failcallback != null) {
            failcallback();
          }
        })
      );
  }
}

export default NotesStore;
