import { FavoritoState } from './FavoritoContext';
import { Travel } from '../../interfaces/Travel/Travel';
import { Favorite } from '../../interfaces/Favorite/Favorite';

type FavoritoAction =
  | { type: 'loadingState', payload: boolean }
  | { type: 'getFavoritos', payload: Favorite[] }

export const favoritoReducer = (state: FavoritoState, action: FavoritoAction): FavoritoState => {
  switch (action.type) {
    case 'loadingState':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'getFavoritos':
      return {
        ...state,
        favoritos: action.payload
      }
    default:
      return state;
  }
}