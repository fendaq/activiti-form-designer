export default [
  {
    id: 1,
    type: 'Panel',
    isLayout: true,
    name: 'Panel 区块',
    dragType: 'base-component',
    parentId: 0,
    children: [
      {
        parentId: 1,
        grid: { row: 1, col: 1 },
        name: 'Column 块级行',
        dragType: 'base-component',
        isLayout: true,
        type: 'Column',
        id: 2,
        children: [
          {
            parentId: 2,
            grid: { row: 1, col: 1, parentType: 'Column', span: 24 },
            name: 'Input 输入框',
            dragType: 'layout',
            propertyID: 'commercialId',
            label: '商户编号',
            type: 'Input',
            id: 3,
          },
        ],
      },
      {
        id: 4,
        type: 'Column',
        grid: { row: 1, col: 1 },
        isLayout: true,
        name: 'Column 块级行',
        dragType: 'base-component',
        parentId: 1,
      },
    ],
    sectionName: '服务工单',
  },
];
