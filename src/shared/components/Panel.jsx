import React from 'react';
import { Card } from 'antd';
import BaseComponent from './BaseComponent';
import BaseTargetBox from './BaseTargetBox';

const defaultStyle = { width: 'auto', marginBottom: '16px' };

class Panel extends BaseComponent {
  render() {
    const { id, sectionName = 'sectionName', children, isDesign, ...props } = this.props;

    return (
      <Card title={sectionName} style={defaultStyle}>
        {children && children.length > 0 ? (
          <div>
            {children}
            {isDesign && <BaseTargetBox {...props} parentId={id} />}
          </div>
        ) : (
          <BaseTargetBox {...props} parentId={id} />
        )}
      </Card>
    );
  }
}

export default Panel;
