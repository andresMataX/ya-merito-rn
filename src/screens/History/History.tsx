import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const History = () => {

  return (
    <View style={styles.mainContainer}>

      <View style={styles.header}>
        <Text style={styles.title}>Historial</Text>
      </View>

      <View style={{ height: 32 }} />

      <ScrollView style={styles.destinosContainer}>
        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>

        <View style={styles.destino}>
          <Text style={styles.destinoText}>Av. Manuel L. Barragán 510, Residencial Anahuac 4to Sector, 66450 Monterrey, N.L.</Text>
        </View>
      </ScrollView>

      <View style={{ height: 32 }} />

      {/* <View style={styles.paginacionContainer}>
        <TouchableOpacity>
          <Icon name='chevron-back-outline' size={32} />
        </TouchableOpacity>
        <View style={styles.paginacion}>

        </View>
        <TouchableOpacity>
          <Icon name='chevron-forward-outline' size={32} />
        </TouchableOpacity>
      </View> */}
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
  },
  destinoText: {
    fontSize: 14,
    fontFamily: 'MaliLight',
    textAlign: 'justify',
  },
  // paginacionContainer: {
  //   width: '80%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // paginacion: {
  //   flex: 1,
  //   backgroundColor: 'red',
  // },
});