'use strict';

import { observable, action } from 'mobx';

class PlacesStore {
  @observable visitedList;
  @observable notVisitedList;
  @observable selectedPlace;

  constructor(appstore) {
    this.appstore = appstore;
  }

  @action
  loadVisited() {}

  @action
  loadNotVisited() {}

  @action
  setSelectedPlace(place) {
    this.selectedPlace = place;
  }
}

export default PlacesStore;
