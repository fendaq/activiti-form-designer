import React from 'react';
import fetch from 'isomorphic-fetch';
import BaseComponent from '../shared/components/BaseComponent';
import createFormData from '../shared/utils/createFormData';
import WrappedForm from './WrappedForm';

import './index.less';

class FormApply extends BaseComponent {
  state = {
    formExtend: [],
    formData: {},
  };

  _refs = {
    wrappedForm: null,
  };

  componentDidMount() {
    const { apiUrl, processDefinitionId, taskKey } = this.props;

    fetch(
      `${apiUrl}/formDesignerController/getAllTaskFormProperties?processDefinitionId=${processDefinitionId}`
    )
      .then(res => res.json())
      .then(json => {
        const taskFormProperty = json.data.find(item => item.taskKey === taskKey);
        const { formExtend } = createFormData(taskFormProperty.formPropertyVO);

        this.setState({
          formExtend,
        });
      });
  }

  /**
   *
   * @param {*} key 表单域名
   * @param {*} value 表单域名对应的值
   */
  handleFieldsChange = (key, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [key]: value,
      },
    });
  };

  getDataType = data => Object.prototype.toString.call(data).slice(8, -1);

  /**
   * datePicker控件的日期为moment对象，需要转换后提交
   * @param  {[type]} values [提交的数据对象]
   */
  translateMoment = values => {
    if (this.getDataType(values) !== 'Object') {
      return values;
    }

    const newValues = Object.keys(values).map(key => {
      const value = values[key];
      const dataType = this.getDataType(value);
      const formProperty = key.split('-')[0];

      if (key.includes('-datePicker') && dataType === 'Object') {
        return {
          ...value,
          [formProperty]: value.format('YYYY-MM-DD'),
        };
      }

      if (key.includes('-datePicker') && dataType === 'Array') {
        return value.map(item => ({
          ...item,
          [formProperty]: item.format('YYYY-MM-DD'),
        }));
      }

      return value;
    });

    return newValues;
  };

  // 暴露给外部访问表单数据
  getFormData() {
    return new Promise((resolve, reject) => {
      this._refs.wrappedForm.validateFields((err, values) => {
        if (!err) {
          resolve(this.translateMoment(values));
        } else {
          reject(err);
        }
      });
    });
  }

  render() {
    const { formExtend, formData } = this.state;

    return (
      <div className="form-apply">
        <WrappedForm
          ref={element => {
            this._refs.wrappedForm = element;
          }}
          formExtend={formExtend}
          {...this.props}
          formData={formData}
          onFieldsChange={this.handleFieldsChange}
        />
      </div>
    );
  }
}

export default FormApply;
