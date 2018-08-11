import React from 'react';
import { Form, Input } from 'antd';
import BaseComponent from './BaseComponent';

const FormItem = Form.Item;
const { TextArea } = Input;

const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class MyTextarea extends BaseComponent {
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
      rows = 4,
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
    const style = { verticalAlign: 'middle' };

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
        )(<TextArea placeholder={placeholder} rows={rows} style={style} disabled={disabled} />)}
      </FormItem>
    );
  }
}
