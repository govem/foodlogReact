'use strict';

import { observable, action } from 'mobx';
import { SecureStore, Facebook } from 'expo';
import endpoints from '../utils/Endpoints';

class LoginStore {
  KEY_FB_ID = 'FoodlogKeyFbIdUser';
  TOKEN_FB = 'FoodlogFbToken';
  FACEBOOK_APP_ID = '1326948427431878';

  @observable inLogin = true;

  GRAPHURL = 'https://graph.facebook.com/me?fields=id,first_name,last_name,email,picture.width(250),friends{first_name,last_name,picture,id,name}&access_token=';

  constructor(appstore) {
    this.appstore = appstore;
  }

  @action
  async login() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(this.FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email', 'user_friends']
    });
    if (type === 'success') {
      const response = await fetch(this.GRAPHURL + token);
      const personData = await response.json();
      this.callLogin(personData, token);
    }
  }

  @action
  setLoggedUser(user, token) {
    this.appstore.loggedUser = user;
    console.log('data de fb: ' + JSON.stringify(this.appstore.loggedUser));
    SecureStore.setItemAsync(this.KEY_FB_ID, user._id)
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
          if (token != null) {
            console.log('token encontrado, consultando fb');
            const response = await fetch(this.GRAPHURL + token);
            const personData = await response.json();
            if (!personData.error) {
              this.callLogin(personData, token);
            } else {
              this.inLogin = false;
              console.log('Error al obtener datos de fb: ' + personData.error.message);
            }
          } else {
            this.inLogin = false;
            console.log('token no encontrado');
          }
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  @action
  callLogin(personData, token) {
    console.log('llamando a login');
    var person = {
      fbid: personData.id,
      name: personData.first_name,
      lastname: personData.last_name,
      email: personData.email
    };
    fetch(endpoints.LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: person })
    })
      .then(response => {
        return response.json();
      })
      .then(
        action('loginok', response => {
          console.log('usuario obtenido desde bd:' + JSON.stringify(response));
          this.setLoggedUser(response, token);
        })
      )
      .catch(err => {
        console.log('error logueando usuario');
      });
  }
}

export default LoginStore;
