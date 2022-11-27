import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigation/MenuLateral';

export default function App() {

  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  );
}
