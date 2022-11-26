import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';
import { RootStackParams } from '../library/types';

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const AuthStak = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}