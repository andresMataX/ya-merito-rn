import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Auth/Login';

const { Navigator, Screen } = createStackNavigator();

export const AuthStak = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}