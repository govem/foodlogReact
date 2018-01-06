'use strict';

import { observable, action } from 'mobx';
import endpoints from '../utils/Endpoints';
import services from '../utils/Services';

class PlacesStore {
  @observable visitedList;
  @observable notVisitedList;
  @observable selectedPlace;
  @observable searchResults;
  @observable searchError;
  @observable searchErrorMessage;

  @observable visitedUserPlaces = [];
  @observable notVisitedUserPlaces = [];

  @observable visitedLoaded = false;
  @observable notvisitedLoaded = false;

  constructor(appstore) {
    this.appstore = appstore;
    this.searchResults = [];
    this.searching = false;
    this.searchError = false;
  }

  /** ----------------------------------------------------------- */
  @action
  loadVisited() {}

  /** ----------------------------------------------------------- */
  @action
  loadNotVisited() {}

  /** ----------------------------------------------------------- */
  @action
  setSelectedPlace(place) {
    this.selectedPlace = place;
  }

  /** ----------------------------------------------------------- */
  @action
  searchPlace(keyword, latitude, longitude, callback, failcallback) {
    services
      .doGet(
        endpoints.SEARCH_URL +
          '?userid=' +
          this.appstore.loggedUser._id +
          '&search=' +
          keyword +
          '&location=' +
          latitude +
          ',' +
          longitude
      )
      .then(
        action('searchresult', response => {
          console.log('result ok: ' + response.length);
          this.searchResults = response;
          callback(response.length);
        })
      )
      .catch(
        action('searcherror', error => {
          console.log('result err');
          failcallback(error.message);
        })
      );
  }

  /** ----------------------------------------------------------- */
  @action
  addPlace(place, callback) {
    console.log(this.appstore.loggedUser);
    services
      .doPost(endpoints.ADD_PLACE, {
        place: place,
        user: { _id: this.appstore.loggedUser._id }
      })
      .then(
        action('addresult', response => {
          console.log('add ok');
          callback();
        })
      )
      .catch(
        action('adderror', err => {
          console.log(err.message);
          callback(err.message);
        })
      );
  }

  /** ----------------------------------------------------------- */
  @action
  userPlaces(visited, callback) {
    var visiturl = visited == true ? 'visited' : 'notvisited';
    var url = endpoints.USER_PLACES + '/' + this.appstore.loggedUser._id + '/' + visiturl;
    services
      .doGet(url)
      .then(
        action('userplacesresult', response => {
          console.log('lugares de usuario obtenidos');
          if (visited == true) {
            this.visitedUserPlaces = response;
            this.visitedLoaded = true;
          } else {
            this.notVisitedUserPlaces = response;
            this.notvisitedLoaded = true;
          }
          if (callback != null) {
            callback();
          }
        })
      )
      .catch(
        action('userplacesfail', err => {
          console.log('fallo al buscar lugares de usuario: ' + err.message);
          if (callback != null) {
            callback();
          }
        })
      );
  }

  /** ----------------------------------------------------------- */
  @action
  addVisit(date, dishes, callback, failcallback) {
    services
      .doPost(endpoints.ADD_VISIT, {
        date: date,
        userId: this.appstore.loggedUser._id,
        placeId: this.selectedPlace._id,
        dishes: dishes
      })
      .then(
        action('addvisitresult', response => {
          console.log('visita guardada');
          if (callback != null) {
            callback();
          }
        })
      )
      .catch(
        action('addvisitfail', err => {
          console.log('fallo agregando visita:' + err.message);
          if (failcallback != null) {
            failcallback();
          }
        })
      );
  }

  /** ----------------------------------------------------------- */
  @action
  loadVisits() {
    services
      .doPost(endpoints.LOAD_VISITS, {
        userId: this.appstore.loggedUser._id,
        placeId: this.selectedPlace._id
      })
      .then(
        action('loadvisitsresult', response => {
          console.log('visitas cargadas');
          this.selectedPlace.visits = response;
        })
      )
      .catch(
        action('loadvisitsfail', err => {
          console.log('fallo cargando visitas:' + err.message);
          //TODO
        })
      );
  }
}

export default PlacesStore;
