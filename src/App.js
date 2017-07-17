import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { StyleProvider } from 'native-base';

import store from './config/ReduxStore';
import RootContainer from './RootContainer';
import history from './config/ReduxHistory';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StyleProvider style={getTheme(material)}>
        <RootContainer />
      </StyleProvider>
    </ConnectedRouter>
  </Provider>
);
