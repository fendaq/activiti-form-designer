import React from 'react';
import { Form } from 'antd';
import BaseComponent from '../shared/components/BaseComponent';
import allComponents from '../shared/components/';

import './index.less';

class BaseForm extends BaseComponent {
  static defaultProps = {
    customComponents: {},
  };

  loopFormExtend = (formExtend, formData) =>
    formExtend.map(item => {
      const Component =
        allComponents[item.type] || this.props.customComponents[item.type] || allComponents.Input;

      return (
        <Component key={item.id} {...item} form={this.props.form} formData={formData} isApply>
          {item.children ? this.loopFormExtend(item.children, formData) : null}
        </Component>
      );
    });

  render() {
    const { formExtend, formData } = this.props;

    return <Form>{this.loopFormExtend(formExtend, formData)}</Form>;
  }
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    // 获得触发事件的表单域键值对
    const innerKey = Object.keys(changedFields);
    const fieldName = changedFields[innerKey[0]].name;
    const fieldValue = changedFields[innerKey[0]].value;

    props.onFieldsChange(fieldName, fieldValue);
  },
})(BaseForm);
