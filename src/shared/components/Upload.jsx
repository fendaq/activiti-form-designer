import React from 'react';
import { Form, Upload, message, Button, Icon } from 'antd';
import BaseComponent from './BaseComponent';
import './upload.less';

const FormItem = Form.Item;
const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class MyUpload extends BaseComponent {
  static defaultProps = {
    componentConfig: {},
    formItemConfig: defaultFormItemConfig,
  };

  onChange = info => {
    if (info.file && info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }

    if (info.file && info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file && info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  render() {
    const { id, propertyID, label, type, formItemConfig, componentConfig, form } = this.props;
    const { caption, acceptType, actionURL } = componentConfig;
    const { getFieldDecorator } = form;

    const params = {
      accept: acceptType && acceptType.join(','),
      name: propertyID,
      action: actionURL,
      headers: {
        authorization: 'authorization-text',
      },
    };

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(propertyID || `${id}`)(
          <div className="upload-container">
            <Upload {...params} onChange={this.onChange}>
              <Button>
                <Icon type="upload" />
                {caption}
              </Button>
            </Upload>
            <span className="description">{`支持扩展名:${acceptType || 'file'}`}</span>
          </div>
        )}
      </FormItem>
    );
  }
}
