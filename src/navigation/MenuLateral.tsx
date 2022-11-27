import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { History } from '../screens/History/History';
import { TravelStart } from '../screens/Travel/TravelStart';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { ButtonOpcion } from '../components/Drawer/ButtonOpcion';
import { AuthStak } from './AuthStack';

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
        }
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="AuthStak" options={{ headerShown: false }} component={AuthStak} />
      <Drawer.Screen name="TravelStart" options={{ title: '' }} component={TravelStart} />
      <Drawer.Screen name="History" options={{ title: '' }} component={History} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation, descriptors, state }: DrawerContentComponentProps) => {
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
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Favoritos"
            iconName="star-outline"
            screenName='AuthStak'
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Historial de viajes"
            iconName="list-outline"
            screenName='History'
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Ajustes"
            iconName="settings-outline"
            screenName=''
          />
        </View>

        <View style={{ height: 32 }} />

        <View>
          <Text style={styles.titleSeccion}>Cuenta</Text>
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Cambiar contraseña"
            iconName="lock-open-outline"
            screenName=''
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Cerrar sesión"
            iconName="log-out-outline"
            screenName=''
          />
          <ButtonOpcion
            navigation={navigation}
            descriptors={descriptors}
            state={state}
            buttonText="Eliminar cuenta"
            iconName="trash-outline"
            screenName=''
          />
        </View>

        <View style={{ height: 32 }} />

        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image source={require('../../assets/camión.png')} style={{ width: 200, height: 100 }} />
        </View>

      </View>

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
});