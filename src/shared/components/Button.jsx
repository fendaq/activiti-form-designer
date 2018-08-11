import React from 'react';
import { Button } from 'antd';
import BaseComponent from './BaseComponent';

const defaultComponentConfig = {
  buttonAction: 'NonAPIType',
  buttonType: '#',
};

export default class MyButton extends BaseComponent {
  static defaultProps = {
    componentConfig: defaultComponentConfig,
  };

  onClick = () => {
    const { buttonAction, buttonType } = this.props.componentConfig;
    if (buttonAction === defaultComponentConfig.buttonAction) {
      window.location.href = buttonType || defaultComponentConfig.buttonType;
    }
  };

  render() {
    const { label } = this.props;

    return <Button onClick={this.onClick}>{label || '按钮'}</Button>;
  }
}
