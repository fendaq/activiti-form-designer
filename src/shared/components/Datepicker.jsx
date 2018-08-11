/**
 * desc:日期选择控件
 */

import React from 'react';
import { DatePicker, Form } from 'antd';
import moment from 'moment';
import BaseComponent from './BaseComponent';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const DateIndicator = '单日期';
const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

class Datepicker extends BaseComponent {
  static defaultProps = {
    formItemConfig: defaultFormItemConfig,
  };

  defaultValue = (value, isRangeDatepicker) => {
    const now = new Date();
    let _value = value;

    if (isRangeDatepicker) {
      _value = _value || [];

      return [moment(_value[0] || now), moment(_value[1] || now)];
    }

    return moment(_value || now);
  };

  render() {
    const {
      id,
      propertyID,
      formItemConfig,
      label,
      type,
      componentConfig,
      disabled,
      value,
      form,
    } = this.props;
    const { getFieldDecorator } = form;
    const datepicker = (componentConfig && componentConfig.datepicker) || DateIndicator;
    const isRangeDatepicker = datepicker !== DateIndicator;

    const getDatePicker = isRangeDatepicker ? (
      <RangePicker format={dateFormat} disabled={disabled} />
    ) : (
      <DatePicker format={dateFormat} disabled={disabled} />
    );

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(
          `${propertyID || id}-datePicker`,
          {
            initialValue: this.defaultValue(value, isRangeDatepicker),
          },
          {}
        )(getDatePicker)}
      </FormItem>
    );
  }
}

export default Datepicker;
