import { computed, observable, action } from 'mobx';

import LoginStore from './LoginStore.js';
import PlacesStore from './PlacesStore.js';

class Appstore {
  @observable loggedUser = null;
  @observable selectedTabIndex = 0;
  @observable items = [];
  @observable drawerOpened = false;

  INDEX_POR_VISITAR = 0;
  INDEX_VISITADOS = 1;

  itemsPorVisitar = [
    {
      id: 1,
      name: 'por visitar 1',
      address: 'calle 123',
      time: '10:00 - 20:00',
      visits: '25 visitas',
      image: './assets/cafe.png'
    },
    {
      id: 2,
      name: 'por visitar 2',
      address: 'calle 123',
      time: '10:00 - 20:00',
      visits: '25 visitas',
      image: '../assets/cafe.png'
    },
    {
      id: 3,
      name: 'por visitar 3',
      address: 'calle 123',
      time: '10:00 - 20:00',
      visits: '25 visitas',
      image: '../assets/cafe.png'
    }
  ];

  itemsVisitados = [
    {
      id: 1,
      name: 'visitado 1',
      address: 'calle 123',
      time: '10:00 - 20:00',
      visits: '25 visitas',
      image: './assets/cafe.png',
      visitas: [
        {
          order: 1,
          date: '29 Oct 2017',
          content: '3 platos',
          stars: 0
        },
        {
          order: 2,
          date: '02 Nov 2017',
          content: '2 platos',
          stars: 5
        }
      ]
    },
    {
      id: 2,
      name: 'visitado 2',
      address: 'calle 123',
      time: '10:00 - 20:00',
      visits: '25 visitas',
      image: './assets/cafe.png',
      visitas: [
        {
          order: 1,
          date: '29 Oct 2017',
          content: '3 platos',
          stars: 4
        }
      ]
    },
    {
      id: 3,
      name: 'visitado 3',
      address: 'calle 123',
      time: '10:00 - 20:00',
      visits: '25 visitas',
      image: './assets/cafe.png',
      visitas: [
        {
          order: 1,
          date: '29 Oct 2017',
          content: '3 platos',
          stars: 3
        },
        {
          order: 2,
          date: '02 Nov 2017',
          content: '2 platos',
          stars: 5
        },
        {
          order: 3,
          date: '02 Nov 2017',
          content: '2 platos',
          stars: 5
        },
        {
          order: 4,
          date: '02 Nov 2017',
          content: '2 platos',
          stars: 5
        },
        {
          order: 5,
          date: '02 Nov 2017',
          content: '2 platos',
          stars: 5
        }
      ]
    }
  ];

  constructor() {
    this.loginStore = new LoginStore(this);
    this.placesStore = new PlacesStore(this);
    this.items = this.itemsPorVisitar;
  }

  @action
  setLoggedUser(value) {
    this.loggedUser = value;
  }

  @action
  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }

  @action
  changeIndex(index, force) {
    this.selectedTabIndex = index;
    if (this.selectedTabIndex == this.INDEX_POR_VISITAR) {
      if (!appstore.placesStore.notvisitedLoaded || force == true) {
        appstore.placesStore.userPlaces(false);
      }
    } else {
      if (!appstore.placesStore.visitedLoaded || force == true) {
        appstore.placesStore.userPlaces(true);
      }
    }
  }

  @computed
  get nombreCompleto() {
    return this.loggedUser.first_name + ' ' + this.loggedUser.last_name;
  }
}

const appstore = new Appstore();
export default appstore;
