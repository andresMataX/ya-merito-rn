import React, { useContext } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useForm } from '../../hooks/useForm';

interface Props extends DrawerScreenProps<any, any> { }

export const FormLogin = ({ navigation }: Props) => {

  const { login } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
  });

  const { onChange, email, password } = useForm({
    email: '',
    password: ''
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>

      <Text style={styles.label}>Correo</Text>
      <TextInput
        keyboardType='email-address'
        autoCapitalize='none'
        style={styles.input}
        placeholder="Introduce tu correo"
        placeholderTextColor="5F5F5F"
        onChangeText={(value) => onChange(value, 'email')}
      />

      <View style={{ height: 16 }} />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        autoComplete='off'
        autoCapitalize='none'
        secureTextEntry={true}
        style={styles.input}
        placeholder="Introduce tu contraseña"
        placeholderTextColor="5F5F5F"
        onChangeText={(value) => onChange(value, 'password')}
      />

      <View style={{ height: 64 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (email && password) {
              const ok = await login(email, password);
              if (ok) {
                navigation.navigate('TravelStack')
              }
            } else {
              Alert.alert(
                "Datos incompletos",
                "Favor de llenar los campos",
                [
                  {
                    text: "Ok",
                  }
                ],
                {
                  cancelable: true,
                }
              )
            }
          }}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
          <View style={{ width: 8 }} />
          <Icon name="log-in-outline" size={28} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Crear Cuenta</Text>
          <View style={{ width: 8 }} />
          <Icon name="person-add-outline" size={28} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    color: 'black',
    fontSize: 24,
    fontFamily: 'MaliLight'
  },
  label: {
    fontFamily: 'MaliSemiBold',
    fontSize: 24
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'MaliRegular'
  }
});