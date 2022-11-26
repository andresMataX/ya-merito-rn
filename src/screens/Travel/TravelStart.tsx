import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelStart = ({ navigation }: Props) => {

  // Botón para menú hamburguesa
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon
            name='menu-outline'
            size={40}
          />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View>
      <Text style={{ color: 'black' }}>TravelStart</Text>
    </View>
  )
}