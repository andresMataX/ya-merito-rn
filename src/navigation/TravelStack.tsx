import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TravelStart } from '../screens/Travel/TravelStart';
import { TravelConfirm } from '../screens/Travel/TravelConfirm';
import { TravelMode } from '../screens/Travel/TravelMode';

const { Navigator, Screen } = createStackNavigator();

export const TravelStack = () => {
  return (
    <Navigator initialRouteName="TravelStart" screenOptions={{
      headerShown: false,
      headerStyle: {
        elevation: 0
      },
      cardStyle: {
        backgroundColor: 'white'
      },
    }}>
      <Screen name="TravelStart" component={TravelStart} />
      <Screen name="TravelConfirm" component={TravelConfirm} />
      <Screen name="TravelMode" component={TravelMode} />
    </Navigator>
  );
}