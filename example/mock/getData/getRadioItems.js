const wrapper = require('../utils/responseWrapper');

const data = [
  {
    labelName: '中国',
    value: 'China',
  },
  {
    labelName: '美国',
    value: 'USA',
  },
  {
    labelName: '日本',
    value: 'Japan',
  },
];

module.exports = wrapper(data);
