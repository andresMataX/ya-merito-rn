import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import { Alert } from "react-native";
import { viajeReducer } from './viajeReducer';
import { meritoAPI } from '../../api/yaMeritoApi';
import { AuthContext } from '../authContext/AuthContext';
import { Travel } from '../../interfaces/Travel/Travel';

export interface ViajeState {
  isLoading: boolean
  viajes: Travel[]
}

export const viajeInitialState: ViajeState = {
  isLoading: false,
  viajes: []
}

export interface ViajeContextProps {
  viajeState: ViajeState,
  postViaje: (userId: string, direccion: string) => Promise<Boolean>,
  getViajes: () => Promise<void>,
}

export const ViajeContext = createContext({} as ViajeContextProps);

export const ViajeProvider = ({ children }: { children: JSX.Element }) => {

  const [viajeState, dispatch] = useReducer(viajeReducer, viajeInitialState);

  const { authState } = useContext(AuthContext);
  const { userID } = authState;


  const getViajes = async () => {

    dispatch({ type: 'loadingState', payload: true });

    try {

      const resp = await meritoAPI.get<Travel[]>(`/api/viaje/usuario/${userID}`)

      dispatch({ type: 'getViajes', payload: resp.data });

      dispatch({ type: 'loadingState', payload: false });

    } catch (error) {
      console.log(error)
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


  const postViaje = async (userId: string, direccion: string): Promise<Boolean> => {

    dispatch({ type: 'loadingState', payload: true });

    try {

      await meritoAPI.post(`/api/viaje/${userId}`, {
        direccion
      })

      dispatch({ type: 'loadingState', payload: false });

      return true;

    } catch (error) {
      console.log(error)
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

      return false;
    }
  }

  return (
    <ViajeContext.Provider
      value={{
        viajeState,
        postViaje,
        getViajes
      }}
    >
      {children}
    </ViajeContext.Provider>
  )
}