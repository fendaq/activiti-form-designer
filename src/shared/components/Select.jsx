import React from 'react';
import fetch from 'isomorphic-fetch';
import { Form, Select } from 'antd';
import BaseComponent from './BaseComponent';

const FormItem = Form.Item;
const { Option } = Select;

const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const fetchDataSource = url =>
  fetch(url, {
    credentials: 'include',
    mode: 'cors',
  })
    .then(res => res.json())
    .then(json => {
      this.setState({
        dataSource: json,
      });
    });

export default class MySelect extends BaseComponent {
  static defaultProps = {
    componentConfig: {},
    formItemConfig: defaultFormItemConfig,
  };

  state = {
    dataSource: [],
  };

  componentDidMount() {
    const { componentConfig } = this.props;
    const { selectSource } = componentConfig;

    if (selectSource) {
      fetchDataSource(selectSource);
    }
  }

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
    const { dataSource } = this.state;
    const { getFieldDecorator } = form;
    const defaultData =
      dataSource.length > 0 ? dataSource.find(item => item.name === defaultValue) : {};

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(
          propertyID || `${id}`,
          {
            initialValue: value || defaultData.id,
          },
          {
            rules: [
              {
                required: componentConfig.required,
                message: `请选择${label}`,
              },
              ...patterns,
            ],
          }
        )(
          <Select placeholder={placeholder} disabled={disabled}>
            {dataSource.map(item => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        )}
      </FormItem>
    );
  }
}
