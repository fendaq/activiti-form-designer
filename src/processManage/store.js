import { createStore, applyMiddleware } from 'redux';
import Middlewares from 'react-redux-lib/es/middlewares';
import rootReducer from './reducers';

const enhancer = applyMiddleware(...Middlewares.middlewares);
const store = createStore(rootReducer, enhancer);

if (module.hot) {
  // Enable webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
