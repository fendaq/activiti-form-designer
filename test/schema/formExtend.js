export default [
  {
    id: 17,
    parentId: 0,
    type: 'Panel',
    isLayout: true,
    sectionName: '基础资料',
    children: [
      {
        id: 18,
        parentId: 17,
        type: 'Grid',
        isLayout: true,
        row: 3,
        col: 2,
        sectionName: '基础资料',
        children: [
          {
            id: 1,
            parentId: 18,
            propertyID: 'commercialId',
            type: 'Input',
            label: '商户编号',
            grid: {
              order: 1,
              span: 12,
              row: 1,
              col: 1,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 1,
                  type: 'Grid',
                },
                {
                  order: 1,
                  type: 'Input',
                },
              ],
            },
          },
          {
            id: 2,
            parentId: 18,
            propertyID: 'commercialName',
            type: 'Input',
            label: '商户名称',
            grid: {
              order: 2,
              span: 12,
              row: 1,
              col: 2,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 1,
                  type: 'Grid',
                },
                {
                  order: 2,
                  type: 'Input',
                },
              ],
            },
          },
          {
            id: 3,
            label: '品牌名称',
            parentId: 18,
            patterns: undefined,
            placeholder: undefined,
            propertyID: 'brandName',
            row: null,
            type: 'Input',
            grid: {
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 1,
                  type: 'Grid',
                },
                {
                  order: 3,
                  type: 'Input',
                },
              ],
              col: 1,
              order: 3,
              row: 2,
              span: 12,
            },
          },
          {
            id: 4,
            label: '业务顾问',
            parentId: 18,
            propertyID: 'businessConsultant',
            type: 'Input',
            grid: {
              col: 2,
              order: 4,
              row: 2,
              span: 12,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 1,
                  type: 'Grid',
                },
                {
                  order: 4,
                  type: 'Input',
                },
              ],
            },
          },
          {
            id: 5,
            label: '业务顾问电话',
            parentId: 18,
            propertyID: 'businessConsultantPhone',
            type: 'Input',
            grid: {
              col: 1,
              order: 5,
              row: 3,
              span: 12,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 1,
                  type: 'Grid',
                },
                {
                  order: 5,
                  type: 'Input',
                },
              ],
            },
          },
          {
            id: 6,
            label: '商户联系人',
            parentId: 18,
            propertyID: 'businessContacts',
            type: 'Input',
            grid: {
              col: 2,
              order: 6,
              row: 3,
              span: 12,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 1,
                  type: 'Grid',
                },
                {
                  order: 6,
                  type: 'Input',
                },
              ],
            },
          },
        ],
      },
      {
        id: 19,
        parentId: 17,
        type: 'Column',
        isLayout: true,
        row: 1,
        col: 2,
        sectionName: '基础资料',
        children: [
          {
            id: 7,
            label: '详细地址',
            parentId: 19,
            propertyID: 'commercialAddress',
            type: 'Input',
            grid: {
              col: 1,
              order: 7,
              row: 1,
              span: 12,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 2,
                  type: 'Column',
                },
                {
                  order: 1,
                  type: 'Input',
                },
              ],
            },
          },
          {
            id: 8,
            label: '联系方式',
            parentId: 19,
            propertyID: 'contractWay',
            type: 'Input',
            grid: {
              col: 2,
              order: 8,
              row: 1,
              span: 12,
              chain: [
                {
                  order: 1,
                  type: 'Panel',
                },
                {
                  order: 2,
                  type: 'Column',
                },
                {
                  order: 2,
                  type: 'Input',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 20,
    parentId: 0,
    type: 'Grid',
    isLayout: true,
    row: 2,
    col: 3,
    sectionName: null,
    children: [
      {
        id: 9,
        label: '服务顾问',
        parentId: 20,
        propertyID: 'serviceConsultant',
        type: 'Input',
        grid: {
          col: 1,
          order: 9,
          row: 1,
          span: 8,
          chain: [
            {
              order: 2,
              type: 'Grid',
            },
            {
              order: 1,
              type: 'Input',
            },
          ],
        },
      },
      {
        id: 10,
        label: '服务顾问电话',
        parentId: 20,
        propertyID: 'serviceConsultantPhone',
        type: 'Input',
        grid: {
          col: 2,
          order: 10,
          row: 1,
          span: 8,
          chain: [
            {
              order: 2,
              type: 'Grid',
            },
            {
              order: 2,
              type: 'Input',
            },
          ],
        },
      },
      {
        id: 11,
        label: '服务类型',
        parentId: 20,
        propertyID: 'serviceType',
        type: 'Input',
        grid: {
          col: 3,
          order: 11,
          row: 1,
          span: 8,
          chain: [
            {
              order: 2,
              type: 'Grid',
            },
            {
              order: 3,
              type: 'Input',
            },
          ],
        },
      },
      {
        id: 12,
        label: '合约日期',
        parentId: 20,
        propertyID: 'serviceStartDate',
        type: 'Input',
        grid: {
          col: 1,
          order: 12,
          row: 2,
          span: 8,
          chain: [
            {
              order: 2,
              type: 'Grid',
            },
            {
              order: 4,
              type: 'Input',
            },
          ],
        },
      },
      {
        id: 13,
        label: '合约日期',
        parentId: 20,
        propertyID: 'serviceEndDate',
        type: 'Input',
        grid: {
          col: 2,
          order: 13,
          row: 2,
          span: 8,
          chain: [
            {
              order: 2,
              type: 'Grid',
            },
            {
              order: 5,
              type: 'Input',
            },
          ],
        },
      },
      {
        id: 14,
        label: '服务次数',
        parentId: 20,
        propertyID: 'serviceTimes',
        type: 'Input',
        grid: {
          col: 3,
          order: 14,
          row: 2,
          span: 8,
          chain: [
            {
              order: 2,
              type: 'Grid',
            },
            {
              order: 6,
              type: 'Input',
            },
          ],
        },
      },
    ],
  },
  {
    id: 21,
    parentId: 0,
    type: 'Column',
    isLayout: true,
    row: 1,
    col: 2,
    sectionName: null,
    children: [
      {
        id: 15,
        label: '服务确认单',
        parentId: 21,
        propertyID: 'serviceConfirmFiles',
        type: 'Input',
        grid: {
          col: 1,
          order: 15,
          row: 1,
          span: 12,
          chain: [
            {
              order: 3,
              type: 'Column',
            },
            {
              order: 1,
              type: 'Input',
            },
          ],
        },
      },
      {
        id: 16,
        label: '承诺书',
        parentId: 21,
        patterns: undefined,
        placeholder: undefined,
        propertyID: 'letterOfCommitment',
        row: null,
        type: 'Input',
        grid: {
          col: 2,
          order: 16,
          row: 1,
          span: 12,
          chain: [
            {
              order: 3,
              type: 'Column',
            },
            {
              order: 2,
              type: 'Input',
            },
          ],
        },
      },
    ],
  },
];
