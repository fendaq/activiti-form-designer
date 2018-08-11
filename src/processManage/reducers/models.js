import { fromJS } from 'immutable';
import createReducer from 'react-redux-lib/es/utils/createReducer';
import * as actionTypes from '../consts/actionTypes';

const initialState = fromJS({
  // 模型列表
  modelsList: {},
  // 部署列表
  deployList: {},
  // 是否刷新模型列表
  refreshModel: false,
  // 是否刷新部署列表
  refreshDeploy: false,
  // model loading
  spinningModel: true,
  // deploy loading
  spinningDeploy: true,
  redirectUrl: '',
});

const handlers = {
  [actionTypes.GET_MODEL_LIST](state, { payload }) {
    return state.withMutations(s => {
      s.set('modelsList', fromJS(payload.body));
      s.set('refreshModel', false);
      s.set('spinningModel', false);
    });
  },
  [actionTypes.DELETE_ONE_MODEL](state, { payload }) {
    if (payload.body && payload.body.refresh) {
      return state.set('refreshModel', true);
    }
    return state;
  },
  [actionTypes.DEPLOY_ONE_MODEL](state, { payload }) {
    if (payload.body && payload.body.refresh) {
      return state.set('refreshModel', true);
    }
    return state;
  },
  [actionTypes.CREATE_ONE_MODEL](state, { payload }) {
    if (payload.body) {
      return state.set('redirectUrl', payload.body.redirectUrl);
    }
    return state;
  },
  [actionTypes.GET_DEPLOY_LIST](state, { payload }) {
    return state.withMutations(s => {
      s.set('deployList', fromJS(payload.body));
      s.set('refreshDeploy', false);
      s.set('spinningDeploy', false);
    });
  },
  [actionTypes.DELETE_ONE_DEPLOY](state, { payload }) {
    if (payload.body && payload.body.refresh) {
      return state.set('refreshDeploy', true);
    }
    return state;
  },
  [actionTypes.SET_MODEL_LOADING](state, { payload }) {
    return state.set('spinningModel', payload);
  },
  [actionTypes.SET_DEPLOY_LOADING](state, { payload }) {
    return state.set('spinningDeploy', payload);
  },
};

export default createReducer(initialState, handlers);
