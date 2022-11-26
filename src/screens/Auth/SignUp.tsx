import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../library/types';
import { FormSignup } from '../../components/Auth/FormSignup';

interface Props extends StackScreenProps<RootStackParams, any> { }

export const SignUp = ({ navigation, route }: Props) => {

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
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
      <View style={{ height: 32 }} />
      <View style={styles.formLogin}>
        <Text style={styles.title}>Crea tu cuenta</Text>
        <FormSignup navigation={navigation} route={route} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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