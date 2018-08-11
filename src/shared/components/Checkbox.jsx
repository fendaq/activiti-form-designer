import React from 'react';
import fetch from 'isomorphic-fetch';
import { Form, Checkbox } from 'antd';
import BaseComponent from './BaseComponent';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

const defaultComponentConfig = {
  children: [
    { labelName: 'label-1', value: 'label-1' },
    { labelName: 'value-1', value: 'value-1' },
  ],
};
const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class MyCheckbox extends BaseComponent {
  static defaultProps = {
    componentConfig: defaultComponentConfig,
    formItemConfig: defaultFormItemConfig,
  };

  state = {
    items: null,
  };

  componentDidMount() {
    const {
      componentConfig: { datasource },
    } = this.props;
    // 只有定义了数据源API，才进行服务端数据列表获取
    // todo:这个接口还需要商榷
    if (datasource) {
      fetch(`${datasource}/formDesignerController/getCheckboxItems`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            items: json.data,
          });
        });
    }
  }

  getPlainOptions = children => {
    const len = children.length;
    const result = [];
    // 由于数据源自动填充数据与人工设置数据结构不一样，因此需要分开处理
    if (this.state.items) {
      for (let i = 0; i < len; i += 1) {
        result.push({
          label: children[i].labelName,
          value: children[i].value,
        });
      }
    } else {
      for (let i = 0; i < len; i += 2) {
        result.push({
          label: children[i].value,
          value: children[i + 1].value,
        });
      }
    }

    return result;
  };

  render() {
    const {
      id,
      propertyID,
      label,
      type,
      defaultValue,
      patterns,
      formItemConfig,
      componentConfig,
      form,
      value,
      disabled,
    } = this.props;
    const { getFieldDecorator } = form;
    const renderItems =
      this.state.items || componentConfig.children || defaultComponentConfig.children;
    const defaultLabelIndex = renderItems.findIndex(item => item.value === defaultValue);
    const defaultData = defaultLabelIndex >= 0 ? renderItems[defaultLabelIndex + 1] : {};

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(
          propertyID || `${id}`,
          {
            initialValue: value || defaultData.value,
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
        )(<CheckboxGroup options={this.getPlainOptions(renderItems)} disabled={disabled} />)}
      </FormItem>
    );
  }
}
