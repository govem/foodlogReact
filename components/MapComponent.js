import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import css from '../styles/MapStyle';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={css.container}>
        <MapView
          style={css.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            title="Prueba"
            description="Descripcion"
          />
        </MapView>
      </View>
    );
  }
}

export default MapComponent;
