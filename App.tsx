import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigation/MenuLateral';
import { AuthProvider } from './src/context/authContext/AuthContext';
import { ViajeProvider } from './src/context/viajeContext/ViajeContext';

export default function App() {

  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      <ViajeProvider>
        {children}
      </ViajeProvider>
    </AuthProvider>
  )
}