import React from 'react';
import { Form, Upload, Modal, Icon } from 'antd';
import BaseComponent from './BaseComponent';
import './pictureWalls.less';

const FormItem = Form.Item;
const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class PicturesWall extends BaseComponent {
  static defaultProps = {
    componentConfig: {},
    formItemConfig: defaultFormItemConfig,
  };

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { id, propertyID, label, type, formItemConfig, componentConfig, form } = this.props;
    const { caption, actionURL } = componentConfig;
    const { getFieldDecorator } = form;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">{caption}</div>
      </div>
    );
    const PictureWalls = (
      <div className="clearfix">
        <Upload
          action={actionURL}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(propertyID || `${id}`)(PictureWalls)}
      </FormItem>
    );
  }
}
