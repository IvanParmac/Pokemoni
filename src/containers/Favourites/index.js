import { connect } from 'react-redux';
import Favourites from './Favourites';
import { toggleFavourites } from '../../actions/index';


const mapStateToProps = state => ({
  favourites: state.favourites,
});

const mapDispatchToProps = dispatch => ({
  toggleFavourites: favourite => dispatch(toggleFavourites(favourite)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
