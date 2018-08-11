/**
 * 定义与拖拽和layout相关的状态
 */

import { fromJS } from 'immutable';
import createReducer from 'react-redux-lib/es/utils/createReducer';
import * as actionTypes from '../consts/actionTypes';

const initialState = fromJS({
  activeComponent: {},
  layoutTree: [],
  lastActivedComponentId: -1,
  dynamicSearchResult: [],
});

const handlers = {
  [actionTypes.SET_ACTIVE_COMPONENT](state, { payload }) {
    return state.set('activeComponent', fromJS(payload));
  },

  [actionTypes.SET_LAST_COMPONENT_ID](state, { payload }) {
    return state.set('lastActivedComponentId', fromJS(payload));
  },

  // 计算layout树
  [actionTypes.SET_LAYOUT_TREE](state, { payload }) {
    return state.set('layoutTree', fromJS(payload));
  },

  // 动态查询组件的查询结果保存
  [actionTypes.SET_DYNAMIC_SEARCH_RESULT](state, { payload }) {
    return state.set('dynamicSearchResult', fromJS(payload));
  },
};

export default createReducer(initialState, handlers);
