import { useEffect, useState } from 'react';
import * as Location from "expo-location";

let foregroundSubscription: { remove: any } | null = null

export const useLocation = () => {

  const [position, setPosition] = useState<Location.LocationObjectCoords>()

  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync()
      if (foreground.granted) await Location.requestBackgroundPermissionsAsync()
    }
    requestPermissions()
  }, [])

  const startForegroundUpdate = async () => {

    const { granted } = await Location.getForegroundPermissionsAsync()
    if (!granted) {
      console.log("Seguimiento de localización denegado")
      return
    }

    foregroundSubscription?.remove()

    foregroundSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      location => {
        setPosition(location.coords)
      }
    )
  }

  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove()
    setPosition({} as Location.LocationObjectCoords)
  }

  return {
    position,
    startForegroundUpdate,
    stopForegroundUpdate,
  }
}