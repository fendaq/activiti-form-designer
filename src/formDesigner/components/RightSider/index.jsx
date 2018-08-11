import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';
import FormPropertyViewer from './FormPropertyViewer';
import FormPropsEditor from './FormPropsEditor';
import {
  setActiveComponent,
  bindFormExtendId,
  unbindFormExtendId,
  setLastComponetId,
  setLayoutTree,
} from '../../actions';

import './index.less';

const { Sider } = Layout;

class FormDesignerRightSider extends BaseComponent {
  render() {
    const { formProperty, activeComponent, lastComponentId, layoutTree } = this.props;

    return (
      <Sider className="form-designer__sider right" width={300}>
        <div className="right-sider__top">
          <FormPropertyViewer
            formProperty={formProperty}
            layoutTree={layoutTree}
            activeComponent={activeComponent}
            setActiveComponent={this.props.setActiveComponent}
          />
        </div>
        <div className="right-sider__main">
          {activeComponent.get('id') > 0 && (
            <FormPropsEditor
              formProperty={formProperty}
              layoutTree={layoutTree}
              activeComponent={activeComponent}
              lastComponentId={lastComponentId}
              setLayoutTree={this.props.setLayoutTree}
              setActiveComponent={this.props.setActiveComponent}
              bindFormExtendId={this.props.bindFormExtendId}
              unbindFormExtendId={this.props.unbindFormExtendId}
              setLastComponetId={this.props.setLastComponetId}
              customProperty={this.props.customProperty}
            />
          )}
        </div>
      </Sider>
    );
  }
}

export default connect(
  state => ({
    formProperty: state.formProperty.get('formProperty'),
    layoutTree: state.formExtend.get('layoutTree').toJS(),
    activeComponent: state.formExtend.get('activeComponent'),
    lastComponentId: state.formExtend.get('lastActivedComponentId'),
  }),
  {
    setActiveComponent,
    bindFormExtendId,
    unbindFormExtendId,
    setLastComponetId,
    setLayoutTree,
  }
)(FormDesignerRightSider);
