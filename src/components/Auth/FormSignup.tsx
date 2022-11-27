import React, { useContext } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useForm } from '../../hooks/useForm';
import { NuevoUsuario } from '../../interfaces/Auth/Usuario';
import { AuthContext } from '../../context/authContext/AuthContext';
import { validarEmail } from '../../helpers/validarEmail';

interface Props extends DrawerScreenProps<any, any> { }

export const FormSignup = ({ navigation }: Props) => {

  const { signUp } = useContext(AuthContext);

  const { onChange, apellido, email, nombre, password, confirmPassword, form } = useForm<NuevoUsuario>({
    apellido: '',
    email: '',
    nombre: '',
    password: '',
    confirmPassword: ''
  })

  const [fontsLoaded] = useFonts({
    MaliLight: require('../../../assets/fonts/Mali-Light.ttf'),
    MaliSemiBold: require('../../../assets/fonts/Mali-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        autoCapitalize='words'
        style={styles.input}
        placeholder="Introduce tu nombre"
        placeholderTextColor="5F5F5F"
        onChangeText={(value) => onChange(value, 'nombre')}
      />


      <Text style={styles.label}>Apellido</Text>
      <TextInput
        autoCapitalize='words'
        style={styles.input}
        placeholder="Introduce tu apellido"
        placeholderTextColor="5F5F5F"
        onChangeText={(value) => onChange(value, 'apellido')}
      />


      <Text style={styles.label}>Correo</Text>
      <TextInput
        keyboardType='email-address'
        autoCapitalize='none'
        style={styles.input}
        placeholder="Introduce tu correo"
        placeholderTextColor="5F5F5F"
        onChangeText={(value) => onChange(value, 'email')}
      />


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

      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        autoComplete='off'
        autoCapitalize='none'
        secureTextEntry={true}
        style={styles.input}
        placeholder="Confirma tu contraseña"
        placeholderTextColor="5F5F5F"
        onChangeText={(value) => onChange(value, 'confirmPassword')}
      />

      <View style={{ height: 32 }} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (apellido && email && nombre && password && confirmPassword && validarEmail(email)) {
              if (password === confirmPassword) {
                const ok = await signUp(form);
                if (ok) {
                  navigation.navigate('TravelStack')
                }
              } else {
                Alert.alert(
                  "Las contraseñas no coinciden",
                  "Favor de revisar la contraseña.",
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
            } else {
              Alert.alert(
                "Datos inválidos",
                "Favor de revisar los campos",
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
          <Text style={styles.buttonText}>Crear</Text>
          <View style={{ width: 8 }} />
          <Icon name="log-in-outline" size={28} />
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