import axios from 'axios';

export const addCard = card => ({
  type: 'ADD_CARD',
  card,
});

export const fetchPokemons = () =>
  dispatch =>
    axios.get('https://api.pokemontcg.io/v1/cards?page=1&pageSize=10')
      .then((response) => {
        if (response.data.cards && response.data.cards.length !== 0) {
          response.data.cards.forEach(card => dispatch(addCard(card)));
        }
      });

export const addDetails = card => ({
  type: 'ADD_DETAILS',
  card,
});

export const fetchDetails = id =>
  dispatch =>
    axios.get(
      `https://api.pokemontcg.io/v1/cards/${id}`,
    ).then((response) => {
      dispatch(addDetails(response.data.card));
    });

export const toggleFavourites = card => ({
  type: 'TOGGLE_FAVOURITES',
  card,
});

export const sortBy = sort => ({
  type: 'SORT_BY',
  sort,
});
