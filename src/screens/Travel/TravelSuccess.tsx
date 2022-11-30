import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ViajeContext } from '../../context/viajeContext/ViajeContext';
import { AuthContext } from '../../context/authContext/AuthContext';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelSuccess = ({ navigation, route }: Props) => {

  const { direccion, direccionAPI } = route.params!

  const { authState } = useContext(AuthContext);
  const { userID } = authState;

  const { postViaje } = useContext(ViajeContext);

  useEffect(() => {
    if (direccionAPI) {
      postViaje(userID, direccionAPI)
      agendarPushNotification().then(() => {

      })
    }
  }, [])

  const agendarPushNotification = async () => {

    let t = new Date()
    t.setSeconds(t.getSeconds() + 5)

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '¡¡¡Ya Merito llegas!!!',
          body: "Estás llegando a tu destino, DESPIERTA"
        },
        trigger: t
      })
      console.log('Notificación agendada');
    } catch (e) {
      console.log('La alerta falló');
    }
  }

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

      <View style={{ height: 104 }} />

      <Icon name='checkmark-circle-outline' size={110} color="#36C21F" />

      <View style={{ height: 104 }} />

      <View style={styles.infoContainer}>
        <View style={styles.destinoContainer}>
          <Text style={styles.destinoTitle}>Destino</Text>
          <Text style={styles.destinoDireccion}>{direccion}</Text>
        </View>

        <View style={{ height: 16 }} />

        <View style={styles.favoritoContainer}>
          <Text style={styles.rangoText}>El viaje se ha registrado exitosamente</Text>
          <View style={{ width: 8 }} />
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
    textAlign: 'center',
    lineHeight: 60
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