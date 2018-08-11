/**
 * 表单设计器的数据展示组件，仅仅是展示，不涉及数据交互；
 */

import React from 'react';
import BaseComponent from '../shared/components/BaseComponent';
import createFormData from '../shared/utils/createFormData';
import WrappedForm from './WrappedForm';

import './index.less';

class FormViewer extends BaseComponent {
  state = {
    formExtend: [],
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

  render() {
    const { formData = {} } = this.props;
    const { formExtend } = this.state;

    return (
      <div className="form-viewer">
        <WrappedForm formExtend={formExtend} formData={formData} {...this.props} />
      </div>
    );
  }
}

export default FormViewer;
