import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

export const TravelMode = () => {

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliBold: require('../../../assets/fonts/Mali-Bold.ttf'),
    MaliRegular: require('../../../assets/fonts/Mali-Regular.ttf'),
    MaliExtraLight: require('../../../assets/fonts/Mali-ExtraLight.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>

      <Text style={styles.title}>Viaje iniciado</Text>

      <View style={{ height: 104 }} />

      <Icon name='bus-outline' size={110} />

      <View style={{ height: 104 }} />

      <View style={styles.infoContainer}>
        <View style={styles.destinoContainer}>
          <Text style={styles.destinoTitle}>Destino</Text>
          <Text style={styles.destinoDireccion}>Escuela</Text>
        </View>

        <View style={{ height: 8 }} />

        <View style={styles.destinoContainer}>
          <Text style={styles.distanciaText}>Distancia con el destino: 6200 m</Text>
          <Text style={styles.rangoText}>Rango seleccionado: 1500 m</Text>
        </View>
      </View>

      <View style={{ height: 48 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        // onPress={() => { console.log('elpepe') }}
        >
          <Icon name='close-outline' size={75} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 48,
    fontFamily: 'MaliBold'
  },
  infoContainer: {
    width: '80%',
  },
  destinoContainer: {
    width: '100%',
  },
  destinoTitle: {
    fontFamily: 'MaliBold',
    fontSize: 24,
    lineHeight: 26
  },
  destinoDireccion: {
    fontSize: 32,
    fontFamily: 'MaliLight',
    lineHeight: 35,
  },
  distanciaContainer: {
    width: '100%',
  },
  distanciaText: {
    fontSize: 18,
    fontFamily: 'MaliRegular',
  },
  rangoText: {
    fontSize: 18,
    fontFamily: 'MaliExtraLight',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center'
  }
});