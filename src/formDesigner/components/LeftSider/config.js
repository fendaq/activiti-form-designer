/**
 * desc: 组件列表数据定义，分基础组件，复合组件，业务组件；
 */

module.exports = [
  {
    id: 'layout',
    name: '布局组件',
    icon: 'desktop',
    components: [
      {
        id: 'layout-1',
        type: 'Panel',
        isLayout: true,
        name: 'Panel 区块',
      },
      {
        id: 'layout-2',
        type: 'Grid',
        grid: { row: 3, col: 2 },
        isLayout: true,
        name: 'Grid 栅格',
      },
      {
        id: 'layout-3',
        type: 'Column',
        grid: { row: 1, col: 1 },
        isLayout: true,
        name: 'Column 块级行',
      },
    ],
  },
  {
    id: 'base',
    name: '基础组件',
    icon: 'setting',
    components: [
      {
        id: 'base-1',
        type: 'Button',
        name: 'Button 按钮',
      },
      {
        id: 'base-2',
        type: 'Input',
        name: 'Input 输入框',
      },
      {
        id: 'base-3',
        type: 'Select',
        name: 'Select 下拉框',
      },
      {
        id: 'base-4',
        type: 'Textarea',
        name: 'Textarea 文本框',
      },
      {
        id: 'base-5',
        type: 'Radio',
        name: 'Radio 单选框',
      },
      {
        id: 'base-6',
        type: 'Checkbox',
        name: 'Checkbox 复选框',
      },
    ],
  },

  {
    id: 'complex',
    name: '复合组件',
    icon: 'table',
    components: [
      {
        id: 'complex-1',
        type: 'Datepicker',
        name: 'Datepicker 日期',
      },
      {
        id: 'complex-2',
        type: 'Upload',
        name: 'Upload 上传',
      },
      {
        id: 'complex-3',
        type: 'Picturewalls',
        name: '照片墙 上传',
      },

      {
        id: 'complex-4',
        type: 'DynamicList',
        name: 'Dynamic List',
      },
      {
        id: 'complex-5',
        type: 'DynamicSearch',
        name: 'Dynamic search',
      },
      {
        id: 'complex-6',
        type: 'Tabs',
        name: 'Tabs 标签页',
      },
    ],
  },
  {
    id: 'business',
    name: '业务组件',
    icon: 'api',
    components: [
      {
        id: 'business-1',
        type: 'Discount',
        name: 'Discount 折扣率',
      },
    ],
  },
  {
    id: 'customized',
    name: '自定义组件',
    icon: 'tool',
    components: [],
  },
];
