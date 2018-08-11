const wrapper = require('../utils/responseWrapper');

const data = [
  {
    labelName: '钢琴',
    value: 'piano',
  },
  {
    labelName: '吉他',
    value: 'gitar',
  },
  {
    labelName: '小提琴',
    value: 'violin',
  },
];

module.exports = wrapper(data);
