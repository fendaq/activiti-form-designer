/**
 * 操作模型列表的相关接口触发
 */
import API from '../apis';
import * as actionTypes from '../consts/actionTypes';

/**
 * 设置模型列表加载
 */
export function setModelLoading(status) {
  return {
    type: actionTypes.SET_MODEL_LOADING,
    payload: status,
  };
}

/**
 * 获取所有模型列表
 */
export function getModelList(rowSize, page) {
  return dispatch => {
    dispatch(setModelLoading(true));

    return dispatch({
      type: actionTypes.GET_MODEL_LIST,
      payload: API.getModels(rowSize, page),
    });
  };
}

/**
 * 删除一个模型列表
 */
export function deleteModel(id) {
  return {
    type: actionTypes.DELETE_ONE_MODEL,
    payload: API.deleteModel(id),
  };
}

/**
 * 创建一个模型列表
 */
export function createModel() {
  return {
    type: actionTypes.CREATE_ONE_MODEL,
    payload: API.createModel(),
  };
}

/**
 * 发布一个模型列表
 */
export function deployModel(id) {
  return {
    type: actionTypes.DEPLOY_ONE_MODEL,
    payload: API.deployModel(id),
  };
}
