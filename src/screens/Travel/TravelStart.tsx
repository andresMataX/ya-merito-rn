import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInputComponent, TextInput } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useFonts } from 'expo-font';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelStart = ({ navigation }: Props) => {

  const [fontsLoaded] = useFonts({
    MaliExtraLight: require('../../../assets/fonts/Mali-ExtraLight.ttf'),
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    // MaliRegular: require('../../../assets/fonts/Mali-Regular.ttf'),
    // MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf'),
    MaliBold: require('../../../assets/fonts/Mali-Bold.ttf'),
    MaliMedium: require('../../../assets/fonts/Mali-Medium.ttf')
  });

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

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
          />
        </View>
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.favoritesContainer}>

        <View style={styles.favorito}>
          <Icon name='briefcase-outline' size={32} />
          <View style={{ width: 8 }} />
          <View style={styles.destinoContainer}>
            <Text style={styles.destinoTitle}>Trabajo</Text>
            <Text style={styles.destinoDireccion}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
          </View>
        </View>

        <View style={styles.favorito}>
          <Icon name='briefcase-outline' size={32} />
          <View style={{ width: 8 }} />
          <View style={styles.destinoContainer}>
            <Text style={styles.destinoTitle}>Trabajo</Text>
            <Text style={styles.destinoDireccion}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
          </View>
        </View>

        <View style={styles.favorito}>
          <Icon name='briefcase-outline' size={32} />
          <View style={{ width: 8 }} />
          <View style={styles.destinoContainer}>
            <Text style={styles.destinoTitle}>Trabajo</Text>
            <Text style={styles.destinoDireccion}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
          </View>
        </View>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1
  },
  mapContainer: {
    height: '48%',
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
  },
  formContainer: {
    width: '80%',
  },
  label: {
    fontSize: 32,
    fontFamily: 'MaliBold',
    lineHeight: 40,
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
  },
  favorito: {
    padding: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  destinoContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  destinoTitle: {
    fontSize: 20,
    fontFamily: 'MaliMedium',
    lineHeight: 28,
  },
  destinoDireccion: {
    fontSize: 12,
    fontFamily: 'MaliLight',
    lineHeight: 20,
  }
});