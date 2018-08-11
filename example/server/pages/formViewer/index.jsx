import React from 'react';
import FormViewer from 'formViewer';
import formData from 'shared/schema/formData';
import Workflow from 'workflow';

const props = {
  apiUrl: __HOST_API__,
  processDefinitionId: 'maintenanceProcess:1:182507',
  taskKey: 'one',
  customComponents: {
    Workflow,
  },
};

export default () => <FormViewer {...props} formData={formData} />;
