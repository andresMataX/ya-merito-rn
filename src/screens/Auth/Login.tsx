import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { FormLogin } from '../../components/Auth/FormLogin';

export const Login = () => {

  const [fontsLoaded] = useFonts({
    MaliExtraLight: require('../../../assets/fonts/Mali-ExtraLight.ttf'),
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliRegular: require('../../../assets/fonts/Mali-Regular.ttf'),
    MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo_app.jpeg')}
        style={{ width: 200, height: 175 }}
      />
      <View style={{ height: 72 }} />
      <View style={styles.formLogin}>
        <FormLogin />
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