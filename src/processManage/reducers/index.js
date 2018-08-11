import { combineReducers } from 'redux';
import Reducers from 'react-redux-lib/es/reducers';
import models from './models';

const system = combineReducers({
  error: Reducers.systemError,
  loading: Reducers.systemLoading,
});

const rootReducer = combineReducers({
  __system__: system,
  models,
});

export default rootReducer;
