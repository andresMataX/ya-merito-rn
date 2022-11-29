import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Camera, Circle } from 'react-native-maps';
import { Location } from '../../interfaces/Travel/PlacesAPI';

export const Maps = (coords: Location) => {

  const camera: Camera = {
    center: { latitude: coords.lat, longitude: coords.lng },
    altitude: 0.5,
    heading: 0.5,
    pitch: 0.5,
    zoom: 15
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: coords.lat!,
          longitude: coords.lng!,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        camera={camera}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Marker
          coordinate={{
            latitude: coords.lat,
            longitude: coords.lng,
          }}
        />
        <Circle
          center={{
            latitude: coords.lat,
            longitude: coords.lng
          }}
          radius={1500}
          strokeWidth={2}
          fillColor="rgba(0,0,0,0.3)"
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    height: '47%',
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
  },
});