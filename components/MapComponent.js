import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import css from '../styles/MapStyle';
import appstore from '../stores/Appstore';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var place = appstore.placesStore.selectedPlace;
    var latdelta = place.geometry.viewport.northeast.lat - place.geometry.viewport.southwest.lat;
    var lngdelta = place.geometry.viewport.northeast.lng - place.geometry.viewport.southwest.lng;

    return (
      <View style={css.container}>
        <MapView
          style={css.map}
          initialRegion={{
            latitude: place.geometry.location.lat,
            longitude: place.geometry.location.lng,
            latitudeDelta: latdelta,
            longitudeDelta: lngdelta
          }}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng
            }}
            title={appstore.placesStore.selectedPlace.name}
            description={appstore.placesStore.selectedPlace.vicinity}
          />
        </MapView>
      </View>
    );
  }
}

export default MapComponent;
