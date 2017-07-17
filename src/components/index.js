import HomeComponent from './home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

import actions from '../actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(actions.user.logout());
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
);
