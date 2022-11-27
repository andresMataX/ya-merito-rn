import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelStart = ({ navigation }: Props) => {

  // Botón para menú hamburguesa
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon
            name='menu-outline'
            size={40}
          />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.mainContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1
  },
  mapContainer: {
    height: '48%',
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
  }
});