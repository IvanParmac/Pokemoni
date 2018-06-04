import axios from 'axios';

export const fetchAllPokemons = action$ =>
  action$.ofType('FETCH_POKEMONS')
    .switchMap(() =>
      axios.get('https://api.pokemontcg.io/v1/cards?page=1&pageSize=10')
        .then(response => ({
          type: 'ADD_CARDS',
          payload: (response.data.cards && response.data.cards.length) ? response.data.cards : [],
        }))
        .catch(() => ({
          type: 'ADD_CARDS',
          payload: [],
        })),
    );
