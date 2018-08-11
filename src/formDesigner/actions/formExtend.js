import * as actionTypes from '../consts/actionTypes';

/**
 * 表单设计器区域选中组件,参数形如{type:'XXX',id:'xx'}
 */
export function setActiveComponent(data) {
  return {
    type: actionTypes.SET_ACTIVE_COMPONENT,
    payload: data,
  };
}

/**
 * 组件编辑器在切换时，记录上一次被编辑的组件ID
 */
export function setLastComponetId(id) {
  return {
    type: actionTypes.SET_LAST_COMPONENT_ID,
    payload: id,
  };
}

/**
 * 设置form的渲染树
 */
export function setLayoutTree(layout) {
  return {
    type: actionTypes.SET_LAYOUT_TREE,
    payload: layout,
  };
}

/**
 *
 * @param {*} result 动态查询组件的查询结果
 */
export function setDynamicSearchResult(result) {
  return {
    type: actionTypes.SET_DYNAMIC_SEARCH_RESULT,
    payload: result,
  };
}
