/**
 * desc: 模型列表组件
 */

import React from 'react';
import { Table, Divider, Button, Spin } from 'antd';
import BaseComponent from '../../shared/components/BaseComponent';

class ModelList extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      rowSize: 7,
      page: 1,
    };

    this.columns = [
      {
        title: '模型编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '模型名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '版本',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: text => <span>{new Date(text).toLocaleString()}</span>,
      },
      {
        title: '操作',
        key: 'action',
        render: model => (
          <span>
            <a href={`http://172.16.11.155:9000/modeler.html?modelId=${model.id}`}>编辑</a>
            <Divider type="vertical" />
            <a onClick={this.handleDelete.bind(null, model)}>删除</a>
            <Divider type="vertical" />
            <a onClick={this.handlePublish.bind(null, model)}>发布</a>
          </span>
        ),
      },
    ];
  }
  componentDidMount() {
    const { rowSize, page } = this.state;
    this.props.getModelList(rowSize, page);
    this.props.createModel();
  }

  componentDidUpdate() {
    const { refreshModel } = this.props;
    const { rowSize, page } = this.state;

    if (refreshModel) {
      this.props.getDeployList(rowSize, page);
      this.props.getModelList(rowSize, page);
    }
  }

  handleDelete = model => {
    const { id } = model;
    this.props.deleteModel(id);
  };

  handlePublish = model => {
    const { id } = model;
    this.props.deployModel(id);
  };

  handleCreateModel = () => {
    const { redirectUrl } = this.props;

    if (redirectUrl) {
      window.location.href = `http://172.16.11.155:9000${redirectUrl}`;
    }
  };

  handlePageChange = newPage => {
    const { rowSize, page } = this.state;

    this.setState({
      page: newPage,
    });

    if (newPage !== page) {
      this.props.getModelList(rowSize, newPage);
    }
  };

  render() {
    const { modelsList, spinningModel } = this.props;
    const { rows = {} } = modelsList.toJS();
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
        <h2>模型列表</h2>
        <Button style={{ marginBottom: 20 }} onClick={this.handleCreateModel}>
          绘制流程
        </Button>
        <Spin spinning={spinningModel}>
          <Table bordered columns={this.columns} dataSource={newList} pagination={pagination} />
        </Spin>
      </div>
    );
  }
}

export default ModelList;
