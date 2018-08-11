const successRes = {
  status: 0,
  message: '成功',
  content: null,
};

const failedRes = {
  status: 1,
  message: '失败',
  content: null,
};

const mapping = {
  'post/1': successRes,
  'post/2': failedRes,
};

module.exports = url => {
  const key = Object.keys(mapping).find(k => url.indexOf(k) !== -1);
  return mapping[key];
};
