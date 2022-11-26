import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerContentComponentProps {
  iconName: string,
  screenName: string,
  buttonText: string
}

export const ButtonOpcion = ({ navigation, iconName, screenName, buttonText }: Props) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screenName)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={iconName} size={16} />
        <View style={{ width: 8 }} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
      <Icon name='chevron-forward-outline' size={20} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'MaliLight'
  }
});