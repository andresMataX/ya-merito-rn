import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';

const { Navigator, Screen } = createStackNavigator();

export const AuthStak = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}