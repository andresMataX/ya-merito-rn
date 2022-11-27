import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

export const FormSignup = ({ navigation }: Props) => {

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        autoCapitalize='words'
        style={styles.input}
        placeholder="Introduce tu nombre"
        placeholderTextColor="5F5F5F"
      />


      <Text style={styles.label}>Apellido</Text>
      <TextInput
        autoCapitalize='words'
        style={styles.input}
        placeholder="Introduce tu apellido"
        placeholderTextColor="5F5F5F"
      />


      <Text style={styles.label}>Correo</Text>
      <TextInput
        keyboardType='email-address'
        autoCapitalize='none'
        style={styles.input}
        placeholder="Introduce tu correo"
        placeholderTextColor="5F5F5F"
      />


      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        autoComplete='off'
        autoCapitalize='none'
        secureTextEntry={true}
        style={styles.input}
        placeholder="Introduce tu contraseña"
        placeholderTextColor="5F5F5F"
      />

      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        autoComplete='off'
        autoCapitalize='none'
        secureTextEntry={true}
        style={styles.input}
        placeholder="Confirma tu contraseña"
        placeholderTextColor="5F5F5F"
      />

      <View style={{ height: 32 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TravelStack')}
        >
          <Text style={styles.buttonText}>Crear</Text>
          <View style={{ width: 8 }} />
          <Icon name="log-in-outline" size={28} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    color: 'black',
    fontSize: 24,
    fontFamily: 'MaliLight'
  },
  label: {
    fontFamily: 'MaliSemiBold',
    fontSize: 24
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'MaliLight'
  }
});