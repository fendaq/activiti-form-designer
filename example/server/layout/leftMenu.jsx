import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default class LeftMenu extends PureComponent {
  static propTypes = {
    onCollapseChange: PropTypes.func.isRequired,
    collapse: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <aside className="layout-sider">
        <div className="layout-logo" />
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['laptop']}>
          <Menu.Item key="formDesigner">
            <Icon type="laptop" />
            <Link to="/form-designer">Form Designer</Link>
          </Menu.Item>
          <Menu.Item key="formApply">
            <Icon type="laptop" />
            <Link to="/form-apply">Form Apply</Link>
          </Menu.Item>
          <Menu.Item key="formViewer">
            <Icon type="laptop" />
            <Link to="/form-viewer">Form Viewer</Link>
          </Menu.Item>
          <Menu.Item key="workflow">
            <Icon type="laptop" />
            <Link to="/workflow">Workflow</Link>
          </Menu.Item>
          <Menu.Item key="processManage">
            <Icon type="laptop" />
            <Link to="/processManage">ProcessManage</Link>
          </Menu.Item>
        </Menu>
        <button className="ant-aside-action" onClick={this.props.onCollapseChange}>
          {this.props.collapse ? <Icon type="right" /> : <Icon type="left" />}
        </button>
      </aside>
    );
  }
}
