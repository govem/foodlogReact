import React from 'react';

import { observer } from 'mobx-react';
import styles from '../styles/SidebarStyle.js';
import appstore from '../stores/Appstore.js';
import { View, Image } from 'react-native';
import { Text, Button } from 'native-base';

@observer
class SidebarComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('foto:' + appstore.loggedUser.picture.data.url);
  }

  logout = () => {
    appstore.loginStore.logout();
  };

  render() {
    return (
      <View style={styles.sidebar}>
        <Image style={styles.foto} source={{ uri: appstore.loggedUser.picture.data.url }} />
        <Text style={styles.nombre}>{appstore.nombreCompleto}</Text>
        <View style={styles.listaMenu}>
          <Button transparent light>
            <Text>Opcion 1</Text>
          </Button>
          <Button transparent>
            <Text>Opcion 2</Text>
          </Button>
          <Button transparent onPress={this.logout}>
            <Text>Desconectar Facebook</Text>
          </Button>
        </View>
        <View style={styles.mensajeBox}>
          <Text style={styles.mensaje}>To Susana, with love</Text>
        </View>
      </View>
    );
  }
}

export default SidebarComponent;
