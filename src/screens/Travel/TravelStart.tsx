import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, FlatList, ActivityIndicator, Alert } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Maps } from '../../components/Travel/Maps';
import { FavoritoContext } from '../../context/favoritoContext/FavoritoContext';
import { Favorite } from '../../interfaces/Favorite/Favorite';
import { useLocation } from '../../hooks/useLocation';
import { useForm } from '../../hooks/useForm';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelStart = ({ navigation }: Props) => {

  const { favoritoState, getFavoritos, setDireccion, getDireccion } = useContext(FavoritoContext);
  const { isLoading, favoritos } = favoritoState;

  const { onChange, direccion } = useForm({
    direccion: ''
  })

  const [fontsLoaded] = useFonts({
    MaliExtraLight: require('../../../assets/fonts/Mali-ExtraLight.ttf'),
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliBold: require('../../../assets/fonts/Mali-Bold.ttf'),
    MaliMedium: require('../../../assets/fonts/Mali-Medium.ttf')
  });

  const { position, startForegroundUpdate } = useLocation();

  // Botón para menú hamburguesa
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon
            name='menu-outline'
            size={40}
          />
        </TouchableOpacity>
      )
    })
  }, [])

  useEffect(() => {
    getFavoritos()
    startForegroundUpdate()
  }, [])


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

  const renderFavorito = (data: Favorite) => {
    return (
      <TouchableOpacity
        onPress={() => {
          getDireccion(data.id_direccion).then(() => {
            navigation.navigate('TravelConfirm', { direccion: data.alias })
          })
        }}
        style={styles.favorito}
      >
        <Icon name={`${data.icono}-outline`} size={32} />
        <View style={{ width: 8 }} />
        <View style={styles.destinoContainer}>
          <Text style={styles.destinoTitle}>{data.alias}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.mainContainer}>

      {
        (position) ? (
          <Maps lat={position.latitude} lng={position.longitude} />
        ) : (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <ActivityIndicator color="#000" size={75} />
          </View>
        )
      }

      <View style={{ height: 16 }} />

      <View style={styles.formContainer}>
        <Text style={styles.label}>¿A dónde vamos?</Text>
        <View style={styles.inputContainer}>
          <Icon name='search-outline' size={24} />
          <View style={{ width: 8 }} />
          <TextInput
            style={styles.input}
            placeholder="Ingresa la dirección de destino"
            placeholderTextColor="#5A5A5A"
            onChangeText={(value) => onChange(value, 'direccion')}
          />
        </View>
      </View>

      <View style={{ height: 24 }} />

      <View style={styles.favoritesContainer}>
        <FlatList
          data={favoritos}
          renderItem={({ item }) => renderFavorito(item)}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>

      <View style={{ height: 8 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (direccion) {
              setDireccion()
              navigation.navigate('TravelConfirm', { direccion })
            } else {
              Alert.alert(
                "Datos incompletos",
                "Favor de escribir una dirección.",
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
          <Text style={styles.buttonText}>Iniciar</Text>
          <View style={{ width: 8 }} />
          <Icon name="navigate-circle-outline" size={28} />
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
  formContainer: {
    width: '80%',
  },
  label: {
    fontSize: 24,
    fontFamily: 'MaliBold',
    lineHeight: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    fontFamily: 'MaliRegular',
    fontSize: 16,
    height: '100%',
    color: 'black',
  },
  favoritesContainer: {
    width: '80%',
    height: '25%',
  },
  favorito: {
    padding: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  destinoContainer: {
    flex: 1,
  },
  destinoTitle: {
    fontSize: 20,
    fontFamily: 'MaliMedium',
    lineHeight: 28,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
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
    fontFamily: 'MaliRegular'
  }
});