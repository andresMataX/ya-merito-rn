import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { ViajeContext } from '../../context/viajeContext/ViajeContext';
import { Travel } from '../../interfaces/Travel/Travel';

export const History = () => {

  const { viajeState, getViajes } = useContext(ViajeContext);
  const { isLoading, viajes } = viajeState;

  useEffect(() => {
    getViajes()
  }, [])


  const renderItem = ({ direccion }: Travel) => {
    return (
      <View style={styles.destino}>
        <Text style={styles.destinoText}>{direccion}</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color="#000" size={75} />
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.header}>
        <Text style={styles.title}>Historial</Text>
      </View>

      <View style={{ height: 32 }} />

      <View style={styles.destinosContainer}>
        <FlatList
          data={viajes}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={({ id }) => id.toString()}
        />
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
    height: '80%'
  },
  destino: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 8,
  },
  destinoText: {
    fontSize: 14,
    fontFamily: 'MaliLight',
    textAlign: 'justify',
  },
});