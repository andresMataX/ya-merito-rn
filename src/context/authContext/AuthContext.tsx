import React, { createContext } from "react";
import { useReducer } from "react";
import { Alert } from "react-native";
import { authReducer } from './authReducer';
import { NuevoUsuario, Usuario } from '../../interfaces/Auth/Usuario';
import { meritoAPI } from '../../api/yaMeritoApi';

// Defining how the state looks like
export interface AuthState {
  isLoading: boolean
  userID: number
}

export const authInitialState: AuthState = {
  isLoading: false,
  userID: 0
}

// What is the context like and what does it expose
export interface AuthContextProps {
  authState: AuthState,
  login: (email: string, password: string) => Promise<Boolean>,
  signUp: ({ apellido, email, nombre, password }: NuevoUsuario) => Promise<Boolean>,
}

// Create the context
export const AuthContext = createContext({} as AuthContextProps);

// We provide the state
export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);


  const login = async (email: string, password: string): Promise<Boolean> => {

    dispatch({ type: 'loadingState', payload: true });

    try {

      const resp = await meritoAPI.post<Usuario>('/api/auth/login', {
        email,
        password
      })

      dispatch({ type: 'setID', payload: resp.data.id });

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

      const resp = await meritoAPI.post<Usuario>('/api/usuario', {
        email,
        password,
        apellido,
        nombre
      })

      dispatch({ type: 'setID', payload: resp.data.id });

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
    <AuthContext.Provider
      value={{
        authState,
        login,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}