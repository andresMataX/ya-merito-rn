import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStak } from './src/navigation/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStak />
    </NavigationContainer>
  );
}
