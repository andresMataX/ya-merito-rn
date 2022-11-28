import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useLocation } from "../../hooks/useLocation";

export const Prueba = () => {

  const { position, startBackgroundUpdate, startForegroundUpdate, stopBackgroundUpdate, stopForegroundUpdate } = useLocation();

  return (
    <View style={styles.container}>
      <Text>Longitud: {position?.longitude}</Text>
      <Text>Latitud: {position?.latitude}</Text>
      <View style={styles.separator} />
      <Button
        onPress={startForegroundUpdate}
        title="Iniciar en primer plano"
        color="green"
      />
      <View style={styles.separator} />
      <Button
        onPress={stopForegroundUpdate}
        title="Parar en primer plano"
        color="red"
      />
      <View style={styles.separator} />
      <Button
        onPress={startBackgroundUpdate}
        title="Iniciar en el fondo"
        color="green"
      />
      <View style={styles.separator} />
      <Button
        onPress={stopBackgroundUpdate}
        title="Parar en el fondo"
        color="red"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 8,
  },
})