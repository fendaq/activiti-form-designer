import { fromJS } from 'immutable';
import createReducer from 'react-redux-lib/es/utils/createReducer';
import * as actionTypes from '../consts/actionTypes';

const initialState = fromJS({
  formProperty: [],
});

const handlers = {
  [actionTypes.CREATE_FORM_PROPERTY](state, { payload }) {
    if (!payload) {
      return state;
    }

    return state.set('formProperty', fromJS(payload));
  },
  [actionTypes.BIND_FORM_PROPERTY_EXTENDID](state, { payload }) {
    const formItems = state.get('formProperty').toJS();
    const result = formItems.map(item => {
      const tempItem = { ...item };
      if (item.id === payload.propertyID) {
        tempItem.formExtendID = payload.id;
      }

      return tempItem;
    });

    return state.set('formProperty', fromJS(result));
  },
  [actionTypes.UNBIND_FORM_PROPERTY_EXTENDID](state, { payload }) {
    const formItems = state.get('formProperty').toJS();
    const result = formItems.map(item => {
      const tempItem = { ...item };
      if (item.id === payload.propertyID || item.formExtendID === payload.id) {
        tempItem.formExtendID = null;
      }

      return tempItem;
    });

    return state.set('formProperty', fromJS(result));
  },
};

export default createReducer(initialState, handlers);
