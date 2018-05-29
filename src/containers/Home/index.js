import { connect } from 'react-redux';
import Home from './Home';
import { fetchPokemons, toggleFavourites } from '../../actions/index';

const getSortedPokemons = (state) => {
  const { cards, favourites, sort } = state;
  let newCards = cards.map(card => ({
    ...card,
    isFavourite: favourites.findIndex(favourite => favourite.id === card.id) !== -1,
  }));
  if (sort === 'HP') {
    newCards = newCards.sort((card1, card2) => {
      if (card1.hp === 'None') return -1;
      if (card2.hp === 'None') return 1;
      return (parseInt(card1.hp, 10) > parseInt(card2.hp, 10));
    });
  }
  if (sort === 'NAME') {
    newCards = newCards.sort((card1, card2) =>
      (card1.name > card2.name),
    );
  }

  return newCards;
};

const mapStateToProps = state => ({
  cards: getSortedPokemons(state),
  favourites: state.favourites,
  sort: state.sort,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPokemons: () => dispatch(fetchPokemons()),
  toggleFavourites: card => dispatch(toggleFavourites(card)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
