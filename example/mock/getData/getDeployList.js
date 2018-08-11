const wrapper = require('../utils/responseWrapper');

const data = {
  obj: null,
  extra: {},
  rows: {
    totalRows: 21,
    current: 1,
    rowSize: 7,
    totalPages: 1,
    list: [
      {
        id: '1',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:23:29.135+08:00',
        version: 1,
        category: null,
        tenantId: '',
      },
      {
        id: '2501',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:26:19.708+08:00',
        version: 2,
        category: null,
        tenantId: '',
      },
      {
        id: '2502',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:26:19.708+08:00',
        version: 2,
        category: null,
        tenantId: '',
      },
      {
        id: '2503',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:26:19.708+08:00',
        version: 2,
        category: null,
        tenantId: '',
      },
      {
        id: '2504',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:26:19.708+08:00',
        version: 2,
        category: null,
        tenantId: '',
      },
      {
        id: '2505',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:26:19.708+08:00',
        version: 2,
        category: null,
        tenantId: '',
      },
      {
        id: '2506',
        name: '测试流程',
        deploymentTime: '2018-06-15T20:26:19.708+08:00',
        version: 2,
        category: null,
        tenantId: '',
      },
    ],
  },
};
module.exports = wrapper(data);
