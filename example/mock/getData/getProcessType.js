const wrapper = require('../utils/responseWrapper');

const data = [
  {
    key: 'deliveryOrder',
    name: 'deliveryOrder',
  },
  {
    key: 'leave',
    name: 'leave',
  },
  {
    key: 'marketingService',
    name: '营销服务工单',
  },
  {
    key: 'myProcess',
    name: 'My process',
  },
  {
    key: '服务确认工单',
    name: '服务确认工单',
  },
];

module.exports = wrapper(data);
