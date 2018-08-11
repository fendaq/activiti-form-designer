import React from 'react';
import unionBy from 'lodash/unionBy';
import curry from 'lodash/curry';
import intersectionBy from 'lodash/intersectionBy';
import { Form, Card } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';
import BasedPropsEditor from './BasedPropsEditor';
import { mapSettings, miscellaneous } from '../../consts/componentProps.js';
import HandleLayoutTree from '../../../shared/utils/handleLayoutTree';

const cartTitle = '组件属性编辑';

/**
 * 表单属性ID字段绑定器
 * @param {*} id 表示当前编辑组件的iD
 * @param {*} type 表示当前编辑组件的类型
 * @param {*} fieldName 表示当前正在编辑的表单域名
 * @param {*} fieldValue 表示当前正在编辑的表单域值
 * @param {*} props 表示外部组件传递的props属性
 */
function bindingFormId(fieldName, id, fieldValue, props) {
  const { unbindFormExtendId, bindFormExtendId, setLayoutTree, formProperty, layoutTree } = props;
  const formProperties = formProperty.toJS();

  // step1:解绑当前组件之前绑定的propertyID值
  const previousValue = new HandleLayoutTree(layoutTree).getNode(id)[fieldName];
  unbindFormExtendId({
    id,
    [fieldName]: previousValue,
  });

  // step2:在formProperty列表中绑定当前active组件的ID
  bindFormExtendId({
    id,
    [fieldName]: fieldValue,
  });

  // step3:如果该fieldValue已经被其他组件绑定，则需要解绑操作
  formProperties.forEach(item => {
    if (item.id === fieldValue && item.formExtendID && item.formExtendID !== id) {
      const newLayoutTree = new HandleLayoutTree(layoutTree).update(item.formExtendID, {
        id: item.formExtendID,
        [fieldName]: miscellaneous.mockOptionItem,
        [mapSettings.label]: '',
      });
      setLayoutTree(newLayoutTree);
    }
  });

  // step4:提取当前组件绑定的表单属性的name值
  let selectedName;
  formProperties.forEach(propsMap => {
    if (propsMap.id === fieldValue) {
      selectedName = propsMap.name;
    }
  });

  // step5:选择绑定ID属性，自动设置对应的label字段
  const newLayoutTree = new HandleLayoutTree(layoutTree).update(id, {
    id,
    [fieldName]: fieldValue,
    [mapSettings.label]: selectedName,
  });
  setLayoutTree(newLayoutTree);
}

/**
 * 组件布局相关处理器
 * @param {*} id 表示当前编辑组件的iD
 * @param {*} type 表示当前编辑组件的类型
 * @param {*} fieldName 表示当前正在编辑的表单域名
 * @param {*} fieldValue 表示当前正在编辑的表单域值
 * @param {*} props 表示外部组件传递的props属性
 */
function layoutFieldsHander(fieldName, id, fieldValue, props) {
  const { setLayoutTree, layoutTree } = props;
  let labelLayoutValue;
  let inputLayoutValue;

  if (fieldName === mapSettings.labelCol) {
    labelLayoutValue = parseInt(fieldValue || 8, 10);
    if (labelLayoutValue > 24) {
      labelLayoutValue = 24;
    }
    inputLayoutValue = 24 - labelLayoutValue;
  } else {
    inputLayoutValue = parseInt(fieldValue || 16, 10);
    if (inputLayoutValue > 24) {
      inputLayoutValue = 24;
    }
    labelLayoutValue = 24 - inputLayoutValue;
  }

  // 抽取当前待编辑组件原有的formItemConfig字段，进行新旧数据的融合
  const currentEditComponent = new HandleLayoutTree(layoutTree).getNode(id);
  const formItemConfig = { ...currentEditComponent.formItemConfig };

  const newLayoutTree = new HandleLayoutTree(layoutTree).update(id, {
    id,
    formItemConfig: {
      ...formItemConfig,
      [mapSettings.labelCol]: {
        span: labelLayoutValue,
      },
      [mapSettings.wrapperCol]: {
        span: inputLayoutValue,
      },
    },
  });
  setLayoutTree(newLayoutTree);
}

/**
 * 单选框/复选框的数目设定字段
 * @param {*} id 表示当前编辑组件的iD
 * @param {*} type 表示当前编辑组件的类型
 * @param {*} fieldName 表示当前正在编辑的表单域名
 * @param {*} fieldValue 表示当前正在编辑的表单域值
 * @param {*} props 表示外部组件传递的props属性
 */
function radioOrCheckboxNumHander(fieldName, id, fieldValue, props) {
  const { setLayoutTree, layoutTree } = props;

  // 组件定制属性，存放在componentConfig字段
  const currentEditComponent = new HandleLayoutTree(layoutTree).getNode(id);

  // 在radio和Checkbox属性设置时，根据选框数目联动
  let number = parseInt(fieldValue, 10) || 1;
  const defaultLabelValues = [];
  let count = 1;
  while (number) {
    defaultLabelValues.push({
      labelName: `label-${count}`,
      value: `label-${count}`,
    });
    defaultLabelValues.push({
      labelName: `value-${count}`,
      value: `value-${count}`,
    });
    number -= 1;
    count += 1;
  }

  // 保存组件的componentConfig之前存储的属性值
  const previousConfigs = currentEditComponent.componentConfig;
  const children = previousConfigs && previousConfigs.children;

  // 新旧children的数据融合
  const arrayDifferences = intersectionBy(children, defaultLabelValues, 'labelName');
  const arrayUnions = unionBy(arrayDifferences, defaultLabelValues, 'labelName');

  const newLayoutTree = new HandleLayoutTree(layoutTree).update(id, {
    id,
    componentConfig: {
      ...previousConfigs,
      children: [...arrayUnions],
      [fieldName]: fieldValue,
    },
  });

  setLayoutTree(newLayoutTree);
}

/**
 * 单选框/复选框的数目设定字段
 * @param {*} id 表示当前编辑组件的iD
 * @param {*} type 表示当前编辑组件的类型
 * @param {*} fieldName 表示当前正在编辑的表单域名
 * @param {*} fieldValue 表示当前正在编辑的表单域值
 * @param {*} props 表示外部组件传递的props属性
 */
function otherBasicPropsHander(fieldName, id, fieldValue, props) {
  const { setLayoutTree, layoutTree } = props;

  const newLayoutTree = new HandleLayoutTree(layoutTree).update(id, {
    id,
    [fieldName]: fieldValue,
  });

  setLayoutTree(newLayoutTree);
}
function propsHander(fieldName) {
  switch (fieldName) {
    case mapSettings.propertyID:
      return curry(bindingFormId)(fieldName);

    case mapSettings.labelCol:
    case mapSettings.wrapperCol:
      return curry(layoutFieldsHander)(fieldName);

    case mapSettings.radioOrCheckboxNum:
      return curry(radioOrCheckboxNumHander)(fieldName);

    default:
      return curry(otherBasicPropsHander)(fieldName);
  }
}

const BasedPropsEditorForm = Form.create({
  onFieldsChange(props, changedFields) {
    const { activeComponent, lastComponentId, layoutTree, setLayoutTree } = props;
    const id = activeComponent.get('id');

    // 如果前后两个待编辑的组件ID不一致，则直接返回。防止意外修改store中组件的状态属性
    if (id !== lastComponentId) {
      return;
    }

    // 获得触发事件的表单域键值对
    const innerKey = Object.keys(changedFields);
    const fieldName = changedFields[innerKey[0]].name;
    const fieldValue = changedFields[innerKey[0]].value;

    // 组件自定义属性，存放在componentConfig字段
    if (!Object.keys(mapSettings).includes(fieldName)) {
      const currentEditComponent = new HandleLayoutTree(layoutTree).getNode(id);
      const componentConfigs = currentEditComponent.componentConfig || {};

      let layoutTreeOptions;

      if (fieldName.includes('label') || fieldName.includes('value')) {
        const children = componentConfigs.children || [];

        const combinedChildren = children.map(item => {
          const tempItem = { ...item };
          if (item.labelName === fieldName) {
            tempItem.value = fieldValue;
          }
          return tempItem;
        });

        layoutTreeOptions = {
          id,
          componentConfig: {
            ...componentConfigs,
            children: combinedChildren,
          },
        };
      } else {
        layoutTreeOptions = {
          id,
          componentConfig: {
            ...componentConfigs,
            [fieldName]: fieldValue,
          },
        };
      }
      const newLayoutTree = new HandleLayoutTree(layoutTree).update(id, layoutTreeOptions);
      setLayoutTree(newLayoutTree);
    } else {
      const hander = propsHander(fieldName);
      hander(id, fieldValue, props);
    }
  },
})(BasedPropsEditor);

export default class FormPropsEditor extends BaseComponent {
  render() {
    const { activeComponent = {} } = this.props;
    const { type = '' } = activeComponent.toJS();

    return (
      <Card bordered={false} title={`${cartTitle} ${type}`} className="form-extend__editor">
        <BasedPropsEditorForm {...this.props} />
      </Card>
    );
  }
}
