import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { History } from '../screens/History/History';
import { TravelStart } from '../screens/Travel/TravelStart';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { ButtonOpcion } from '../components/Drawer/ButtonOpcion';
import { AuthStack } from './AuthStack';
import { TravelStack } from './TravelStack';
import { Favorites } from '../screens/Favorites/Favorites';
import { CambiarContraModal } from '../components/Drawer/Modal/CambiarContraModal';
import { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext, AuthState } from '../context/authContext/AuthContext';
import { FavoritoContext, FavoritoState } from '../context/favoritoContext/FavoritoContext';
import { ViajeContext, ViajeState } from '../context/viajeContext/ViajeContext';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const [fontsLoaded] = useFonts({
    MaliExtraLight: require('../../assets/fonts/Mali-ExtraLight.ttf'),
    MaliLight: require('../../assets/fonts/Mali-Light.ttf'),
    MaliRegular: require('../../assets/fonts/Mali-Regular.ttf'),
    MaliSemiBold: require('../../assets/fonts/Mali-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Drawer.Navigator
      initialRouteName='AuthStack'
      screenOptions={{
        headerStyle: {
          elevation: 0
        },
        sceneContainerStyle: {
          backgroundColor: 'white'
        },
        title: ''
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="AuthStack" options={{ headerShown: false }} component={AuthStack} />
      <Drawer.Screen name="TravelStack" component={TravelStack} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation, descriptors, state }: DrawerContentComponentProps) => {

  const [visibleCambiarContraModal, setVisibleCambiarContraModal] = useState(false)

  const { authState, deleteUsuario } = useContext(AuthContext);
  const { userID } = authState;

  return (
    <DrawerContentScrollView>

      <View style={styles.containerMenu}>

        <Text style={styles.title}>¡Ya Merito!</Text>

        <View style={{ height: 32 }} />

        <View>
          <Text style={styles.titleSeccion}>General</Text>
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Viajar"
            iconName="map-outline"
            screenName='TravelStart'
            favorito
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Favoritos"
            iconName="star-outline"
            screenName='Favorites'
            favorito
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Historial de viajes"
            iconName="list-outline"
            screenName='History'
            viajes
          />
        </View>

        <View style={{ height: 32 }} />

        <View>
          <Text style={styles.titleSeccion}>Cuenta</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisibleCambiarContraModal(true)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="lock-open-outline" size={16} />
              <View style={{ width: 8 }} />
              <Text style={styles.buttonText}>Cambiar contraseña</Text>
            </View>
            <Icon name='chevron-forward-outline' size={20} />
          </TouchableOpacity>

          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Cerrar sesión"
            iconName="log-out-outline"
            screenName='AuthStack'
          />

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              Alert.alert(
                "Confirmación",
                "¿Está seguro de eliminar la cuenta?",
                [
                  {
                    text: "Cancelar",
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      deleteUsuario(userID).then(() => {
                        navigation.navigate('AuthStack')
                      })
                    }
                  }
                ],
              )
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="trash-outline" size={16} color="#EE1D1D" />
              <View style={{ width: 8 }} />
              <Text style={{ ...styles.buttonText, color: '#EE1D1D' }}>Eliminar cuenta</Text>
            </View>
            <Icon name='chevron-forward-outline' size={20} color="#EE1D1D" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />

        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image source={require('../../assets/camión.png')} style={{ width: 200, height: 100 }} />
        </View>

      </View>

      <CambiarContraModal
        visibleCambiarContraModal={visibleCambiarContraModal}
        setVisibleCambiarContraModal={setVisibleCambiarContraModal}
      />

    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  containerMenu: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: 'MaliLight'
  },
  titleSeccion: {
    fontSize: 16,
    fontFamily: 'MaliExtraLight'
  },
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'MaliLight'
  }
});