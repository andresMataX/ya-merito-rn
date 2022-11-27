import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Favorites = () => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.favoritosContainer}>

        <View style={styles.favoritoContainer}>
          <Icon name='briefcase-outline' size={32} />

          <View style={{ width: 8 }} />

          <View style={styles.favoritoAliasContainer}>
            <Text style={styles.favoritoAlias}>Trabajo</Text>

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

        <View style={{ height: 8 }} />

        <View style={styles.favoritoContainer}>
          <Icon name='home-outline' size={32} />

          <View style={{ width: 8 }} />

          <View style={styles.favoritoAliasContainer}>
            <Text style={styles.favoritoAlias}>Casa</Text>

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

        <View style={{ height: 8 }} />

        <View style={styles.favoritoContainer}>
          <Icon name='school-outline' size={32} />

          <View style={{ width: 8 }} />

          <View style={styles.favoritoAliasContainer}>
            <Text style={styles.favoritoAlias}>Escuela</Text>

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

        <Text style={{ fontFamily: 'MaliLight', fontSize: 18 }}>Favoritos restantes: 0</Text>
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.destinosContainer}>
        <Text style={{ fontFamily: 'MaliRegular', fontSize: 24 }}>Destinos recientes</Text>

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

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>

          <TouchableOpacity>
            <Icon name='star-outline' size={24} />
          </TouchableOpacity>
        </View>
      </View>


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