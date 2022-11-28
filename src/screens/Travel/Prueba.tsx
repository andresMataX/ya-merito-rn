import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useLocation } from "../../hooks/useLocation";

export const Prueba = () => {

  const { position, startBackgroundUpdate, startForegroundUpdate, stopBackgroundUpdate, stopForegroundUpdate } = useLocation();

  return (
    <View style={styles.container}>
      <Text>Longitude: {position?.longitude}</Text>
      <Text>Latitude: {position?.latitude}</Text>
      <View style={styles.separator} />
      <Button
        onPress={startForegroundUpdate}
        title="Start in foreground"
        color="green"
      />
      <View style={styles.separator} />
      <Button
        onPress={stopForegroundUpdate}
        title="Stop in foreground"
        color="red"
      />
      <View style={styles.separator} />
      <Button
        onPress={startBackgroundUpdate}
        title="Start in background"
        color="green"
      />
      <View style={styles.separator} />
      <Button
        onPress={stopBackgroundUpdate}
        title="Stop in foreground"
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