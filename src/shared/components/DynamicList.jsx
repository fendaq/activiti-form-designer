import React from 'react';
import { Card, Icon } from 'antd';
import BaseComponent from './BaseComponent';
import HandleLayoutTree from '../utils/handleLayoutTree';
import createFormID from '../utils/createFormID';

const linkStyle = { marginLeft: '16px' };
const iconStyle = { fontSize: '20px' };

class DynamicList extends BaseComponent {
  componentDidMount() {
    if (this.props.isApply) {
      const handleLayoutTree = new HandleLayoutTree(this.props.layoutTree);
      const parent = handleLayoutTree.getNode(this.props.id);

      if (parent.children && parent.children.length > 0) {
        parent.children[0].children.forEach(item => {
          this.props.setLayoutTree(
            handleLayoutTree.update(item.id, {
              propertyID: `${item.propertyID}_1`,
            })
          );
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // 绑定propertyID后自动生成column
    if (this.props.propertyID !== nextProps.propertyID) {
      const property = nextProps.formProperty.find(item => item.id === nextProps.propertyID);

      if (property && property.type === 'list') {
        const handleLayoutTree = new HandleLayoutTree(nextProps.layoutTree);
        const parent = handleLayoutTree.getNode(nextProps.id);
        parent.sectionName = property.name;
        handleLayoutTree.insert(parent.id, parent);

        const childId =
          parent.children && parent.children.length > 0 ? parent.children[0].id : createFormID();
        const child = {
          id: childId,
          parentId: nextProps.id,
          order: 1,
          type: 'Column',
          row: 1,
          col: property.itemCount,
          isLayout: true,
          isDisabled: true,
        };
        const newLayoutTree = handleLayoutTree.insert(childId, child);

        nextProps.setLayoutTree(newLayoutTree);
      }
    }
  }

  handleAdd = () => {
    // 在FormApply中点击加号
    if (this.props.isApply) {
      const handleLayoutTree = new HandleLayoutTree(this.props.layoutTree);
      const parent = handleLayoutTree.getNode(this.props.id);

      if (parent.children && parent.children.length > 0) {
        const sourceChild = parent.children[0];
        const childId = createFormID();

        const newChild = Object.assign({}, sourceChild, {
          id: childId,
          children: sourceChild.children.map(item =>
            Object.assign({}, item, {
              id: createFormID(),
              propertyID: `${item.propertyID}_${parent.children.length + 1}`,
            })
          ),
        });

        const newLayoutTree = handleLayoutTree.insert(childId, newChild);

        this.props.setLayoutTree(newLayoutTree);
      }
    }
  };

  handleRemove = () => {
    if (this.props.isApply) {
      const handleLayoutTree = new HandleLayoutTree(this.props.layoutTree);
      const parent = handleLayoutTree.getNode(this.props.id);

      if (parent.children && parent.children.length > 1) {
        const targetChild = parent.children[parent.children.length - 1];
        const newLayoutTree = handleLayoutTree.delete(targetChild.id);

        this.props.setLayoutTree(newLayoutTree);
      }
    }
  };

  render() {
    const { sectionName = 'sectionName', children } = this.props;
    const extra = (
      <div style={{ height: '20px' }}>
        <a href="#" onClick={this.handleRemove} style={linkStyle}>
          <Icon type="minus-circle-o" style={iconStyle} />
        </a>
        <a href="#" onClick={this.handleAdd} style={linkStyle}>
          <Icon type="plus-circle-o" style={iconStyle} />
        </a>
      </div>
    );

    return (
      <Card title={sectionName} extra={extra} bodyStyle={{ paddingBottom: '8px' }}>
        {children}
      </Card>
    );
  }
}

export default DynamicList;
