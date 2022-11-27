import React, { createContext } from "react";
import { useReducer } from "react";
import { Alert } from "react-native";
import { authReducer } from './authReducer';
import { NuevoUsuario } from '../../interfaces/Auth/Usuario';

// Defining how the state looks like
export interface AuthState {
}

export const authInitialState: AuthState = {

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

    try {
      const resp = await fetch(`${URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
      })

      if (!resp.ok) {
        Alert.alert(
          "Datos incorrectos",
          "Email / Password no son correctos.",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            {
              text: "OK",
            }
          ],
          {
            cancelable: true,
          }
        )

        return false;
      }

    } catch (error) {
      console.log(error);
    }

    return true;
  }

  const signUp = async ({ apellido, email, nombre, password }: NuevoUsuario): Promise<Boolean> => {

    try {
      const resp = await fetch(`${URL}/api/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apellido,
          email,
          nombre,
          password
        }),
      })

    } catch (error) {
      console.log(error);
    }

    return true;
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