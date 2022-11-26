import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { FormLogin } from '../../components/Auth/FormLogin';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../library/types';

interface Props extends StackScreenProps<RootStackParams, any> { }

export const Login = ({ navigation, route }: Props) => {

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