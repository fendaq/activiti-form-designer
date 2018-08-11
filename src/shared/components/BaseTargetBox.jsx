/**
 * 基础原子拖拽容器组件，接收来自拖拽的基础组件；
 */

import React from 'react';
import { DropTarget } from 'react-dnd';
import BaseComponent from './BaseComponent';
import dragItemTypes from '../../formDesigner/consts/dragItemTypes';
import createFormID from '../../shared/utils/createFormID';
import CreateLayoutTree from '../utils/handleLayoutTree';

import './baseTargetBox.less';

const specialType = ['Tabs', 'Panel'];

const boxTarget = {
  drop(props, monitor) {
    const { parentId, layoutTree, setLayoutTree, setActiveComponent, row, col, tabKey } = props;

    // 获取正在拖放的数据
    const item = monitor.getItem();

    // id自增加1
    item.id = createFormID();
    item.parentId = parentId || 0;
    item.grid = item.grid || {};
    item.tabKey = tabKey;

    row && (item.grid.row = row);
    col && (item.grid.col = col);
    // Object.assign(item.grid, { row, col });

    const newLayoutTree = new CreateLayoutTree(layoutTree).insert(item.id, item);
    setLayoutTree(newLayoutTree);
    setActiveComponent(item);
  },
  canDrop(props, monitor) {
    const { type: parentType } = props;
    const item = monitor.getItem();

    // Panel组件中不能再放Panel组件
    return !(item.type === 'Panel' && parentType === 'Panel');
  },
};

class BaseTargetBox extends BaseComponent {
  render() {
    const { connectDropTarget, type: parentType } = this.props;
    const dragType = specialType.includes(parentType) ? 'layout' : 'business';

    return (
      connectDropTarget &&
      connectDropTarget(
        <div className="base-target-box">{`Drag and Drop a ${dragType} component`}</div>
      )
    );
  }
}

const DndBaseTarget = DropTarget(
  props => {
    if (specialType.includes(props.type)) {
      return dragItemTypes.BASECOMPONENT;
    }
    return dragItemTypes.LAYOUT;
  },
  boxTarget,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  })
)(BaseTargetBox);

export default DndBaseTarget;
