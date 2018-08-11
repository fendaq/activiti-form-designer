import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from '../../shared/components/BaseComponent';
import ModuleList from './ModelList';
import DeployList from './DeployList';
import {
  getDeployList,
  getModelList,
  deleteModel,
  createModel,
  deployModel,
  deleteDeploy,
} from '../actions';

class ProcessManage extends BaseComponent {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <ModuleList {...this.props} />
        <DeployList {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    modelsList: state.models.get('modelsList'),
    deployList: state.models.get('deployList'),
    refreshDeploy: state.models.get('refreshDeploy'),
    refreshModel: state.models.get('refreshModel'),
    redirectUrl: state.models.get('redirectUrl'),
    spinningModel: state.models.get('spinningModel'),
    spinningDeploy: state.models.get('spinningDeploy'),
  }),
  {
    getDeployList,
    getModelList,
    deleteModel,
    createModel,
    deployModel,
    deleteDeploy,
  }
)(ProcessManage);
