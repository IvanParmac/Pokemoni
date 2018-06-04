export const fetchPokemons = () => ({
  type: 'FETCH_POKEMONS',
});

export const fetchDetails = id => ({
  type: 'FETCH_DETAILS',
  id,
});

export const toggleFavourites = card => ({
  type: 'TOGGLE_FAVOURITES',
  card,
});

export const sortBy = sort => ({
  type: 'SORT_BY',
  sort,
});
