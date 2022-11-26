import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export const ButtonOpcion = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('History')}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name='star-outline' size={16} />
        <View style={{ width: 8 }} />
        <Text style={styles.buttonText}>Historial de viajes</Text>
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
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'MaliLight'
  }
});