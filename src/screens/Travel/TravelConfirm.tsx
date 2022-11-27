import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Maps } from '../../components/Travel/Maps';
import { useFonts } from 'expo-font';

interface Props extends DrawerScreenProps<any, any> { }

export const TravelConfirm = ({ }: Props) => {

  const [fontsLoaded] = useFonts({
    MaliExtraLight: require('../../../assets/fonts/Mali-ExtraLight.ttf'),
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliBold: require('../../../assets/fonts/Mali-Bold.ttf'),
    MaliMedium: require('../../../assets/fonts/Mali-Medium.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>

      <Maps />

      <View style={{ height: 16 }} />

      <View style={styles.formContainer}>
        <View style={styles.destinoContainer}>
          <Text style={styles.label}>Destino</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={"Escuela"}
          />
        </View>

        <View style={{ height: 16 }} />

        <View style={styles.destinoContainer}>
          <Text style={styles.label}>Zona de alarma (m)</Text>
          <TextInput
            style={styles.input}
            value={"900"}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <View style={{ height: 80 }} />

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1
  },
  formContainer: {
    width: '80%',
  },
  destinoContainer: {
    width: '100%',
  },
  label: {
    fontFamily: 'MaliBold',
    fontSize: 24,
    lineHeight: 26
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    // flex: 1,
    fontSize: 32,
    fontFamily: 'MaliLight',
    lineHeight: 32,
    color: 'black'
  }
});