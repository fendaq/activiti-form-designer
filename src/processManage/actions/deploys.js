/**
 * 操作部署列表的相关接口触发
 */
import API from '../apis';
import * as actionTypes from '../consts/actionTypes';

/**
 * 设置部署列表加载loading
 */
export function setDeployLoading(status) {
  return {
    type: actionTypes.SET_DEPLOY_LOADING,
    payload: status,
  };
}

/**
 * 获取所有部署列表
 */
export function getDeployList(rowSize, page) {
  return dispatch => {
    dispatch(setDeployLoading(true));

    return dispatch({
      type: actionTypes.GET_DEPLOY_LIST,
      payload: API.getDeploys(rowSize, page),
    });
  };
}

/**
 * 删除某个部署
 */
export function deleteDeploy(id) {
  return {
    type: actionTypes.DELETE_ONE_DEPLOY,
    payload: API.deleteDeploy(id),
  };
}
