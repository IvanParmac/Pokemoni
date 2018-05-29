import { connect } from 'react-redux';
import Routes from './Routes';
import { sortBy } from '../../actions/index';


const mapStateToProps = state => ({
  sort: state.sort,
});

const mapDispatchToProps = dispatch => ({
  sortBy: sort => dispatch(sortBy(sort)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
