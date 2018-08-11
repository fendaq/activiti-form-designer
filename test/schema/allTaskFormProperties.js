export default [
  {
    formPropertyVO: [
      {
        id: 'commercialId',
        name: '商户编号',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'commercialId',
          componentType: 'Input',
          label: '商户编号',
          sectionName: '基础资料',
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
      },
      {
        id: 'commercialName',
        name: '商户名称',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'commercialName',
          componentType: 'Input',
          label: '商户名称',
          sectionName: '基础资料',
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
      },
      {
        id: 'brandName',
        name: '品牌名称',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'brandName',
          componentType: 'Input',
          label: '品牌名称',
          sectionName: '基础资料',
          grid: {
            order: 3,
            span: 12,
            row: 2,
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
                order: 3,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'businessConsultant',
        name: '业务顾问',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'businessConsultant',
          componentType: 'Input',
          label: '业务顾问',
          sectionName: '基础资料',
          grid: {
            order: 4,
            span: 12,
            row: 2,
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
                order: 4,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'businessConsultantPhone',
        name: '业务顾问电话',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'businessConsultantPhone',
          componentType: 'Input',
          label: '业务顾问电话',
          sectionName: '基础资料',
          grid: {
            order: 5,
            span: 12,
            row: 3,
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
                order: 5,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'businessContacts',
        name: '商户联系人',
        readable: true,
        required: false,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'businessContacts',
          componentType: 'Input',
          label: '商户联系人',
          sectionName: '基础资料',
          grid: {
            order: 6,
            span: 12,
            row: 3,
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
                order: 6,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'commercialAddress',
        name: '详细地址',
        readable: true,
        required: false,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'commercialAddress',
          componentType: 'Input',
          label: '详细地址',
          sectionName: '基础资料',
          grid: {
            order: 7,
            span: 12,
            row: 1,
            col: 1,
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
      },
      {
        id: 'contractWay',
        name: '联系方式',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'contractWay',
          componentType: 'Input',
          label: '联系方式',
          sectionName: '基础资料',
          grid: {
            order: 8,
            span: 12,
            row: 1,
            col: 2,
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
      },
      {
        id: 'serviceConsultant',
        name: '服务顾问',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceConsultant',
          componentType: 'Input',
          label: '服务顾问',
          sectionName: null,
          grid: {
            order: 9,
            span: 8,
            row: 1,
            col: 1,
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
      },
      {
        id: 'serviceConsultantPhone',
        name: '服务顾问电话',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceConsultantPhone',
          componentType: 'Input',
          label: '服务顾问电话',
          sectionName: null,
          grid: {
            order: 10,
            span: 8,
            row: 1,
            col: 2,
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
      },
      {
        id: 'serviceType',
        name: '服务类型',
        readable: true,
        required: true,
        type: 'enum',
        writable: true,
        extend: {
          componentID: 'serviceType',
          componentType: 'Input',
          label: '服务类型',
          sectionName: null,
          grid: {
            order: 11,
            span: 8,
            row: 1,
            col: 3,
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
      },
      {
        id: 'serviceStartDate',
        name: '合约日期',
        readable: true,
        required: true,
        type: 'date',
        writable: true,
        extend: {
          componentID: 'serviceStartDate',
          componentType: 'Input',
          label: '合约日期',
          sectionName: null,
          grid: {
            order: 12,
            span: 8,
            row: 2,
            col: 1,
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
      },
      {
        id: 'serviceEndDate',
        name: '合约日期',
        readable: true,
        required: true,
        type: 'date',
        writable: true,
        extend: {
          componentID: 'serviceEndDate',
          componentType: 'Input',
          label: '合约日期',
          sectionName: null,
          grid: {
            order: 13,
            span: 8,
            row: 2,
            col: 2,
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
      },
      {
        id: 'serviceTimes',
        name: '服务次数',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceTimes',
          componentType: 'Input',
          label: '服务次数',
          sectionName: null,
          grid: {
            order: 14,
            span: 8,
            row: 2,
            col: 3,
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
      },
      {
        id: 'serviceConfirmFiles',
        name: '服务确认单',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceConfirmFiles',
          componentType: 'Input',
          label: '服务确认单',
          sectionName: null,
          grid: {
            order: 15,
            span: 12,
            row: 1,
            col: 1,
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
      },
      {
        id: 'letterOfCommitment',
        name: '承诺书',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'letterOfCommitment',
          componentType: 'Input',
          label: '承诺书',
          sectionName: null,
          grid: {
            order: 16,
            span: 12,
            row: 1,
            col: 2,
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
      },
    ],
    taskKey: 'usertask1',
    taskName: '创建营销服务工单1',
  },
  {
    formPropertyVO: [
      {
        id: 'commercialId',
        name: '商户编号',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'commercialId',
          componentType: 'Input',
          label: '商户编号',
          sectionName: '基础资料',
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
      },
      {
        id: 'commercialName',
        name: '商户名称',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'commercialName',
          componentType: 'Input',
          label: '商户名称',
          sectionName: '基础资料',
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
      },
      {
        id: 'brandName',
        name: '品牌名称',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'brandName',
          componentType: 'Input',
          label: '品牌名称',
          sectionName: '基础资料',
          grid: {
            order: 3,
            span: 12,
            row: 2,
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
                order: 3,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'businessConsultant',
        name: '业务顾问',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'businessConsultant',
          componentType: 'Input',
          label: '业务顾问',
          sectionName: '基础资料',
          grid: {
            order: 4,
            span: 12,
            row: 2,
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
                order: 4,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'businessConsultantPhone',
        name: '业务顾问电话',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'businessConsultantPhone',
          componentType: 'Input',
          label: '业务顾问电话',
          sectionName: '基础资料',
          grid: {
            order: 5,
            span: 12,
            row: 3,
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
                order: 5,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'businessContacts',
        name: '商户联系人',
        readable: true,
        required: false,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'businessContacts',
          componentType: 'Input',
          label: '商户联系人',
          sectionName: '基础资料',
          grid: {
            order: 6,
            span: 12,
            row: 3,
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
                order: 6,
                type: 'Input',
              },
            ],
          },
        },
      },
      {
        id: 'commercialAddress',
        name: '详细地址',
        readable: true,
        required: false,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'commercialAddress',
          componentType: 'Input',
          label: '详细地址',
          sectionName: '基础资料',
          grid: {
            order: 7,
            span: 12,
            row: 1,
            col: 1,
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
      },
      {
        id: 'contractWay',
        name: '联系方式',
        readable: true,
        required: true,
        type: 'string',
        writable: false,
        extend: {
          componentID: 'contractWay',
          componentType: 'Input',
          label: '联系方式',
          sectionName: '基础资料',
          grid: {
            order: 8,
            span: 12,
            row: 1,
            col: 2,
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
      },
      {
        id: 'serviceConsultant',
        name: '服务顾问',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceConsultant',
          componentType: 'Input',
          label: '服务顾问',
          sectionName: null,
          grid: {
            order: 9,
            span: 8,
            row: 1,
            col: 1,
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
      },
      {
        id: 'serviceConsultantPhone',
        name: '服务顾问电话',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceConsultantPhone',
          componentType: 'Input',
          label: '服务顾问电话',
          sectionName: null,
          grid: {
            order: 10,
            span: 8,
            row: 1,
            col: 2,
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
      },
      {
        id: 'serviceType',
        name: '服务类型',
        readable: true,
        required: true,
        type: 'enum',
        writable: true,
        extend: {
          componentID: 'serviceType',
          componentType: 'Input',
          label: '服务类型',
          sectionName: null,
          grid: {
            order: 11,
            span: 8,
            row: 1,
            col: 3,
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
      },
      {
        id: 'serviceStartDate',
        name: '合约日期',
        readable: true,
        required: true,
        type: 'date',
        writable: true,
        extend: {
          componentID: 'serviceStartDate',
          componentType: 'Input',
          label: '合约日期',
          sectionName: null,
          grid: {
            order: 12,
            span: 8,
            row: 2,
            col: 1,
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
      },
      {
        id: 'serviceEndDate',
        name: '合约日期',
        readable: true,
        required: true,
        type: 'date',
        writable: true,
        extend: {
          componentID: 'serviceEndDate',
          componentType: 'Input',
          label: '合约日期',
          sectionName: null,
          grid: {
            order: 13,
            span: 8,
            row: 2,
            col: 2,
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
      },
      {
        id: 'serviceTimes',
        name: '服务次数',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceTimes',
          componentType: 'Input',
          label: '服务次数',
          sectionName: null,
          grid: {
            order: 14,
            span: 8,
            row: 2,
            col: 3,
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
      },
      {
        id: 'serviceConfirmFiles',
        name: '服务确认单',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'serviceConfirmFiles',
          componentType: 'Input',
          label: '服务确认单',
          sectionName: null,
          grid: {
            order: 15,
            span: 12,
            row: 1,
            col: 1,
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
      },
      {
        id: 'letterOfCommitment',
        name: '承诺书',
        readable: true,
        required: true,
        type: 'string',
        writable: true,
        extend: {
          componentID: 'letterOfCommitment',
          componentType: 'Input',
          label: '承诺书',
          sectionName: null,
          grid: {
            order: 16,
            span: 12,
            row: 1,
            col: 2,
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
      },
      {
        id: 'dynamicListTest',
        name: '动态组件测试',
        readable: true,
        required: true,
        type: 'list',
        writable: true,
        extend: {
          componentID: 'dynamicListTest',
          componentType: 'DynamicList',
          label: '动态组件测试',
          sectionName: null,
          grid: {
            order: 17,
            span: 24,
            row: 1,
            col: 1,
            chain: [
              {
                order: 4,
                type: 'Column',
              },
              {
                order: 1,
                type: 'DynamicList',
              },
            ],
          },
        },
        items: [
          {
            id: 'serviceName',
            name: '服务名称',
            readable: true,
            required: true,
            type: 'string',
            writable: false,
            extend: {
              componentID: 'serviceName',
              componentType: 'Input',
              label: '服务名称',
              sectionName: null,
              grid: {
                order: 18,
                span: 12,
                row: 1,
                col: 1,
                chain: [
                  {
                    order: 4,
                    type: 'Column',
                  },
                  {
                    order: 1,
                    type: 'DynamicList',
                  },
                  {
                    order: 1,
                    type: 'Column',
                  },
                  {
                    order: 1,
                    type: 'Input',
                  },
                ],
              },
            },
          },
          {
            id: 'serviceNumber',
            name: '服务次数',
            readable: true,
            required: true,
            type: 'string',
            writable: false,
            extend: {
              componentID: 'serviceNumber',
              componentType: 'Input',
              label: '服务次数',
              sectionName: null,
              grid: {
                order: 19,
                span: 12,
                row: 1,
                col: 2,
                chain: [
                  {
                    order: 4,
                    type: 'Column',
                  },
                  {
                    order: 1,
                    type: 'DynamicList',
                  },
                  {
                    order: 1,
                    type: 'Column',
                  },
                  {
                    order: 2,
                    type: 'Input',
                  },
                ],
              },
            },
          },
        ],
      },
    ],
    taskKey: 'usertask2',
    taskName: '创建营销服务工单2',
  },
];
