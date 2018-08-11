import React from 'react';
import { Form } from 'antd';
import BaseComponent from '../shared/components/BaseComponent';
import allComponents from '../shared/components/';
import './index.less';

let customComponents = {};

class BaseForm extends BaseComponent {
  constructor(props) {
    super(props);
    customComponents = props.customComponents || {};
  }

  renderLayout = (item, Component, formData) => {
    const noBordered = item.type === 'Grid' || item.type === 'Column';

    return (
      <Component key={item.id} {...item} noBordered={noBordered}>
        {this.loopFormExtend(item.children, formData)}
      </Component>
    );
  };

  renderComponent = (item, Component) => (
    <Component key={item.id} {...item} form={this.props.form} />
  );

  loopFormExtend = (formExtend, formData) =>
    formExtend.map(item => {
      const Component =
        allComponents[item.type] || customComponents[item.type] || allComponents.Input;

      if (item.propertyID) {
        Object.assign(item, {
          value: formData[item.propertyID],
          disabled: true,
          isViewer: true,
        });
      }

      if (item.children) {
        // 布局组件
        return this.renderLayout(item, Component, formData);
      }

      // 非布局组件
      return this.renderComponent(item, Component, formData);
    });

  render() {
    const { formExtend, formData } = this.props;

    return <Form>{this.loopFormExtend(formExtend, formData)}</Form>;
  }
}

export default Form.create({
  onValuesChange: (props, changedValues, allValues) => {
    props.onChange(allValues);
  },
})(BaseForm);
