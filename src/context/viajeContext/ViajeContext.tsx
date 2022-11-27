import React, { createContext } from "react";
import { useReducer } from "react";
import { Alert } from "react-native";
import { viajeReducer } from './viajeReducer';
import { NuevoUsuario, Usuario } from '../../interfaces/Auth/Usuario';
import { meritoAPI } from '../../api/yaMeritoApi';

export interface ViajeState {
  isLoading: boolean
}

export const viajeInitialState: ViajeState = {
  isLoading: false
}

export interface ViajeContextProps {
  viajeState: ViajeState,

}

export const ViajeContext = createContext({} as ViajeContextProps);

export const ViajeProvider = ({ children }: { children: JSX.Element }) => {

  const [viajeState, dispatch] = useReducer(viajeReducer, viajeInitialState);


  const login = async (email: string, password: string): Promise<Boolean> => {

    dispatch({ type: 'loadingState', payload: true });

    try {

      await meritoAPI.post('/api/auth/login', {
        email,
        password
      })

      dispatch({ type: 'loadingState', payload: false });

      return true;

    } catch (error) {
      Alert.alert(
        "Datos incorrectos",
        "Email / Password no son correctos.",
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


  const signUp = async ({ apellido, email, nombre, password }: NuevoUsuario): Promise<Boolean> => {

    dispatch({ type: 'loadingState', payload: true });

    try {

      await meritoAPI.post('/api/usuario', {
        email,
        password,
        apellido,
        nombre
      })

      dispatch({ type: 'loadingState', payload: false });

      return true;

    } catch (error) {
      Alert.alert(
        "Datos incorrectos",
        "Email / Password no son correctos.",
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
      }}
    >
      {children}
    </ViajeContext.Provider>
  )
}