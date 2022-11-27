import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  visibleCambiarContraModal: boolean
  setVisibleCambiarContraModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CambiarContraModal = ({ visibleCambiarContraModal, setVisibleCambiarContraModal }: Props) => {

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
              onPress={() => setVisibleCambiarContraModal(false)}
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
            />
          </View>

          <View style={{ height: 16 }} />

          <View style={styles.aliasContainer}>
            <Text style={styles.destinoTitle}>Confirmar contraseña</Text>
            <TextInput
              style={styles.aliasInput}
              placeholder="Confirma tu nueva contraseña"
            />
          </View>

          <View style={{ height: 24 }} />

          <TouchableOpacity
            style={styles.button}
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