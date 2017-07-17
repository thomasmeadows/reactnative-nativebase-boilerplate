import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-native';
import styled from 'styled-components/native';

import MainScreen from './components';
import Settings from './components/settings';
import Login from './components/login';
import ProtectedRoute from './ProtectedRoute';

const Loading = styled.ActivityIndicator`

`;

const RootContainer = ({ user, hydration }) => {
  if (!hydration) {
    return <Loading />;
  }
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/settings" component={Settings} auth={!!user} />
      <ProtectedRoute path="*" component={MainScreen} auth={!!user} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  hydration: state.hydration,
  route: state.router,
});

export default withRouter(connect(mapStateToProps, null)(RootContainer));
