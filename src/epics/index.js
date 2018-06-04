import { combineEpics } from 'redux-observable';
import { fetchAllPokemons } from './pokemons';
import { fetchDetails } from './details';

export default combineEpics(
  fetchAllPokemons,
  fetchDetails,
);
