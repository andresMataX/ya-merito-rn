import { useState, useEffect } from 'react';
import { Location, Places } from '../interfaces/Travel/PlacesAPI';
import { Alert } from 'react-native';

export const useCoords = (address: string) => {

  const [isLoading, setIsLoading] = useState(false);
  const [direccion, setDireccion] = useState("");

  const [coords, setCoords] = useState<Location>({
    lat: 0,
    lng: 0
  });


  const getCoords = async (address: string) => {

    setIsLoading(true)

    try {

      const resp = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&key=AIzaSyDg8Qaf2IpEoSJXLMT_0warfvIJp9wHl4c`)

      const data: Places = await resp.json();

      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;

      setDireccion(data.results[0].formatted_address)

      setCoords({
        lat,
        lng
      })
    } catch (error) {
      Alert.alert(
        "Dirección inválida",
        "No se encontró un destino con esa dirección. Intente de nuevo",
        [
          {
            text: "Ok",
          }
        ],
        {
          cancelable: true,
        }
      )

      setCoords({
        lat: 0,
        lng: 0
      })

    }

    setIsLoading(false)
  }

  useEffect(() => {
    getCoords(address)
  }, []);

  return {
    coords,
    isLoading,
    direccion
  }
}