import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';


export const FormLogin = () => {

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce tu correo"
        placeholderTextColor="5F5F5F"
      />
      <View style={{ height: 16 }} />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce tu contraseña"
        placeholderTextColor="5F5F5F"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
          <View style={{ width: 8 }} />
          <Icon name="log-in-outline" size={20} />
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
    paddingHorizontal: 8
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'MaliLight'
  }
});