import React from 'react';
import { Form } from 'antd';
import BaseComponent from './BaseComponent';

const FormItem = Form.Item;
const labelName = '折扣率';
const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class Discount extends BaseComponent {
  static defaultProps = {
    componentConfig: {},
    formItemConfig: defaultFormItemConfig,
  };

  render() {
    const {
      formItemConfig,
      form,
      componentConfig: { originalValue, targetValue },
      formData,
    } = this.props;
    const { getFieldDecorator } = form;
    const beforeDiscount = (formData && formData[originalValue]) || 1;
    const afterDiscount = (formData && formData[targetValue]) || 0;
    const value = (100 - afterDiscount / beforeDiscount * 100).toFixed(2);

    return (
      <FormItem {...formItemConfig} label={labelName}>
        {getFieldDecorator(`${labelName}`, {
          initialValue: value,
        })(<span>{`${value}%`}</span>)}
      </FormItem>
    );
  }
}
