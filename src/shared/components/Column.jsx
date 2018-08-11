/**
 * desc: layout布局组件 Column
 */

import React from 'react';
import BaseComponent from './BaseComponent';
import Grid from './Grid';

import './grid.less';

class Column extends BaseComponent {
  render() {
    const { row, col, ...props } = this.props;

    return <Grid {...props} row={1} col={col || 1} />;
  }
}

export default Column;
