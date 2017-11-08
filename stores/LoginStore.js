'use strict';

import { observable, action } from 'mobx';
import { SecureStore } from 'expo';

class LoginStore {
  KEY_FB_ID = 'FoodlogKeyFbIdUser';
  TOKEN_FB = 'FoodlogFbToken';

  @observable inLogin = true;

  constructor(appstore) {
    this.appstore = appstore;
  }

  @action
  setLoggedUser(user, token) {
    this.appstore.loggedUser = user;
    console.log(user.id);
    SecureStore.setItemAsync(this.KEY_FB_ID, user.id)
      .then(() => {
        console.log('facebook id guardado');
        SecureStore.setItemAsync(this.TOKEN_FB, token)
          .then(() => {
            console.log('token guardado');
          })
          .catch(err => {
            console.log(err);
            //TODO manejar errores
          });
      })
      .catch(err => {
        console.log(err);
        //TODO manejar errores
      });
  }

  @action
  checkLoginStatus() {
    //SecureStore.deleteItemAsync(this.TOKEN_FB);
    //SecureStore.deleteItemAsync(this.KEY_FB_ID);
    SecureStore.getItemAsync(this.TOKEN_FB)
      .then(
        action('getTokenFbSuccess', async token => {
          console.log('token encontrado, consultando fb');
          const response = await fetch('https://graph.facebook.com/me?fields=id,first_name,last_name,picture&access_token=' + token);
          const personData = await response.json();
          if (!personData.error) {
            console.log(personData);
            //TODO ir a la bd con el dato del usuario y cargar el resto de la data
            this.setLoggedUser(personData, token);
          } else {
            this.inLogin = false;
            console.log('Error al obtener datos de fb: ' + personData.error.message);
          }
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
}

export default LoginStore;
