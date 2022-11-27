import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'loadingState', payload: boolean };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'loadingState':
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}