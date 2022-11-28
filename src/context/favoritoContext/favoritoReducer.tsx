import { FavoritoState } from './FavoritoContext';
import { Travel } from '../../interfaces/Travel/Travel';
import { Favorite } from '../../interfaces/Favorite/Favorite';

type FavoritoAction =
  | { type: 'loadingState', payload: boolean }
  | { type: 'getFavoritos', payload: Favorite[] }
  | { type: 'setDireccion', payload: string }
  | { type: 'postFavorito', payload: Favorite }
  | { type: 'setDestino', payload: Travel }
  | { type: 'setFavorito', payload: Favorite }
  | { type: 'logout' }

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
    case 'setDireccion':
      return {
        ...state,
        direccion: action.payload
      }
    case 'postFavorito':
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload]
      }
    case 'setDestino':
      return {
        ...state,
        destinoSeleccionado: action.payload
      }
    case 'setFavorito':
      return {
        ...state,
        favoritoSeleccionado: action.payload
      }
    case 'logout':
      return {
        ...state,
        destinoSeleccionado: {} as Travel,
        direccion: '',
        favoritos: [],
        favoritoSeleccionado: {} as Favorite,
      }
    default:
      return state;
  }
}