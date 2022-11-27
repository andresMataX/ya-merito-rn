import { ViajeState } from './ViajeContext';
import { Travel } from '../../interfaces/Travel/Travel';

type ViajeAction =
  | { type: 'loadingState', payload: boolean }
  | { type: 'getViajes', payload: Travel[] }
  | { type: 'postViajes', payload: Travel }

export const viajeReducer = (state: ViajeState, action: ViajeAction): ViajeState => {
  switch (action.type) {
    case 'loadingState':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'getViajes':
      return {
        ...state,
        viajes: action.payload
      }
    default:
      return state;
  }
}