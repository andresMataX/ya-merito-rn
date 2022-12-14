import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';
import { RootStackParams } from '../library/types';

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const AuthStack = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
      headerStyle: {
        elevation: 0
      },
      cardStyle: {
        backgroundColor: 'white'
      },
    }}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}