import React from 'react';
import FormDesigner from 'formDesigner';
import Workflow from 'workflow';

const props = {
  apiUrl: __HOST_API__,
  customConfig: [
    {
      id: 'customer-1',
      type: 'Workflow',
      name: 'Workflow 工作流',
      isCustom: true,
    },
  ],
  customComponents: {
    Workflow,
  },
  customProperty: {
    Workflow: [
      {
        field: 'propertyID',
        text: '绑定ID',
        errorMessage: '请选择组件ID',
        required: false,
        type: 'select-single',
        value: '',
        options: [],
      },
    ],
  },
};

export default () => <FormDesigner {...props} />;
