import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import { logger } from './redux/middleware/logger';
import throttle from './redux/middleware/throttle';
import immutableCheckMiddleware from 'redux-immutable-state-invariant';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const devMiddleware = [thunk, throttle, immutableCheckMiddleware(), logger];
  const middleware = composeEnhancers(applyMiddleware(...devMiddleware));
  const store = createStore(reducers, {}, middleware);

  return store;
};
