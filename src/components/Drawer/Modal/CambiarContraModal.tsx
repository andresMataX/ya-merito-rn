import React, { useContext } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm } from '../../../hooks/useForm';
import { ActualizarUsuario } from '../../../interfaces/Auth/Usuario';
import { AuthContext } from '../../../context/authContext/AuthContext';

interface Props {
  visibleCambiarContraModal: boolean
  setVisibleCambiarContraModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CambiarContraModal = ({ visibleCambiarContraModal, setVisibleCambiarContraModal }: Props) => {

  const { authState, putUsuario } = useContext(AuthContext);
  const { isLoading, userID } = authState;

  const { onChange, password, confirmPassword, form } = useForm<ActualizarUsuario>({
    password: '',
    confirmPassword: ''
  })

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color="#000" size={75} />
      </View>
    )
  }

  return (
    <Modal
      animationType="fade"
      visible={visibleCambiarContraModal}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Cambiar contraseña</Text>

            <TouchableOpacity
              onPress={() => {
                form.password = ''
                form.confirmPassword = undefined
                setVisibleCambiarContraModal(false)
              }}
            >
              <Icon name='close-outline' size={32} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 8 }} />

          <View style={styles.destinoContainer}>
            <Text style={styles.destinoTitle}>Nueva contraseña</Text>
            <TextInput
              style={styles.aliasInput}
              placeholder="Introduce tu nueva contraseña"
              autoComplete='off'
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(value) => onChange(value.trim(), 'password')}
            />
          </View>

          <View style={{ height: 16 }} />

          <View style={styles.aliasContainer}>
            <Text style={styles.destinoTitle}>Confirmar contraseña</Text>
            <TextInput
              style={styles.aliasInput}
              autoComplete='off'
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder="Confirma tu nueva contraseña"
              onChangeText={(value) => onChange(value.trim(), 'confirmPassword')}
            />
          </View>

          <View style={{ height: 24 }} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (password && confirmPassword) {
                if (password === confirmPassword) {
                  if (password.length > 3) {
                    putUsuario({ password }, userID).then(() => {
                      form.password = ''
                      form.confirmPassword = undefined
                      setVisibleCambiarContraModal(false)
                    })
                  } else {
                    Alert.alert(
                      "Contraseña inválida",
                      "Debe tener más de 3 letras",
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
                    "Contraseña inválida",
                    "Las contraseñas no coinciden",
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
                  "Datos incompletos",
                  "Favor de llenar todos los campos",
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
            <Text style={styles.buttonText}>Confirmar</Text>
            <View style={{ width: 8 }} />
            <Icon name="checkmark-outline" size={28} />
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 8,
    padding: 16,
    borderColor: 'black',
    borderWidth: 2,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'MaliExtraLight',
    fontSize: 20,
  },
  destinoContainer: {
    width: '100%',
  },
  destinoTitle: {
    fontFamily: 'MaliRegular',
    fontSize: 20,
    lineHeight: 26
  },
  destinoDireccion: {
    fontSize: 14,
    fontFamily: 'MaliLight',
    lineHeight: 20,
    textAlign: 'justify',
  },
  aliasContainer: {
    width: '100%'
  },
  aliasInput: {
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: 'black',
    fontFamily: 'MaliLight',
    fontSize: 16
  },
  button: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'MaliRegular'
  },
});