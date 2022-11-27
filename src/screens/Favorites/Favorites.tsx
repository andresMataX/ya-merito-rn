import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NuevoFavoritoModal } from '../../components/Favorites/Modal/NuevoFavoritoModal';
import { FavoritoContext } from '../../context/favoritoContext/FavoritoContext';
import { ViajeContext } from '../../context/viajeContext/ViajeContext';
import { Favorite } from '../../interfaces/Favorite/Favorite';
import { Travel } from '../../interfaces/Travel/Travel';

export const Favorites = () => {

  const { favoritoState, getFavoritos } = useContext(FavoritoContext);
  const { isLoading, favoritos } = favoritoState;

  const { viajeState, getViajes } = useContext(ViajeContext);
  const { viajes } = viajeState;

  useEffect(() => {
    getViajes()
    getFavoritos()
  }, [])

  const [visibleNuevoFavoritoModal, setVisibleNuevoFavoritoModal] = useState(false);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color="#000" size={75} />
      </View>
    )
  }

  const renderItemDestino = ({ direccion }: Travel) => {
    return (
      <View style={styles.destino}>
        <Text style={styles.destinoText}>{direccion}</Text>
        <TouchableOpacity
          onPress={() => setVisibleNuevoFavoritoModal(true)}
        >
          <Icon name='star-outline' size={24} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem = ({ alias }: Favorite) => {
    return (
      <View style={styles.favoritoContainer}>
        <Icon name='briefcase-outline' size={32} />

        <View style={{ width: 8 }} />

        <View style={styles.favoritoAliasContainer}>
          <Text style={styles.favoritoAlias}>
            {alias}
          </Text>

          <View style={styles.favoritoAccionesContainer}>
            <TouchableOpacity>
              <Icon name='create-outline' size={32} />
            </TouchableOpacity>

            <View style={{ width: 4 }} />

            <TouchableOpacity>
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
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.destinosContainer}>
        <Text style={{ fontFamily: 'MaliRegular', fontSize: 24 }}>Destinos previos</Text>
        <FlatList
          data={viajes}
          renderItem={({ item }) => renderItemDestino(item)}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>

      {/* <View style={styles.destinosContainer}>
        <Text style={{ fontFamily: 'MaliRegular', fontSize: 24 }}>Destinos recientes</Text>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>

          <TouchableOpacity
            onPress={() => setVisibleNuevoFavoritoModal(true)}
          >
            <Icon name='star-outline' size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>

          <TouchableOpacity>
            <Icon name='star-outline' size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>

          <TouchableOpacity>
            <Icon name='star-outline' size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>

          <TouchableOpacity>
            <Icon name='star-outline' size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>

          <TouchableOpacity>
            <Icon name='star-outline' size={24} />
          </TouchableOpacity>
        </View>
      </View> */}

      <NuevoFavoritoModal
        visibleNuevoFavoritoModal={visibleNuevoFavoritoModal}
        setVisibleNuevoFavoritoModal={setVisibleNuevoFavoritoModal}
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
    height: '80%',
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
    width: '80%'
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