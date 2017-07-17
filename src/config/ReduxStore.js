import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import reducers from '../reducers';
import history from './ReduxHistory';
import ReduxPersist from './ReduxPersist';
import RehydrationServices from './ReduxRehydration';

const middleware = routerMiddleware(history);
const enhancer = compose(applyMiddleware(middleware), autoRehydrate());

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  enhancer,
);

if (ReduxPersist.active) {
  RehydrationServices.updateReducers(store);
}

export default store;
