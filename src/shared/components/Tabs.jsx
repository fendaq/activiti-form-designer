/**
 * desc: 复合组件 Tabs
 */

import React from 'react';
import { Tabs } from 'antd';
import BaseComponent from './BaseComponent';
import BaseTargetBox from './BaseTargetBox';
import './grid.less';

const { TabPane } = Tabs;

class MyTabs extends BaseComponent {
  handleChange = (/* activityKey */) => {
    // console.log(activityKey);
  };

  convertConfig = config => {
    if (!config || !config.length) {
      return [{ label: 'tab1', value: 'tab1' }];
    }

    const newConfig = [];

    for (let i = 0; i < config.length; i += 2) {
      const data = {};
      data.label = config[i].value;
      data.value = config[i + 1].value;
      data.key = i + 1;

      newConfig.push(data);
    }

    return newConfig;
  };

  convertChildren = children => {
    if (!children || !children.length) return;

    const newChildren = {};

    children.forEach(child => {
      const { tabKey } = child.props;
      newChildren[tabKey] = child;
    });

    return newChildren;
  };

  render() {
    const { id, componentConfig = {}, children, isDesign, ...props } = this.props;
    const _children = this.convertChildren(children);
    const newConfig = this.convertConfig(componentConfig.children);

    return (
      <Tabs defaultActiveKey="1" onChange={this.handleChange}>
        {newConfig.map((item, index) => (
          <TabPane tab={item.label} value={item.value} key={item.key}>
            {_children && _children[index + 1] ? (
              <div>{_children[index + 1]}</div>
            ) : (
              isDesign && <BaseTargetBox {...props} parentId={id} tabKey={index + 1} />
            )}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default MyTabs;
