import React from 'react';
import { Text, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelConfirm = ({ }: Props) => {

  return (
    <View>
      <Text style={{ color: 'black' }}>TravelConfirm</Text>
    </View>
  )
}