import React from 'react';
import { Form, Input } from 'antd';
import BaseComponent from './BaseComponent';

const FormItem = Form.Item;

const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class MyInput extends BaseComponent {
  static defaultProps = {
    componentConfig: {},
    formItemConfig: defaultFormItemConfig,
  };

  render() {
    const {
      id,
      propertyID,
      label,
      type,
      defaultValue,
      placeholder,
      patterns,
      formItemConfig,
      componentConfig,
      form,
      value,
      disabled,
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(
          propertyID || `${id}`,
          {
            initialValue: value || defaultValue,
          },
          {
            rules: [
              {
                required: componentConfig.required,
                message: `请输入${label}`,
              },
              ...patterns,
            ],
          }
        )(<Input placeholder={placeholder} disabled={disabled} />)}
      </FormItem>
    );
  }
}
