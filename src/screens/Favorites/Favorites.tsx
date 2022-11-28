import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { EditarFavoritoModal } from '../../components/Favorites/Modal/EditarFavoritoModal';
import { NuevoFavoritoModal } from '../../components/Favorites/Modal/NuevoFavoritoModal';
import { FavoritoContext } from '../../context/favoritoContext/FavoritoContext';
import { ViajeContext } from '../../context/viajeContext/ViajeContext';
import { Favorite } from '../../interfaces/Favorite/Favorite';
import { Travel } from '../../interfaces/Travel/Travel';

export const Favorites = () => {

  const { favoritoState,
    getFavoritos,
    setDestino,
    setFavorito,
    deleteFavorito,
    getDireccion
  } = useContext(FavoritoContext);
  const { isLoading, favoritos } = favoritoState;

  const { viajeState, getViajes } = useContext(ViajeContext);
  const { isLoading: isLoadingViajes, viajes } = viajeState;

  useEffect(() => {
    getViajes()
    getFavoritos()
  }, [])

  const [visibleNuevoFavoritoModal, setVisibleNuevoFavoritoModal] = useState(false);
  const [visibleEditarFavoritoModal, setVisibleEditarFavoritoModal] = useState(false);

  if (isLoading || isLoadingViajes) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color="#000" size={75} />
      </View>
    )
  }

  const renderDestino = (data: Travel) => {
    return (
      <View style={styles.destino}>
        <Text style={styles.destinoText}>{data.direccion}</Text>
        <TouchableOpacity
          onPress={() => {
            setDestino(data)
            setVisibleNuevoFavoritoModal(true)
          }}
        >
          <Icon name='star-outline' size={24} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderFavorito = (data: Favorite) => {
    return (
      <View style={styles.favoritoContainer}>
        <Icon name={`${data.icono}-outline`} size={32} />

        <View style={{ width: 8 }} />

        <View style={styles.favoritoAliasContainer}>
          <Text style={styles.favoritoAlias}>
            {data.alias}
          </Text>

          <View style={styles.favoritoAccionesContainer}>
            <TouchableOpacity
              onPress={() => {
                setFavorito(data)
                getDireccion(data.id_direccion)
                setVisibleEditarFavoritoModal(true)
              }}
            >
              <Icon name='create-outline' size={32} />
            </TouchableOpacity>

            <View style={{ width: 4 }} />

            <TouchableOpacity
              onPress={() => {
                deleteFavorito(data.id)
              }}
            >
              <Icon name='trash-outline' size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.favoritosContainer}>
        <FlatList
          data={favoritos}
          renderItem={({ item }) => renderFavorito(item)}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.destinosContainer}>
        <Text style={{ fontFamily: 'MaliRegular', fontSize: 24 }}>Destinos previos</Text>
        <FlatList
          data={viajes}
          renderItem={({ item }) => renderDestino(item)}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>

      <NuevoFavoritoModal
        visibleNuevoFavoritoModal={visibleNuevoFavoritoModal}
        setVisibleNuevoFavoritoModal={setVisibleNuevoFavoritoModal}
      />

      <EditarFavoritoModal
        visibleEditarFavoritoModal={visibleEditarFavoritoModal}
        setVisibleEditarFavoritoModal={setVisibleEditarFavoritoModal}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: 'MaliRegular',
    lineHeight: 40
  },
  header: {
    width: '80%'
  },
  destinosContainer: {
    width: '80%',
    height: '60%',
  },
  destino: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  destinoText: {
    fontSize: 14,
    fontFamily: 'MaliLight',
    textAlign: 'justify',
    width: '90%',
  },
  favoritosContainer: {
    width: '80%',
    height: '20%',
  },
  favoritoContainer: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoritoAliasContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoritoAlias: {
    fontSize: 24,
    fontFamily: 'MaliRegular',
    color: 'black',
    lineHeight: 32
  },
  favoritoAccionesContainer: {
    flexDirection: 'row',
  }
});