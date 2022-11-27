import { ViajeState } from './ViajeContext';

type ViajeAction =
  | { type: 'loadingState', payload: boolean };

export const viajeReducer = (state: ViajeState, action: ViajeAction): ViajeState => {
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