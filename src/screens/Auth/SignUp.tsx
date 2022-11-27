import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { FormSignup } from '../../components/Auth/FormSignup';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AuthContext } from '../../context/authContext/AuthContext';

interface Props extends DrawerScreenProps<any, any> { }

export const SignUp = ({ navigation, route }: Props) => {

  const { authState } = useContext(AuthContext);
  const { isLoading } = authState;

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
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