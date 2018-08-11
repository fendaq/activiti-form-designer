import cloneDeep from 'lodash/cloneDeep';

function loopLayoutTree(layoutTreeCopy, formProperty) {
  const layoutTree = [];
  const bindIDMap = {};

  layoutTreeCopy.forEach(item => {
    // 是业务组件并且formProperty中与对应的propertyID
    if (item.propertyID) {
      const isMatch = formProperty.some(propertyItem => {
        if (propertyItem.id === item.propertyID) {
          bindIDMap[item.propertyID] = item.id;
        }
        return propertyItem.id === item.propertyID;
      });

      if (isMatch) {
        layoutTree.push(cloneDeep(item));
      }
    }

    // 是布局组件且有子组件
    if (item.isLayout && item.children && item.children.length > 0) {
      const { layoutTree: subLayoutTree, bindIDMap: subBindIDMap } = loopLayoutTree(
        item.children,
        formProperty
      );

      const newItem = Object.assign({}, item, {
        children: subLayoutTree,
      });

      if (newItem.children && newItem.children.length > 0) {
        layoutTree.push(newItem);
      }

      Object.assign(bindIDMap, { ...subBindIDMap });
    }
  });

  return {
    layoutTree,
    bindIDMap,
  };
}

export default function pasteLayoutTree(layoutTreeCopy, formProperty) {
  const { layoutTree, bindIDMap } = loopLayoutTree(layoutTreeCopy, formProperty);
  const newFormProperty = formProperty.map(item =>
    Object.assign({}, item, {
      formExtendID: bindIDMap[item.id],
    })
  );

  return {
    layoutTree,
    formProperty: newFormProperty,
  };
}
