import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'loadingState', payload: boolean }
  | { type: 'setID', payload: number }
  | { type: 'logout' }

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
    case 'logout':
      return {
        ...state,
        userID: 0
      }
    default:
      return state;
  }
}