import { combineReducers } from 'redux';
import Reducers from 'react-redux-lib/es/reducers';
import formProcess from './formProcess';
import formProperty from './formProperty';
import formExtend from './formExtend';

const system = combineReducers({
  error: Reducers.systemError,
  loading: Reducers.systemLoading,
});

const rootReducer = combineReducers({
  __system__: system,
  formProcess,
  formProperty,
  formExtend,
});

export default rootReducer;
