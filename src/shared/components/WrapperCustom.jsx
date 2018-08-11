/**
 * 对用户自定义的组件进行一次封装，可以做些数据前置处理
 */

import React from 'react';
import BaseComponent from './BaseComponent.jsx';

export default function WrapperCustom(CustomComponent) {
  if (!CustomComponent) return null;

  return class extends BaseComponent {
    render() {
      return (
        <div>
          <CustomComponent {...this.props} />
        </div>
      );
    }
  };
}
