import React from 'react';
import { Select, Popconfirm } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';

import './index.less';

const { Option } = Select;
const selectWidth = 200;
const notFoundContent = '无';
const okText = '确定';
const cancelText = '取消';

class SelectWithConfirm extends BaseComponent {
  cacheValue = null;

  state = {
    visible: false,
  };

  handleChange = value => {
    if (this.props.isEidtting) {
      this.cacheValue = value;
      this.setState({
        visible: true,
      });
    } else {
      this.props.onSelect(value);
    }
  };

  handleConfirm = () => {
    this.props.onSelect(this.cacheValue);
    this.props.setIsEditting(false);
    this.setState({
      visible: false,
    });
    this.cacheValue = null;
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { name, dataList, dataKey, dataValue, selected } = this.props;

    return (
      <Popconfirm
        title={`切换${name}会丢失当前未保存的修改，是否确定切换`}
        okText={okText}
        cancelText={cancelText}
        visible={this.state.visible}
        onConfirm={this.handleConfirm}
        onCancel={this.handleCancel}
      >
        <Select
          style={{ width: selectWidth }}
          notFoundContent={notFoundContent}
          value={selected}
          onChange={this.handleChange}
        >
          <Option key="default" value={null} disabled>
            选择{name}
          </Option>
          {dataList.map(item => (
            <Option key={item.get(dataKey)} value={item.get(dataKey)}>
              {item.get(dataValue)}
            </Option>
          ))}
        </Select>
      </Popconfirm>
    );
  }
}

export default SelectWithConfirm;
