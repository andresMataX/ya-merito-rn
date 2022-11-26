import { createDrawerNavigator } from '@react-navigation/drawer';
import { History } from '../screens/History/History';
import { TravelStart } from '../screens/Travel/TravelStart';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TravelStart" component={TravelStart} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
}

