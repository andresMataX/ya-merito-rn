import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'login', payload: string }
  | { type: 'sigIn', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
      }
    case 'sigIn':
      return {
        ...state,
      }
    default:
      return state;
  }
}