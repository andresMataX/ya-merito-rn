import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { FavoritoContext } from '../../context/favoritoContext/FavoritoContext';
import { ViajeContext } from '../../context/viajeContext/ViajeContext';

interface Props extends DrawerContentComponentProps {
  iconName: string,
  buttonText: string,
  screenName: string,
  favorito?: boolean
  viajes?: boolean
}

export const ButtonOpcion = ({ navigation, iconName, screenName, buttonText, favorito = false, viajes = false }: Props) => {

  const { getFavoritos } = useContext(FavoritoContext);
  const { getViajes } = useContext(ViajeContext);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (favorito) {
          getFavoritos()
          getViajes()
        }
        if (viajes) {
          getViajes()
        }
        navigation.navigate(screenName)
      }}
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