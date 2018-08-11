import HandleLayoutTree from 'shared/utils/handleLayoutTree';
import layoutTree from '../../schema/layoutTree';

const _instance = new HandleLayoutTree(layoutTree);

describe('shared/utils/handleLayoutTree', () => {
  it('findNode should be a function', () => {
    expect(HandleLayoutTree.findNode).toBeInstanceOf(Function);
  });

  it('if node is exist, findNode method should return a layout node', () => {
    const result = {
      parentId: 2,
      grid: { row: 1, col: 1, parentType: 'Column', span: 24 },
      name: 'Input 输入框',
      dragType: 'layout',
      propertyID: 'commercialId',
      label: '商户编号',
      type: 'Input',
      id: 3,
    };

    expect(HandleLayoutTree.findNode(layoutTree, 3)).toEqual(result);
  });

  it('getNode should be a function', () => {
    expect(_instance.getNode).toBeInstanceOf(Function);
  });

  it('if node is exist, getNode method should return a layout node', () => {
    const result = {
      parentId: 2,
      grid: { row: 1, col: 1, parentType: 'Column', span: 24 },
      name: 'Input 输入框',
      dragType: 'layout',
      propertyID: 'commercialId',
      label: '商户编号',
      type: 'Input',
      id: 3,
    };

    expect(_instance.getNode(3)).toEqual(result);
  });

  it('If the node does not exist, getNode method should return NULL', () => {
    expect(_instance.getNode(99)).toBeNull();
  });

  it('update should be a function', () => {
    expect(_instance.update).toBeInstanceOf(Function);
  });

  it('update one node attribute, should be returned a new layout tree', () => {
    const result = [
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
                label: '品牌名称',
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

    expect(_instance.update(3, { label: '品牌名称' })).toEqual(result);
  });

  it('insert should be a function', () => {
    expect(_instance.insert).toBeInstanceOf(Function);
  });

  it('insert one node into layout tree, should be returned a new layout tree', () => {
    const newNode = {
      parentId: 2,
      grid: { row: 1, col: 1, parentType: 'Column', span: 24 },
      name: 'Input 输入框',
      dragType: 'layout',
      propertyID: 'address',
      label: '商户地址',
      type: 'Input',
      id: 5,
    };

    const result = [
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
                label: '品牌名称',
                type: 'Input',
                id: 3,
              },
              {
                parentId: 2,
                grid: { row: 1, col: 1, parentType: 'Column', span: 24 },
                name: 'Input 输入框',
                dragType: 'layout',
                propertyID: 'address',
                label: '商户地址',
                type: 'Input',
                id: 5,
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

    expect(_instance.insert(5, newNode)).toEqual(result);
  });

  it('delete should be a function', () => {
    expect(_instance.delete).toBeInstanceOf(Function);
  });

  it('delete one node, should be returned a new layout tree', () => {
    const result = [
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
                label: '品牌名称',
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

    expect(_instance.delete(5)).toEqual(result);
  });

  it('setGridProperty should be a function', () => {
    expect(_instance.setGridProperty).toBeInstanceOf(Function);
  });

  it('setGridProperty for node, should be returned a new grid attribute', () => {
    const node = {
      parentId: 2,
      grid: { row: 1, col: 1 },
      name: 'Input 输入框',
      dragType: 'layout',
      propertyID: 'commercialId',
      label: '电话',
      type: 'Input',
      id: 5,
    };

    const grid = { row: 1, col: 1, parentType: 'Column', span: 24 };

    expect(_instance.setGridProperty(node)).toEqual(grid);
  });

  it('if node is layout, should be return NULL', () => {
    const node = {
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
    };

    expect(_instance.setGridProperty(node)).toBeNull();
  });

  it('getAllLeafNodes should be a function', () => {
    expect(_instance.getAllLeafNodes).toBeInstanceOf(Function);
  });

  it('getAllLeafNodes should be return all business node', () => {
    const result = [
      {
        parentId: 2,
        grid: { row: 1, col: 1, parentType: 'Column', span: 24 },
        name: 'Input 输入框',
        dragType: 'layout',
        propertyID: 'commercialId',
        label: '品牌名称',
        type: 'Input',
        id: 3,
      },
    ];

    expect(_instance.getAllLeafNodes(1)).toEqual(result);
  });
});
