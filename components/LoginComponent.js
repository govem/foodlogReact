'use strict';

import React from 'react';
import { Facebook, LinearGradient } from 'expo';
import { observer } from 'mobx-react';
import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import { Container, Grid, Row, Button, Icon, Text } from 'native-base';

import appstore from '../stores/Appstore';

@observer
class LoginComponent extends React.Component {
  FACEBOOK_APP_ID = '1326948427431878';

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    appstore.loginStore.checkLoginStatus();
  };

  logIn = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(this.FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email']
    });
    if (type === 'success') {
      const response = await fetch('https://graph.facebook.com/me?fields=id,first_name,last_name,picture&access_token=' + token);
      const personData = await response.json();
      appstore.loginStore.setLoggedUser(personData, token);
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <LinearGradient colors={['#FDA63A', '#FEC750']}>
          <Grid>
            <Row style={styles.loginRow}>
              <Image source={require('../assets/titulo.png')} style={styles.loginTitulo} />
            </Row>
            <Row style={{ height: 65 }}>
              <View style={{ width: '100%' }}>
                {appstore.loginStore.inLogin === true ? (
                  <ActivityIndicator color="#3B5998" size="large" />
                ) : (
                  <Button iconLeft style={styles.btnFacebook} onPress={this.logIn}>
                    <Icon name="logo-facebook" style={styles.icnFacebook} />
                    <Text>Ingresa con Facebook</Text>
                  </Button>
                )}
              </View>
            </Row>
          </Grid>
        </LinearGradient>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginRow: {
    justifyContent: 'center'
  },
  loginTitulo: {
    alignSelf: 'center'
  },
  btnFacebook: {
    backgroundColor: '#3B5998',
    alignSelf: 'center',
    marginBottom: 20
  },
  icnFacebook: {
    color: '#fff'
  }
});

export default LoginComponent;
