import createFormID from './createFormID';

/**
 * 创建布局组件
 */
const createParent = (item, chainItem, parentId = 0) => ({
  id: createFormID(),
  parentId,
  type: chainItem.type,
  sectionName: item.sectionName,
  isLayout: true,
  tabKey: chainItem.tabKey,
});

/**
 * 创建业务组件
 */
const createComponent = (item, parentId = 0) => ({
  id: item.id,
  parentId,
  propertyID: item.propertyID,
  label: item.label,
  grid: item.grid,
  type: item.componentType,
  patterns: item.patterns,
  placeholder: item.placeholder,
  defaultValue: item.defaultValue,
  componentConfig: item.componentConfig,
  formItemConfig: item.formItemConfig,
});

/**
 * 把扁平数组转换成多个层级的数组levels
 * @param {Array} originFormExtend -- 服务器传回的originFormExtend
 */
function createLevels(originFormExtend = []) {
  const levels = {};

  originFormExtend.forEach(item => {
    let key = '';

    // parents通过数组记录了层级关系
    item.grid.chain.forEach((chainItem, chainIndex) => {
      if (!levels[chainIndex]) {
        levels[chainIndex] = {};
      }

      const newKey = !key ? chainItem.order : `${key}-${chainItem.order}`;

      // levels[parentIndex - 1][key]是当前父节点
      // levels[parentIndex][newKey]是当前节点
      if (!levels[chainIndex][newKey]) {
        const parentId = levels[chainIndex - 1] ? levels[chainIndex - 1][key].id : 0;

        // 根据当前是否遍历到最后一个元素，判断是布局组件还是业务组件
        levels[chainIndex][newKey] =
          chainIndex + 1 === item.grid.chain.length
            ? createComponent(item, parentId)
            : createParent(item, chainItem, parentId);
      }

      key = newKey;
    });
  });

  return Object.values(levels);
}

/**
 * 把多个层级的数组levels，解析成树形
 * @param {Object} levelItem -- 当前层级的所有组件信息
 * @param {Number} levelIndex -- 当前层级数
 * @param {Array} levels -- 总的levels
 */
function parseLevels(levelItem, levelIndex, levels) {
  const formExtend = [];
  const nextLevelIndex = levelIndex + 1;
  const nextLevel = levels[nextLevelIndex] ? Object.values(levels[nextLevelIndex]) : [];

  levelItem.forEach(item => {
    // 从下一层级中找出parentId匹配的元素
    const matchLevel = nextLevel.filter(subItem => subItem.parentId === item.id);
    // 如果当前组件还有子组件，计算出children
    const children =
      matchLevel && matchLevel.length > 0 ? parseLevels(matchLevel, nextLevelIndex, levels) : null;
    // 找出lastChild，为了算出布局组件的row和col
    const lastChild = children && children.length > 0 ? children[children.length - 1] : null;

    formExtend.push({
      ...item,
      row: lastChild && lastChild.grid ? lastChild.grid.row : null,
      col: lastChild && lastChild.grid ? lastChild.grid.col : null,
      children,
    });
  });

  return formExtend;
}

/**
 * 将服务器传回的originFormExtend解析成前端使用的formExtend
 * @param {Array} originFormExtend -- 服务器传回的originFormExtend
 */
export default function parseFormExtend(originFormExtend) {
  if (originFormExtend.length <= 0) {
    return [];
  }

  // 先把扁平数组转换成多个层级的数组levels
  const levels = createLevels(originFormExtend);
  const topLevel = Object.values(levels[0]);

  // 再通过levels来解析成layoutTree
  const formExtend = parseLevels(topLevel, 0, levels);

  return formExtend;
}
