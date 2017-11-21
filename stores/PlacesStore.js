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
    fetch(endpoints.SEARCH_URL + '?search=' + keyword + '&location=' + latitude + ',' + longitude)
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
}

export default PlacesStore;
