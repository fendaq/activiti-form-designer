import createFormID from './createFormID';
import parseFormExtend from './parseFormExtend';

const sortByOrder = (a, b) => a.grid.order - b.grid.order;

function loop(formPropertyVO = [], parentId = '') {
  const formProperty = [];
  const formExtendWithID = [];

  formPropertyVO.forEach(item => {
    let formExtendID = null;

    if (item.extend && item.extend.grid.order) {
      // 有extend的情况下，才会生成id
      formExtendID = createFormID();

      formExtendWithID.push({
        id: formExtendID,
        propertyID: item.id,
        ...item.extend,
      });
    }

    formProperty.push({
      id: item.id,
      name: item.name,
      type: item.type,
      itemCount: item.items ? item.items.length : 0,
      parentId,
      formExtendID,
    });

    if (item.type === 'list') {
      const loopResult = loop(item.items, item.id);
      formProperty.push(...loopResult.formProperty);
      formExtendWithID.push(...loopResult.formExtendWithID);
    }
  });

  return {
    formProperty,
    formExtendWithID,
  };
}

/**
 * 将服务器取回的formPropertyVO转换成前端需要的formProperty和formExtend
 * @param {Object} formPropertyVO
 */
export default function createFormData(formPropertyVO) {
  const loopResult = loop(formPropertyVO);
  const formExtendWithID = loopResult.formExtendWithID.sort(sortByOrder);
  const formExtend = formExtendWithID.length > 0 && parseFormExtend(formExtendWithID);

  return {
    formProperty: loopResult.formProperty || [],
    formExtend: formExtend || [],
  };
}
