'use strict';

import { observable, action } from 'mobx';

class PlacesStore {
  @observable visitedList;
  @observable notVisitedList;

  constructor(appstore) {
    this.appstore = appstore;
  }

  @action
  loadVisited() {}

  @action
  loadNotVisited() {}
}

export default PlacesStore;
