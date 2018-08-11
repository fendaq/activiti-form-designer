/**
 * desc: 部署列表组件
 */

import React from 'react';
import { Table, Spin } from 'antd';
import BaseComponent from '../../shared/components/BaseComponent';

class DeployList extends BaseComponent {
  constructor() {
    super();

    this.state = {
      rowSize: 10,
      page: 1,
    };

    this.columns = [
      {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '版本',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: '部署时间',
        dataIndex: 'deploymentTime',
        key: 'deploymentTime',
      },
      {
        title: '操作',
        key: 'action',
        render: deploy => (
          <span>
            <a onClick={this.deleteDeploy.bind(null, deploy)}>删除</a>
          </span>
        ),
      },
    ];
  }

  componentDidMount() {
    const { rowSize, page } = this.state;

    this.props.getDeployList(rowSize, page);
  }

  componentDidUpdate() {
    const { refreshDeploy } = this.props;
    const { rowSize, page } = this.state;

    refreshDeploy && this.props.getDeployList(rowSize, page);
  }

  deleteDeploy = deploy => {
    const { id } = deploy;

    id && this.props.deleteDeploy(id);
  };

  handlePageChange = newPage => {
    const { rowSize, page } = this.state;

    this.setState({
      page: newPage,
    });

    if (newPage !== page) {
      this.props.getDeployList(rowSize, newPage);
    }
  };

  render() {
    const { spinningDeploy } = this.props;
    const { rows = {} } = this.props.deployList.toJS();
    const { totalRows, list = [] } = rows;
    const { rowSize, page } = this.state;

    const pagination = {
      pageSize: rowSize,
      defaultCurrent: page,
      current: page,
      total: totalRows,
      onChange: this.handlePageChange,
    };

    const newList = list.map((item, index) => ({ ...item, key: index + 1 }));

    return (
      <div>
        <h2>部署列表</h2>
        <Spin spinning={spinningDeploy}>
          <Table bordered columns={this.columns} dataSource={newList} pagination={pagination} />
        </Spin>
      </div>
    );
  }
}

export default DeployList;
