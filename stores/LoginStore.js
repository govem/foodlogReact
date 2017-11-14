'use strict';

import { observable, action } from 'mobx';
import { SecureStore, Facebook } from 'expo';

class LoginStore {
  KEY_FB_ID = 'FoodlogKeyFbIdUser';
  TOKEN_FB = 'FoodlogFbToken';
  FACEBOOK_APP_ID = '1326948427431878';

  @observable inLogin = true;

  constructor(appstore) {
    this.appstore = appstore;
  }

  @action
  async login() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(this.FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email', 'user_friends']
    });
    if (type === 'success') {
      const response = await fetch(
        'https://graph.facebook.com/me?fields=id,first_name,last_name,picture,friends{first_name,last_name,picture,id,name}&access_token=' +
          token
      );
      const personData = await response.json();
      this.setLoggedUser(personData, token);
    }
  }

  @action
  setLoggedUser(user, token) {
    this.appstore.loggedUser = user;
    console.log('data de fb: ' + JSON.stringify(this.appstore.loggedUser));
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
  logout() {
    SecureStore.deleteItemAsync(this.TOKEN_FB)
      .then(() => {
        console.log('token fb eliminado');
        this.appstore.setLoggedUser(null);
      })
      .catch(err => {
        console.log(err);
        //TODO manejar errores
      });
  }

  @action
  checkLoginStatus() {
    SecureStore.getItemAsync(this.TOKEN_FB)
      .then(
        action('getTokenFbSuccess', async token => {
          console.log('token encontrado, consultando fb');
          const response = await fetch(
            'https://graph.facebook.com/me?fields=id,first_name,last_name,picture&access_token=' + token
          );
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
