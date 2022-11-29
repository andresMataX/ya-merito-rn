import { useState, useEffect } from 'react';
import { Location, Places } from '../interfaces/Travel/PlacesAPI';

export const useCoords = (address: string) => {
  const [coords, setCoords] = useState<Location>({
    lat: 0,
    lng: 0
  });

  const getCoords = async (address: string) => {
    const resp = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&key=AIzaSyDZlRQ4Ragw-QWxViBHPTkxEawYhssROEU`)

    const data: Places = await resp.json();

    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;

    setCoords({
      lat,
      lng
    })
  }

  useEffect(() => {
    getCoords(address)
  }, []);

  return {
    coords
  }
}