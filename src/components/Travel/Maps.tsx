import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const Maps = () => {

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    height: '40%',
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
  },
});