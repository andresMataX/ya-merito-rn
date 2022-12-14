import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { FormLogin } from '../../components/Auth/FormLogin';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AuthContext } from '../../context/authContext/AuthContext';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import moment from 'moment';

interface Props extends DrawerScreenProps<any, any> { }

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true
  })
})

export const Login = ({ navigation, route }: Props) => {

  // const [fontsLoaded] = useFonts({
  //   MaliExtraLight: require('../../../assets/fonts/Mali-ExtraLight.ttf'),
  //   MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
  //   MaliRegular: require('../../../assets/fonts/Mali-Regular.ttf'),
  //   MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
  // });

  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        console.log('Fallando al obtener el token para push notifications por permisos');
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log({ token });
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    return token;
  }

  const [expoPushToken, setExpoPushToken] = useState<string | undefined>()

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))
  }, [])


  const { authState } = useContext(AuthContext);
  const { isLoading } = authState;

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color="#000" size={75} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo_app.jpeg')}
        style={{ width: 200, height: 175 }}
      />
      <View style={{ height: 72 }} />
      <View style={styles.formLogin}>
        <Text style={styles.title}>Ingresa con tu cuenta</Text>
        <FormLogin navigation={navigation} route={route} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  formLogin: {
    width: '100%'
  },
  title: {
    fontFamily: 'MaliLight',
    fontSize: 24
  }
});