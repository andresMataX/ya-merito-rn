import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Maps } from '../../components/Travel/Maps';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelConfirm = ({ navigation, route }: Props) => {

  const { direccion } = route.params!

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliBold: require('../../../assets/fonts/Mali-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>

      {/* <Maps lat={position.latitude} lng={position.longitude} /> */}

      <View style={{ height: 16 }} />

      <View style={styles.formContainer}>
        <View style={styles.destinoContainer}>
          <Text style={styles.label}>Destino</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={direccion}
          />
        </View>

        <View style={{ height: 16 }} />

        <View style={styles.destinoContainer}>
          <Text style={styles.label}>Zona de alarma (m)</Text>
          <TextInput
            style={styles.input}
            value={"900"}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <View style={{ height: 80 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
          <View style={{ width: 8 }} />
          <Icon name="close-outline" size={28} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TravelMode')}
        >
          <Text style={styles.buttonText}>Aceptar</Text>
          <View style={{ width: 8 }} />
          <Icon name="checkmark-outline" size={28} />
        </TouchableOpacity>
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1
  },
  formContainer: {
    width: '80%',
  },
  destinoContainer: {
    width: '100%',
  },
  label: {
    fontFamily: 'MaliBold',
    fontSize: 24,
    lineHeight: 26
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 32,
    fontFamily: 'MaliLight',
    lineHeight: 32,
    color: 'black'
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'MaliRegular'
  },
});