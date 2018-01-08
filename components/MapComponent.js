import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import css from '../styles/MapStyle';
import appstore from '../stores/Appstore';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log('Selected place map: ' + JSON.stringify(appstore.placesStore.selectedPlace));
  };

  render() {
    var place = appstore.placesStore.selectedPlace;
    var vp = place.geometry.viewport;
    var latdelta = vp.northeast.lat - vp.southwest.lat;
    var lngdelta = vp.northeast.lng - vp.southwest.lng;

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
            title={place.name}
            description={place.vicinity}
          />
        </MapView>
      </View>
    );
  }
}

export default MapComponent;
