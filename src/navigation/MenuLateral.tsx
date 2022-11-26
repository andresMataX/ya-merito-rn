import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { History } from '../screens/History/History';
import { TravelStart } from '../screens/Travel/TravelStart';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

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
      <Drawer.Screen name="TravelStart" component={TravelStart} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      <View style={styles.containerMenu}>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
        >
          <Text>Historial</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  containerMenu: {
    backgroundColor: 'red'
  }
});