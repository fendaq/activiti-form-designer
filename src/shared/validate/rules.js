export const currency = /^([0-9]{1}\.\d{1,2}|[1-9]{1}\d*\.\d{1,2}|[1-9]{1}\d*|0)$/;

export const mobile = /((^0[0-9]{2,3}-?[0-9]{6,8}$)|(^00886-?[1-9]{1,2}-?[0-9]{6,8}$))|((^1[345789]{1}[0-9]{9}$)|(^400\d{7}$)|(^00886-?9[0-9]{8}$)|(^09[0-9]{8}$))/i;

export const padMAC = {
  pattern: /^([A-Za-z0-9]{2}:){5}[A-Za-z0-9]{2}$/,
  message: 'PAD地址验证无效.',
};

export const iPadMAC = {
  pattern: /^([A-Za-z0-9]{8}-)([A-Za-z0-9]{4}-){3}([A-Za-z0-9]{12})$/,
  message: 'IPAD地址验证无效.',
};

export const otherMAC = {
  pattern: /^[A-Za-z0-9:-]{0,50}$/,
  message: '请填写数字或字母或-,:且长度不超过50.！',
};

export const integer = {
  pattern: /^[-]?[1-9]+\d*$|^0{1}$/i,
  message: '请输入整数',
};

export const overZeroInteger = {
  pattern: /^\+?[1-9]\d*$/i,
  message: '请输入大于0的正整数',
};

export const positiveInteger = {
  pattern: /^[0-9]*[1-9][0-9]*$/i,
  message: '请输入正整数',
};

export const onlyLettersAndNo = {
  pattern: /^[A-Za-z0-9]+$/,
  message: '请填写数字或字母',
};

export const lettersNumberSpecialChar = {
  pattern: /^[A-Za-z0-9-_./]+$/,
  message: '请填写数字或字母或者_-./等字符',
};
