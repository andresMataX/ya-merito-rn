import React, { useContext, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FavoritoContext } from '../../../context/favoritoContext/FavoritoContext';
import { useForm } from '../../../hooks/useForm';
import { NuevoFavorito } from '../../../interfaces/Favorite/Favorite';

interface Props {
  visibleNuevoFavoritoModal: boolean
  setVisibleNuevoFavoritoModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const NuevoFavoritoModal = ({ visibleNuevoFavoritoModal, setVisibleNuevoFavoritoModal }: Props) => {

  const { favoritoState, postFavorito } = useContext(FavoritoContext);
  const { destinoSeleccionado } = favoritoState;

  const { onChange, alias, icono, form } = useForm<NuevoFavorito>({
    alias: '',
    icono: '',
  })

  const [pressed, setPressed] = useState({
    train: false,
    business: false,
    cafe: false,
    briefcase: false,
    home: false,
    barbell: false,
    school: false,
  })

  return (
    <Modal
      animationType="fade"
      visible={visibleNuevoFavoritoModal}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Agregar favorito</Text>

            <TouchableOpacity
              onPress={() => {
                form.icono = ''
                form.alias = ''
                setPressed({
                  train: false,
                  business: false,
                  cafe: false,
                  briefcase: false,
                  home: false,
                  barbell: false,
                  school: false
                })
                setVisibleNuevoFavoritoModal(false)
              }}
            >
              <Icon name='close-outline' size={32} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 8 }} />

          <View style={styles.destinoContainer}>
            <Text style={styles.destinoTitle}>Destino</Text>
            <Text style={styles.destinoDireccion}>{destinoSeleccionado.direccion}</Text>
          </View>

          <View style={{ height: 16 }} />

          <View style={styles.aliasContainer}>
            <Text style={styles.destinoTitle}>Alias</Text>
            <TextInput
              style={styles.aliasInput}
              placeholder="Introduce el alias del destino"
              onChangeText={(value) => onChange(value.trim(), 'alias')}
            />
          </View>

          <View style={{ height: 16 }} />

          <View style={styles.iconosContainer}>
            <Text style={styles.destinoTitle}>Íconos</Text>
            <View style={styles.iconos}>
              <TouchableOpacity
                onPress={() => {
                  form.icono = 'train'
                  setPressed({
                    train: true,
                    business: false,
                    cafe: false,
                    briefcase: false,
                    home: false,
                    barbell: false,
                    school: false,
                  })
                }}
              >
                <Icon name='train-outline' size={32} style={{
                  borderBottomWidth: (pressed.train) ? 2 : 0
                }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  form.icono = 'business'
                  setPressed({
                    train: false,
                    business: true,
                    cafe: false,
                    briefcase: false,
                    home: false,
                    barbell: false,
                    school: false,
                  })
                }}
              >
                <Icon name='business-outline' size={32} style={{
                  borderBottomWidth: (pressed.business) ? 2 : 0
                }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  form.icono = 'cafe'
                  setPressed({
                    train: false,
                    business: false,
                    cafe: true,
                    briefcase: false,
                    home: false,
                    barbell: false,
                    school: false,
                  })
                }}
              >
                <Icon name='cafe-outline' size={32} style={{
                  borderBottomWidth: (pressed.cafe) ? 2 : 0
                }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  form.icono = 'briefcase'
                  setPressed({
                    train: false,
                    business: false,
                    cafe: false,
                    briefcase: true,
                    home: false,
                    barbell: false,
                    school: false,
                  })
                }}
              >
                <Icon name='briefcase-outline' size={32} style={{
                  borderBottomWidth: (pressed.briefcase) ? 2 : 0
                }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  form.icono = 'home'
                  setPressed({
                    train: false,
                    business: false,
                    cafe: false,
                    briefcase: false,
                    home: true,
                    barbell: false,
                    school: false,
                  })
                }}
              >
                <Icon name='home-outline' size={32} style={{
                  borderBottomWidth: (pressed.home) ? 2 : 0
                }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  form.icono = 'barbell'
                  setPressed({
                    train: false,
                    business: false,
                    cafe: false,
                    briefcase: false,
                    home: false,
                    barbell: true,
                    school: false,
                  })
                }}
              >
                <Icon name='barbell-outline' size={32} style={{
                  borderBottomWidth: (pressed.barbell) ? 2 : 0
                }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  form.icono = 'school'
                  setPressed({
                    train: false,
                    business: false,
                    cafe: false,
                    briefcase: false,
                    home: false,
                    barbell: false,
                    school: true,
                  })
                }}
              >
                <Icon name='school-outline' size={32} style={{
                  borderBottomWidth: (pressed.school) ? 2 : 0
                }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: 24 }} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (alias && icono) {
                postFavorito({
                  alias,
                  icono,
                  id_direccion: destinoSeleccionado.id
                }).then(() => {
                  setVisibleNuevoFavoritoModal(false)
                })
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
            <Text style={styles.buttonText}>Añadir</Text>
            <View style={{ width: 8 }} />
            <Icon name="add-outline" size={28} />
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
  iconosContainer: {
    width: '100%',
  },
  iconos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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