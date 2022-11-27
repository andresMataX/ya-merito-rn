import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import { Alert } from "react-native";
import { favoritoReducer } from './favoritoReducer';
import { meritoAPI } from '../../api/yaMeritoApi';
import { AuthContext } from '../authContext/AuthContext';
import { Travel } from '../../interfaces/Travel/Travel';
import { ViajeContext } from "../viajeContext/ViajeContext";
import { Favorite } from '../../interfaces/Favorite/Favorite';

export interface FavoritoState {
  isLoading: boolean
  favoritos: Favorite[]
  favoritoSeleccionado: Travel
}

export const favoritoInitialState: FavoritoState = {
  isLoading: false,
  favoritos: [],
  favoritoSeleccionado: {} as Travel
}

export interface FavoritoContextProps {
  favoritoState: FavoritoState,
  getFavoritos: () => Promise<void>,
  setFavorito: (favorito: Travel) => void,
}

export const FavoritoContext = createContext({} as FavoritoContextProps);

export const FavoritoProvider = ({ children }: { children: JSX.Element }) => {

  const [favoritoState, dispatch] = useReducer(favoritoReducer, favoritoInitialState);

  const { authState } = useContext(AuthContext);
  const { userID } = authState;


  const getFavoritos = async () => {

    dispatch({ type: 'loadingState', payload: true });

    try {

      const resp = await meritoAPI.get<Favorite[]>(`/api/favorito/usuario/${userID}`)

      dispatch({ type: 'getFavoritos', payload: resp.data });

      dispatch({ type: 'loadingState', payload: false });

    } catch (error) {
      Alert.alert(
        "Error",
        "Favor de intentar de nuevo.",
        [
          {
            text: "OK",
          }
        ],
        {
          cancelable: true,
        }
      )

      dispatch({ type: 'loadingState', payload: false });
    }

  }


  const setFavorito = (favorito: Travel) => {

    dispatch({ type: 'setFavorito', payload: favorito })

  }


  return (
    <FavoritoContext.Provider
      value={{
        favoritoState,
        getFavoritos,
        setFavorito
      }}
    >
      {children}
    </FavoritoContext.Provider>
  )
}