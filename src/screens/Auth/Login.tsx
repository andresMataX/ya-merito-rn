import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const Login = () => {

  return (
    <View style={{ ...styles.container }}>
      <Image
        source={require('../../../assets/logo_app.jpeg')}
        style={{ width: 200, height: 175 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});