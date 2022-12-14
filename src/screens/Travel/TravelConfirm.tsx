import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Maps } from '../../components/Travel/Maps';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm } from '../../hooks/useForm';
import { FavoritoContext } from '../../context/favoritoContext/FavoritoContext';
import { useCoords } from '../../hooks/useCoords';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelConfirm = ({ navigation, route }: Props) => {

  const { direccion } = route.params!

  const { favoritoState } = useContext(FavoritoContext);
  const { direccion: direccionFav } = favoritoState;

  const { coords, isLoading, direccion: direccionAPI } = useCoords(
    (direccionFav) ? (direccionFav) : (direccion)
  )

  const { onChange, range } = useForm({
    range: 1500
  })

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliBold: require('../../../assets/fonts/Mali-Bold.ttf'),
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
    <View style={styles.mainContainer}>

      <Maps
        coords={{
          lat: coords.lat,
          lng: coords.lng
        }}
        rango={(range) ? range : 0}
        circulo
      />

      <View style={{ height: 16 }} />

      <View style={styles.formContainer}>
        <View style={styles.destinoContainer}>
          <Text style={styles.label}>Destino</Text>
          <Text style={styles.input}>{direccion}</Text>
        </View>

        <View style={{ height: 16 }} />

        <View style={styles.destinoContainer}>
          <Text style={styles.label}>Zona de alarma (m)</Text>
          <TextInput
            style={styles.input}
            value={range.toString()}
            keyboardType="decimal-pad"
            onChangeText={(value) => {
              if (value && value.length < 6) {
                onChange(Number.parseInt(value), 'range')
              } else {
                onChange(0, 'range')
              }
            }}
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
          onPress={() => {
            if (range > 100 && range < 10000) {
              navigation.navigate('TravelMode', {
                range,
                coordsMarker: coords,
                direccion,
                direccionAPI
              })
            } else {
              Alert.alert(
                "Rango inv??lido",
                "Favor de escribir un rango mayor a 100 m y menor a 10,000 m",
                [
                  {
                    text: "Ok",
                  }
                ],
                {
                  cancelable: true,
                }
              )
            }
          }}
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