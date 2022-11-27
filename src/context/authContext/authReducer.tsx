import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'loadingState', payload: boolean }
  | { type: 'setID', payload: number };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'loadingState':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'setID':
      return {
        ...state,
        userID: action.payload
      }
    default:
      return state;
  }
}