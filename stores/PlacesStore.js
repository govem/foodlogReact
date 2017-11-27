'use strict';

import { observable, action } from 'mobx';
import endpoints from '../utils/Endpoints';

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

  @action
  loadVisited() {}

  @action
  loadNotVisited() {}

  @action
  setSelectedPlace(place) {
    this.selectedPlace = place;
  }

  @action
  searchPlace(keyword, latitude, longitude, callback, failcallback) {
    fetch(
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
      .then(response => {
        return response.json();
      })
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

  @action
  addPlace(place, callback) {
    console.log(this.appstore.loggedUser);
    fetch(endpoints.ADD_PLACE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ place: place, user: { _id: this.appstore.loggedUser._id } })
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

  @action
  userPlaces(visited, callback) {
    var visiturl = visited == true ? 'visited' : 'notvisited';
    var url = endpoints.USER_PLACES + '/' + this.appstore.loggedUser._id + '/' + visiturl;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
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
}

export default PlacesStore;
