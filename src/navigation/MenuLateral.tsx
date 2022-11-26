import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { History } from '../screens/History/History';
import { TravelStart } from '../screens/Travel/TravelStart';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonOpcion } from '../components/Drawer/ButtonOpcion';

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

        <View style={{ height: 40 }} />

        <View>
          <Text style={styles.titleSeccion}>General</Text>
          <ButtonOpcion navigation={navigation} descriptors={descriptors} state={state} />
          <ButtonOpcion navigation={navigation} descriptors={descriptors} state={state} />
          <ButtonOpcion navigation={navigation} descriptors={descriptors} state={state} />
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
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'MaliLight'
  }
});