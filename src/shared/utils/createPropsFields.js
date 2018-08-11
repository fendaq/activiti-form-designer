import cloneDeep from 'lodash/cloneDeep';
import { mapSettings, miscellaneous } from '../../formDesigner/consts/componentProps';
/**
 * 如果设置radio/checkbox的数据源API，则disable下面手动配置功能
 * @param {*} propertyData 当前组件已经绑定的数据
 * @param {*} currentEditComponent 当前编辑组件
 * @param {*} componentProps 当前组件的属性列表
 */
function toggleRadioOrCheckboxChild(propertyData, currentEditComponent, componentProps) {
  let datasourceOptions;

  const result = [...propertyData];
  const componentConfig = currentEditComponent.componentConfig || {};
  const selectedDataSource = componentConfig[miscellaneous.dataSourceType];

  // 根据当前编辑的组件类型，遍历属性列表并解析出组件数据源选择列表
  componentProps.forEach(item => {
    if (item.field === miscellaneous.dataSourceType) {
      datasourceOptions = item.options;
    }
  });

  const selectedIndex = datasourceOptions.findIndex(item => item === selectedDataSource);

  if (selectedIndex !== -1) {
    selectedIndex ? result.push(miscellaneous.childrenNum) : result.push(miscellaneous.dataSource);
  }

  return result;
}

/**
 * 根据输入的数量，自动生成默认元素节点
 * @param {*} propertyData 当前组件已经绑定的数据
 * @param {*} currentEditComponent 当前编辑的组件
 */
function createChildrenByNum(propertyData, currentEditComponent) {
  let number = 1;
  let count = 1;

  const Items = [];
  const componentConfig = currentEditComponent.componentConfig || {};
  const itemOne = miscellaneous.radioOrCheckboxItem[0];
  const itemTwo = miscellaneous.radioOrCheckboxItem[1];

  const result = propertyData.map(item => {
    const tempItem = { ...item };
    if (item.field === mapSettings.radioOrCheckboxNum && componentConfig[item.field]) {
      number = parseInt(componentConfig[item.field], 10);
      tempItem.value = number;
    }
    return tempItem;
  });

  while (number) {
    itemOne.field = `label-${count}`;
    itemOne.text = itemOne.field;
    itemOne.value = (componentConfig && componentConfig[itemOne.field]) || itemOne.field;

    itemTwo.field = `value-${count}`;
    itemTwo.text = itemTwo.field;
    itemTwo.value = (componentConfig && componentConfig[itemTwo.field]) || itemTwo.field;

    count += 1;
    number -= 1;

    Items.push({
      ...itemOne,
    });
    Items.push({
      ...itemTwo,
    });
  }

  if (componentConfig.children) {
    const existed = componentConfig.children;

    const changedItems = Items.map(item => {
      const tempItem = { ...item };
      const temp = existed.find(labelValue => labelValue.labelName === item.field);

      if (temp) {
        tempItem.value = temp.value;
      }

      return tempItem;
    });
    result.push(...changedItems);
  } else {
    result.push(...Items);
  }

  return result;
}

/**
 * 根据button的类型，来修改事件API属性框的label
 * @param {*} propertyData
 */
function createButtonActionFields(propertyData, currentEditComponent) {
  let selectedIndex = -1;

  const showURLMessage = '配置URL';
  const showAPIMessage = '配置API';
  const result = [...propertyData];
  const componentConfig = { ...currentEditComponent.componentConfig };
  const existedValue = componentConfig && componentConfig[miscellaneous.buttonAction.field];

  if (existedValue) {
    miscellaneous.buttonAction.value = existedValue;
  }

  propertyData.forEach(item => {
    if (item.field === miscellaneous.buttonType) {
      selectedIndex = item.options.findIndex(option => option === item.value);
    }
  });

  miscellaneous.buttonAction.text = selectedIndex === 1 ? showURLMessage : showAPIMessage;

  if (selectedIndex !== -1) {
    result.push(miscellaneous.buttonAction);
  }

  return result;
}

/**
 *
 * @param {*} propsValue 组件有值属性
 * @param {*} allProps 组件配置属性
 */
function mergePropsValue(allProps, propsValue) {
  const cloneData = cloneDeep(allProps);

  const result = cloneData.map(propItem => {
    const tempItem = { ...propItem };
    const existedParent = propItem.parent;
    const secondeLevel = propsValue && propsValue[propItem.parent];

    // 组件配置属性存储在对象第一层
    if (!existedParent) {
      tempItem.value = (propsValue && propsValue[propItem.field]) || propItem.value;
    }

    // 组件配置属性存储在对象formItemConfig字段中
    if (existedParent && existedParent === miscellaneous.formItemConfig) {
      tempItem.value = (secondeLevel && secondeLevel[propItem.field].span) || propItem.value;
    }

    // 组件配置属性存储在对象componentConfig字段中
    if (existedParent && existedParent === miscellaneous.componentConfig) {
      tempItem.value = (secondeLevel && secondeLevel[propItem.field]) || propItem.value;
    }

    return tempItem;
  });

  return result;
}

/**
 *
 * @param {*} propertyData 数据融合后的组件配置属性
 * @param {*} componentType 组件类型
 */
function handlePropsByType(propertyData, componentType, currentEditComponent, componentProps) {
  let result = [...propertyData];

  if (!currentEditComponent) {
    return;
  }

  if (componentType === 'Button') {
    result = createButtonActionFields(propertyData, currentEditComponent);
  }

  if (componentType === 'Tabs') {
    result = createChildrenByNum(propertyData, currentEditComponent);
  }

  if (componentType === 'Radio' || componentType === 'Checkbox') {
    const componentConfig = currentEditComponent.componentConfig || {};

    // 根据选择列表来决定相应的radio/checkbox处理方式
    result = toggleRadioOrCheckboxChild(propertyData, currentEditComponent, componentProps);

    if (componentConfig[miscellaneous.dataSourceType] === mapSettings.radioAndCheckboxSettings[1]) {
      result = createChildrenByNum(result, currentEditComponent);
    }
  }

  return result;
}

export default {
  createChildrenByNum,
  createButtonActionFields,
  toggleRadioOrCheckboxChild,
  mergePropsValue,
  handlePropsByType,
};
