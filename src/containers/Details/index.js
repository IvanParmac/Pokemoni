import { connect } from 'react-redux';
import { fetchDetails } from '../../actions';
import Details from './Details';

const mapStateToProps = state => ({
  card: state.details,
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: id => dispatch(fetchDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
