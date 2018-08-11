/**
 * 拖放的组件的容器
 */

import React from 'react';
import { DropTarget } from 'react-dnd';
import { Popconfirm, Icon, Form } from 'antd';
import classnames from 'classnames';
import BaseComponent from '../../../shared/components/BaseComponent';
import dragItemTypes from '../../consts/dragItemTypes';
import allComponents from '../../../shared/components/';
import WrapperCustom from '../../../shared/components/WrapperCustom';
import createFormID from '../../../shared/utils/createFormID';
import HandleLayoutTree from '../../../shared/utils/handleLayoutTree';

import './index.less';

const okText = '确定';
const cancelText = '取消';

const boxTarget = {
  drop(props, monitor) {
    const hasDroppedOnChild = monitor.didDrop();

    if (hasDroppedOnChild) {
      return;
    }

    const { id: parentId } = props;

    // 获取正在拖放的数据
    const item = monitor.getItem();

    // id自增加1
    item.id = createFormID();
    item.parentId = parentId || 0;

    const { layoutTree } = props;
    const newLayoutTree = new HandleLayoutTree(layoutTree).insert(item.id, item);

    props.setLayoutTree(newLayoutTree);
    props.setActiveComponent(item);
  },
  canDrop(props) {
    return props.formProperty.size > 0;
  },
};

class TargetBox extends BaseComponent {
  static defaultProps = {
    customComponents: {},
  };

  state = {
    visible: false,
    showDeleteIcon: false,
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      showDeleteIcon: false,
    });
  };

  handleConfirm = item => {
    const { layoutTree, setLayoutTree, setActiveComponent, unbindFormExtendId } = this.props;
    const layoutTreeHander = new HandleLayoutTree(layoutTree);
    const allLeafNodes = layoutTreeHander.getAllLeafNodes(item.id);

    this.setState({
      visible: false,
      showDeleteIcon: false,
      isClickIcon: false,
    });

    // 如果删除的是布局组件，则提取其后代中所有非容器组件，并按照条件解绑formProperty属性
    allLeafNodes.forEach(leftNode => {
      unbindFormExtendId({
        id: leftNode.id,
      });
    });

    const deleteComponent = layoutTreeHander.delete(item.id);

    setLayoutTree(deleteComponent);
    setActiveComponent({ id: -1, type: '' });
  };
  // 根据表单设计器组件ID得到其对应的属性列表
  onComponentClicked = ({ id, type }, event) => {
    event.stopPropagation();

    const { activeComponent, setActiveComponent } = this.props;

    if (activeComponent.get('id') === id) {
      this.setState({
        showDeleteIcon: true,
      });
    } else {
      this.setState({
        showDeleteIcon: false,
      });
    }

    setActiveComponent({ id, type });
  };

  // 点击删除按钮的事件处理器
  onClickDeleteIcon = ({ id }) => {
    const { activeComponent } = this.props;

    if (activeComponent.get('id') === id) {
      this.setState({
        visible: true,
      });
    }
  };

  layoutRender = (layoutTree, formProperty) =>
    layoutTree.map(item => {
      const activeId = this.props.activeComponent.get('id');
      const { children, type, id } = item;
      let Component = null;

      // 如果是自定义组件
      if (item.isCustom) {
        Component = WrapperCustom(this.props.customComponents[type]);
      } else {
        Component = allComponents[type];
      }

      if (!Component) {
        // console.log(`无此组件 ${type}`);
        return null;
      }

      return (
        <Popconfirm
          key={id}
          title="是否删除该组件，以及可能存在的子组件？"
          okText={okText}
          cancelText={cancelText}
          visible={id === activeId && this.state.visible}
          onConfirm={() => this.handleConfirm(item)}
          onCancel={this.handleCancel}
          placement="topRight"
          grid={item.grid}
          tabKey={item.tabKey}
        >
          <div
            className={classnames({
              'component-wrap': true,
              'selected-item': id === activeId,
            })}
            onClick={event => this.onComponentClicked({ id, type }, event)}
          >
            <Component
              {...item}
              isDesign
              formProperty={formProperty}
              layoutTree={this.props.layoutTree}
              setActiveComponent={this.props.setActiveComponent}
              setLayoutTree={this.props.setLayoutTree}
              setDynamicSearchResult={this.props.setDynamicSearchResult}
              form={this.props.form}
            >
              {children && children.length ? this.layoutRender(children, formProperty) : null}
            </Component>
            {this.state.showDeleteIcon &&
              id === activeId && (
                <Icon
                  type="delete"
                  className="btn-delete"
                  onClick={event => this.onClickDeleteIcon({ id, type }, event)}
                />
              )}
          </div>
        </Popconfirm>
      );
    });

  render() {
    const { connectDropTarget, layoutTree, formProperty } = this.props;

    return connectDropTarget(
      <div className="form-designer__preview">
        <Form>{this.layoutRender(layoutTree, formProperty.toJS())}</Form>
      </div>
    );
  }
}

const DndTarget = DropTarget(dragItemTypes.BASECOMPONENT, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(TargetBox);

const FormTarget = Form.create()(DndTarget);

export default FormTarget;
