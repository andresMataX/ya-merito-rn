import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Login = () => {

  const inset = useSafeAreaInsets();

  return (
    <View style={{ top: inset.top }}>
      <Text style={{ color: 'black' }}>Login</Text>
    </View>
  )
}