import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelSuccess = ({ navigation }: Props) => {

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

      <Text style={styles.title}>Viaje completado</Text>

      <View style={{ height: 74 }} />

      <Icon name='checkmark-circle-outline' size={110} color="#36C21F" />

      <View style={{ height: 74 }} />

      <View style={styles.infoContainer}>
        <View style={styles.destinoContainer}>
          <Text style={styles.destinoTitle}>Destino</Text>
          <Text style={styles.destinoDireccion}>Escuela</Text>
        </View>

        <View style={{ height: 8 }} />

        <View style={styles.favoritoContainer}>
          <Text style={styles.rangoText}>Marcar destino como favorito: </Text>
          <View style={{ width: 8 }} />
          <TouchableOpacity>
            <Icon name='star-outline' size={16} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 48 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TravelStart')}
        >
          <Icon name='arrow-back-outline' size={75} />
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
    fontFamily: 'MaliBold',
    textAlign: 'center'
  },
  infoContainer: {
    width: '80%',
  },
  destinoContainer: {
    width: '100%',
  },
  favoritoContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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