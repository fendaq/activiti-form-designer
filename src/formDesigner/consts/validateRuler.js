// 桥接规则验证条件与显示名称
const RulerConverter = [
  {
    text: '货币类型',
    field: 'currency',
  },
  {
    text: '手机号码',
    field: 'mobile',
  },
  {
    text: '整数类型',
    field: 'integer',
  },
  {
    text: '正整数类型',
    field: 'overZeroInteger',
  },
  {
    text: '非负整数',
    field: 'positiveInteger',
  },
  {
    text: '仅限数字和字母',
    field: 'onlyLettersAndNo',
  },
  {
    text: '数字字母和特殊字符',
    field: 'lettersNumberSpecialChar',
  },
];

export default RulerConverter;
