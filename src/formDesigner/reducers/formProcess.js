/**
 * 从后台获取工单、版本、FormProperty等相关数据的reducers
 */
import { fromJS } from 'immutable';
import createReducer from 'react-redux-lib/es/utils/createReducer';
import * as actionTypes from '../consts/actionTypes';

const initialState = fromJS({
  processTypes: [],
  processDefinitions: [],
  allTaskFormProperties: [],
  taskFormProperty: {},
  selectedProcessType: null,
  selectedProcessDefinition: null,
  selectedProcessTasks: null,
  switchCount: 0,
  layoutTreeCopy: [],
});

const handlers = {
  [actionTypes.GET_PROCESS_TYPES](state, { payload }) {
    if (!payload.body) {
      return state;
    }

    return state.set('processTypes', fromJS(payload.body));
  },

  [actionTypes.GET_PROCESS_DEFINITIONS](state, { payload }) {
    if (!payload.body) {
      return state;
    }

    return state.set('processDefinitions', fromJS(payload.body));
  },

  [actionTypes.GET_ALL_TASK_FORM_PROPERTIES](state, { payload }) {
    if (!payload.body) {
      return state;
    }

    return state.set('allTaskFormProperties', fromJS(payload.body));
  },

  [actionTypes.SELECT_PROCESS_TYPE](state, { payload }) {
    if (!payload) {
      return state;
    }

    return state.withMutations(s => {
      s.set('processDefinitions', fromJS([]));
      s.set('allTaskFormProperties', fromJS([]));
      s.set('taskFormProperty', fromJS({}));
      s.set('selectedProcessType', payload);
      s.set('selectedProcessDefinition', null);
      s.set('selectedProcessTasks', null);
    });
  },

  [actionTypes.SELECT_PROCESS_DEFINITIONS](state, { payload }) {
    if (!payload) {
      return state;
    }

    return state.withMutations(s => {
      s.set('allTaskFormProperties', fromJS([]));
      s.set('taskFormProperty', fromJS({}));
      s.set('selectedProcessDefinition', payload);
      s.set('selectedProcessTasks', null);
    });
  },

  [actionTypes.SELECT_PROCESS_TASK](state, { payload }) {
    if (!payload) {
      return state;
    }

    const taskFormProperty = state
      .get('allTaskFormProperties')
      .find(item => item.get('taskKey') === payload);

    return state.withMutations(s => {
      s.set('taskFormProperty', taskFormProperty);
      s.set('selectedProcessTasks', payload);
    });
  },

  [actionTypes.SET_SWITCH_COUNT](state) {
    const newSwitchCount = state.get('switchCount') + 1;

    return state.set('switchCount', newSwitchCount);
  },

  [actionTypes.COPY_LAYOUT_TREE](state, { payload }) {
    const layoutTreeCopy = payload.concat();

    return state.set('layoutTreeCopy', layoutTreeCopy);
  },
};

export default createReducer(initialState, handlers);
