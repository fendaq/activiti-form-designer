import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import BaseComponent from '../../../shared/components/BaseComponent';
import dragItemTypes from '../../consts/dragItemTypes';
import Config from './config';
import DragSource from './DragSource';

import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

class FormDesignerLeftSider extends BaseComponent {
  rootSubmenuKeys = Config.map(item => item.id);

  state = {
    // 默认展开的选项
    openKeys: [this.rootSubmenuKeys[0]],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  getMenu = menus =>
    menus.map(menu => {
      const newMenu = menu;
      // 根据组件类型，动态设置拖拽type
      let dragType = dragItemTypes.LAYOUT;

      if (newMenu.isLayout) {
        dragType = dragItemTypes.BASECOMPONENT;
      }

      newMenu.dragType = dragType;

      return <DragSource key={newMenu.id} menu={newMenu} dragType={dragType} {...this.props} />;
    });

  getSubMenu = () =>
    Config.map(item => (
      <SubMenu
        key={item.id}
        title={
          <span>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </span>
        }
      >
        {this.getMenu(item.components)}
      </SubMenu>
    ));

  render() {
    const { customConfig = [] } = this.props;

    for (let i = 0; i < Config.length; i += 1) {
      const item = Config[i];
      if (item.id === 'customized') {
        item.components = customConfig;
      }
    }

    return (
      <Sider className="form-designer__sider left">
        <div className="navigation">
          <Menu mode="inline" onOpenChange={this.onOpenChange} style={{ width: 200 }}>
            {this.getSubMenu()}
          </Menu>
        </div>
      </Sider>
    );
  }
}

export default connect(state => ({
  formProperty: state.formProperty.get('formProperty'),
  layoutTree: state.formExtend.get('layoutTree').toJS(),
}))(FormDesignerLeftSider);
