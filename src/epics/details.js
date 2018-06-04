import axios from 'axios';

export const fetchDetails = action$ =>
  action$.ofType('FETCH_DETAILS')
    .switchMap(action =>
      axios.get(`https://api.pokemontcg.io/v1/cards/${action.id}`)
        .then(response => ({
          type: 'ADD_DETAILS',
          payload: (response.data.card) ? response.data.card : {},
        }))
        .catch(() => ({
          type: 'ADD_DETAILS',
          payload: {},
        })),
    );
