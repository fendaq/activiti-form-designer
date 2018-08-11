import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import LeftMenu from './leftMenu';

import './index.less';

export default class Main extends PureComponent {
  static propTypes = {
    route: PropTypes.object.isRequired,
  };

  constructor() {
    super();

    this.state = {
      collapse: true,
    };
  }

  onCollapseChange = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { collapse } = this.state;

    return (
      <div className={collapse ? 'layout-aside layout-aside-collapse' : 'layout-aside'}>
        <LeftMenu collapse={collapse} onCollapseChange={this.onCollapseChange} />
        <div className="layout-main">
          <div className="layout-container">{renderRoutes(this.props.route.routes)}</div>
        </div>
      </div>
    );
  }
}
