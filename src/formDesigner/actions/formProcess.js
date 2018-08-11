/**
 * 从后台获取工单、版本、FormProperty等相关数据的actions
 */
import API from '../apis';
import * as actionTypes from '../consts/actionTypes';

/**
 * 获取工单类型
 */
export function getProcessTypes() {
  return {
    type: actionTypes.GET_PROCESS_TYPES,
    payload: API.getProcessTypes(),
  };
}

/**
 * 获取工单版本
 */
export function getProcessDefinitions(typeKey) {
  return {
    type: actionTypes.GET_PROCESS_DEFINITIONS,
    payload: API.getProcessDefinitions(typeKey),
  };
}

/**
 * 获取流程所有表单信息
 */
export function getAllTaskFormProperties(definitionId) {
  return {
    type: actionTypes.GET_ALL_TASK_FORM_PROPERTIES,
    payload: API.getAllTaskFormProperties(definitionId),
  };
}

/**
 * 选择当前工单类型
 */
export function selectProcessType(typeKey) {
  return dispatch => {
    dispatch(getProcessDefinitions(typeKey));

    return dispatch({
      type: actionTypes.SELECT_PROCESS_TYPE,
      payload: typeKey,
    });
  };
}

/**
 * 选择当前工单版本
 */
export function selectProcessDefinition(definitionId) {
  return dispatch => {
    dispatch(getAllTaskFormProperties(definitionId));

    return dispatch({
      type: actionTypes.SELECT_PROCESS_DEFINITIONS,
      payload: definitionId,
    });
  };
}

/**
 * 选择当前流程
 */
export function selectProcessTask(taskKey) {
  return {
    type: actionTypes.SELECT_PROCESS_TASK,
    payload: taskKey,
  };
}

export function setSwitchCount() {
  return {
    type: actionTypes.SET_SWITCH_COUNT,
  };
}

export function copyLayoutTree(layoutTree) {
  return {
    type: actionTypes.COPY_LAYOUT_TREE,
    payload: layoutTree,
  };
}
