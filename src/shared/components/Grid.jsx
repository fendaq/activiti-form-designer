/**
 * desc: layout布局组件 Grid
 */

import React from 'react';
import { Row, Col } from 'antd';
import BaseComponent from './BaseComponent';
import BaseTargetBox from './BaseTargetBox';

import './grid.less';

class Grid extends BaseComponent {
  renderGrid() {
    const { id, row = 5, col = 2, children, isDesign, ...props } = this.props;
    const allComponents = React.Children.map(children, child => child);
    const span = 24 / col;
    const rowElements = [];

    for (let i = 0; i < row; i += 1) {
      const colElements = [];

      for (let k = 0; k < col; k += 1) {
        let component = null;

        if (allComponents && allComponents.length > 0) {
          component = allComponents.find(
            item => item.props.grid.row === i + 1 && item.props.grid.col === k + 1
          );
        }

        if (!component && isDesign) {
          component = <BaseTargetBox row={i + 1} col={k + 1} {...props} parentId={id} />;
        }

        colElements.push(
          <Col key={k} span={span}>
            {component}
          </Col>
        );
      }

      rowElements.push(<Row key={i}>{colElements}</Row>);
    }

    return rowElements;
  }

  render() {
    const className = this.props.isDesign ? 'grid-layout bordered' : 'grid-layout';

    return <div className={className}>{this.renderGrid()}</div>;
  }
}

export default Grid;
