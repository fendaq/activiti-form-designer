import validateRuler from './validateRuler';

/**
 * 一些配置项的映射，用于在保存配置信息时使用
 */
const mapSettings = {
  propertyID: 'propertyID',
  label: 'label',
  labelCol: 'labelCol',
  wrapperCol: 'wrapperCol',
  selectSource: 'selectSource',
  patterns: 'patterns',
  defaultValue: 'defaultValue',
  placeholder: 'placeholder',
  sectionName: 'sectionName',
  radioOrCheckboxNum: 'radioOrCheckboxNum',
  row: 'row',
  col: 'col',
  radioAndCheckboxSettings: ['接口类型', '自定义类型'],
  discountSettings: ['originalValue', 'targetValue'],
};

/**
 * 各个组件常规配置项
 */
const commonProps = [
  {
    field: mapSettings.propertyID,
    text: '绑定ID',
    errorMessage: '请选择组件ID',
    required: false,
    type: 'select-single',
    value: '',
    options: [],
  },
  {
    field: 'label',
    text: 'label标签',
    errorMessage: '请输入标签名称',
    required: false,
    type: 'char',
    value: '',
  },
  {
    field: 'patterns',
    text: '验证规则',
    errorMessage: '请选择验证规则',
    required: false,
    type: 'select-multiple',
    value: [],
    options: validateRuler,
  },
  {
    field: 'placeholder',
    text: '提示信息',
    errorMessage: '请输入提示信息',
    required: false,
    type: 'char',
    value: '',
  },
  {
    field: 'defaultValue',
    text: '默认值',
    errorMessage: '请输入默认值',
    required: false,
    type: 'char',
    value: '',
  },
  {
    field: mapSettings.labelCol,
    text: '标签布局',
    errorMessage: '请输入不大于24的正整数',
    required: false,
    // pattern: '/^[0-9]*[1-9][0-9]*$/i',
    type: 'char',
    value: '',
    parent: 'formItemConfig',
  },
  {
    field: mapSettings.wrapperCol,
    text: '组件布局',
    errorMessage: '请输入不大于24的正整数',
    required: false,
    // pattern: '/^[0-9]*[1-9][0-9]*$/i',
    type: 'char',
    value: '',
    isDisabled: true,
    parent: 'formItemConfig',
  },
];

// 根据组件类型配置对应的属性列表
const componentProps = {
  Button: [
    { ...commonProps[0] },
    { ...commonProps[1] },
    {
      field: 'buttonType',
      text: '按钮类型',
      errorMessage: '请选择按钮类型',
      required: true,
      type: 'select-single',
      value: '选择按钮类型',
      options: ['APIType', 'NonAPIType'],
      parent: 'componentConfig',
    },
  ],
  Input: [
    ...commonProps,
    {
      field: 'required',
      text: '是否必填',
      errorMessage: '请设置是否必填',
      required: false,
      type: 'select-single',
      value: 'No',
      options: ['Yes', 'No'],
      parent: 'componentConfig',
    },
    {
      field: 'writtable',
      text: '是否可编辑',
      errorMessage: '请设置是否可编辑',
      required: false,
      type: 'select-single',
      value: 'No',
      options: ['Yes', 'No'],
      parent: 'componentConfig',
    },
  ],
  Select: [
    {
      ...commonProps[0],
    },
    {
      ...commonProps[1],
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
    {
      field: mapSettings.selectSource,
      text: '数据源API',
      errorMessage: '请输入数据源',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
  ],
  Textarea: [...commonProps],
  Radio: [
    {
      ...commonProps[0],
    },
    {
      ...commonProps[1],
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
    {
      field: 'isSetDataSource',
      text: '单选类型',
      errorMessage: '请选择单选项类型API',
      required: true,
      type: 'select-single',
      value: '请选择类型',
      options: mapSettings.radioAndCheckboxSettings,
      parent: 'componentConfig',
    },
  ],
  Checkbox: [
    {
      ...commonProps[0],
    },
    {
      ...commonProps[1],
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
    {
      field: 'isSetDataSource',
      text: '复选类型',
      errorMessage: '请选择是否设置数据源API',
      required: true,
      type: 'select-single',
      value: '请选择类型',
      options: mapSettings.radioAndCheckboxSettings,
      parent: 'componentConfig',
    },
  ],
  Panel: [
    {
      field: 'sectionName',
      text: 'Panel 命名',
      required: false,
      type: 'char',
      value: '',
    },
  ],
  Grid: [
    {
      field: mapSettings.row,
      text: 'Row 行数',
      required: false,
      type: 'char',
      value: '',
    },
    {
      field: mapSettings.col,
      text: 'Col 列数',
      required: false,
      type: 'char',
      value: '',
    },
  ],
  Column: [
    {
      field: mapSettings.col,
      text: 'Col 列数',
      required: false,
      type: 'char',
      value: '',
    },
  ],
  Datepicker: [
    {
      ...commonProps[0],
    },
    {
      ...commonProps[1],
    },
    {
      field: 'datepicker',
      text: '日期种类',
      required: false,
      type: 'select-single',
      value: '选择日期类型',
      options: ['单日期', '日期范围'],
      parent: 'componentConfig',
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
  ],
  Upload: [
    { ...commonProps[0] },
    { ...commonProps[1] },
    {
      field: 'caption',
      text: '文案信息',
      errorMessage: '请输入文案信息',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
    {
      field: 'acceptType',
      text: '接受文件类型',
      errorMessage: '请选择接受文件类型',
      required: false,
      // pattern: '/^[0-9]*[1-9][0-9]*$/i',
      type: 'select-multiple',
      value: [],
      options: [
        { text: 'jpg', field: '.jpg' },
        { text: 'png', field: '.png' },
        { text: 'doc', field: '.doc' },
      ],
      parent: 'componentConfig',
    },
    {
      field: 'actionURL',
      text: '上传地址',
      errorMessage: '请设置文件上传地址',
      required: true,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
  ],
  Picturewalls: [
    { ...commonProps[0] },
    { ...commonProps[1] },
    {
      field: 'caption',
      text: '文案信息',
      errorMessage: '请输入文案信息',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
    {
      field: 'acceptType',
      text: '接受文件类型',
      errorMessage: '请选择接受文件类型',
      required: false,
      // pattern: '/^[0-9]*[1-9][0-9]*$/i',
      type: 'select-multiple',
      value: [],
      options: [
        { text: 'jpg', field: '.jpg' },
        { text: 'png', field: '.png' },
        { text: 'doc', field: '.doc' },
      ],
      parent: 'componentConfig',
    },
    {
      field: 'actionURL',
      text: '上传地址',
      errorMessage: '请设置文件上传地址',
      required: true,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
  ],
  DynamicList: [
    {
      field: mapSettings.propertyID,
      text: '绑定ID',
      errorMessage: '请选择组件ID',
      required: false,
      type: 'select-single',
      value: '',
      options: [],
    },
    {
      field: 'sectionName',
      text: 'Panel 命名',
      required: false,
      type: 'char',
      value: '',
    },
  ],
  Discount: [
    { ...commonProps[0] },
    {
      field: 'originalValue',
      text: '原价',
      errorMessage: '请选择关联原始ID',
      required: false,
      type: 'select-single',
      value: '',
      options: [],
      parent: 'componentConfig',
    },
    {
      field: 'targetValue',
      text: '现价',
      errorMessage: '请选择关联当前ID',
      required: false,
      type: 'select-single',
      value: '',
      options: [],
      parent: 'componentConfig',
    },
    {
      ...commonProps[5],
    },
    {
      ...commonProps[6],
    },
  ],
  Tabs: [
    {
      ...commonProps[0],
    },
    {
      ...commonProps[1],
    },
    {
      field: mapSettings.radioOrCheckboxNum,
      text: 'tab数量',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
  ],
  DynamicSearch: [
    { ...commonProps[0] },
    { ...commonProps[1] },
    { ...commonProps[3] },
    {
      field: 'brandInfoUrl',
      text: '品牌信息API',
      errorMessage: '请输入查询品牌信息API',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
    { ...commonProps[5] },
    { ...commonProps[6] },
  ],
};

/**
 * 配置杂项和一些配置常量
 */
const miscellaneous = {
  formItemLayout: {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  },
  buttonAction: {
    field: 'buttonAction',
    text: '配置API',
    errorMessage: '请设置按钮动作URL',
    required: false,
    type: 'char',
    value: '',
    parent: 'componentConfig',
  },
  childrenNum: {
    field: mapSettings.radioOrCheckboxNum,
    text: '单选项数目',
    errorMessage: '请输入单选项数目',
    required: false,
    type: 'char',
    value: '1',
    parent: 'componentConfig',
  },
  dataSource: {
    field: 'dataSource',
    text: '设置数据源',
    errorMessage: '请设置数据源',
    required: false,
    type: 'char',
    value: '',
    parent: 'componentConfig',
  },
  radioOrCheckboxItem: [
    {
      field: 'label0',
      text: '',
      errorMessage: '请输入标签名称',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
    {
      field: 'value0',
      text: '',
      errorMessage: '请输入选项值',
      required: false,
      type: 'char',
      value: '',
      parent: 'componentConfig',
    },
  ],
  mockOptionItem: '请选择',
  dataSourceType: 'isSetDataSource',
  buttonType: 'buttonType',
  formItemConfig: 'formItemConfig',
  componentConfig: 'componentConfig',
};

export { mapSettings, componentProps, miscellaneous };
