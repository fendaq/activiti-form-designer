import * as actionTypes from '../consts/actionTypes';

export function createFormProperty(formProperty) {
  return {
    type: actionTypes.CREATE_FORM_PROPERTY,
    payload: formProperty,
  };
}

export function bindFormExtendId(formExtend) {
  return {
    type: actionTypes.BIND_FORM_PROPERTY_EXTENDID,
    payload: formExtend,
  };
}

export function unbindFormExtendId(formExtend) {
  return {
    type: actionTypes.UNBIND_FORM_PROPERTY_EXTENDID,
    payload: formExtend,
  };
}
