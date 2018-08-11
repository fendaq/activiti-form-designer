const createItem = (item, options) => {
  const param = {
    processDefinitionId: options.processDefinitionId,
    taskKey: options.taskKey,
    propertyKey: item.propertyID,
    sectionName: options.sectionName || null,
    label: item.label,
    grid: {
      order: options.starter + 1,
      row: item.grid.row,
      col: item.grid.col,
      span: item.grid.span,
      chain: options.chain,
    },
    componentID: item.propertyID,
    componentType: item.type,
    patterns: item.patterns,
    placeholder: item.placeholder,
    defaultValue: item.defaultValue,
    componentConfig: item.componentConfig,
    formItemConfig: item.formItemConfig,
  };

  param.grid = JSON.stringify(param.grid);

  return param;
};

/**
 * 将前端使用的formExtend解析成服务器需要的formActiviti格式
 * @param {Array} formExtend -- 需要转换的formExtend
 * @param {Object} options -- 额外参数
 */
export default function parseFormActiviti(formExtend = [], options = {}) {
  const formActiviti = [];

  formExtend.forEach((item, index) => {
    // 过滤没有绑定的业务组件
    if (!item.isLayout && !item.propertyID) {
      return;
    }
    const tabKey = item.tabKey ? { tabKey: item.tabKey } : {};
    const chain = options.chain || [];
    const newOptions = Object.assign({}, options, {
      chain: [
        ...chain,
        {
          order: index + 1,
          type: item.type,
          ...tabKey,
        },
      ],
    });

    // 布局组件不存储到activiti
    if (!item.isLayout) {
      formActiviti.push(
        createItem(item, {
          ...newOptions,
          starter: formActiviti.length,
        })
      );
    }

    if (item.children && item.children.length > 0) {
      formActiviti.push(...parseFormActiviti(item.children, newOptions));
    }
  });

  return formActiviti;
}
