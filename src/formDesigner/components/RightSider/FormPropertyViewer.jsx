import React from 'react';
import { Card, Tag } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';
import HandleLayoutTree from '../../../shared/utils/handleLayoutTree';

const { CheckableTag } = Tag;
const cartTitle = 'FormProperty信息显示';

class FormPropertyViewer extends BaseComponent {
  handleChange(formExtendID) {
    if (!formExtendID) return;

    const { layoutTree, setActiveComponent } = this.props;
    const selected = new HandleLayoutTree(layoutTree).getNode(formExtendID);

    setActiveComponent({
      id: selected.id,
      type: selected.type,
    });
  }

  render() {
    const { formProperty, activeComponent } = this.props;

    return (
      <Card bordered={false} title={cartTitle} className="form-property__viewer">
        {formProperty.map(item => {
          const id = item.get('id');
          const formExtendID = item.get('formExtendID');
          const isChecked = formExtendID === activeComponent.get('id');

          return (
            <CheckableTag
              className={!formExtendID ? 'unbind' : null}
              key={id}
              checked={isChecked}
              onChange={this.handleChange.bind(this, formExtendID)}
            >
              {item.get('name')}
            </CheckableTag>
          );
        })}
      </Card>
    );
  }
}

export default FormPropertyViewer;
