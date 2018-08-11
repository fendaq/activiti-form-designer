import parseFormActiviti from 'shared/utils/parseFormActiviti';
import formExtend from '../../schema/formExtend';

describe('shared/utils/createFormData', () => {
  it('parseFormActiviti should be a function', () => {
    expect(parseFormActiviti).toBeInstanceOf(Function);
  });

  it('parseFormActiviti should works fine', () => {
    const result = [
      {
        componentConfig: undefined,
        componentID: 'commercialId',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
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
              order: 1,
              type: 'Input',
            },
          ],
          col: 1,
          order: 1,
          row: 1,
          span: 12,
        },
        label: '商户编号',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'commercialId',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'commercialName',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
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
              order: 2,
              type: 'Input',
            },
          ],
          col: 2,
          order: 2,
          row: 1,
          span: 12,
        },
        label: '商户名称',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'commercialName',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'brandName',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
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
        label: '品牌名称',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'brandName',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'businessConsultant',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
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
              order: 4,
              type: 'Input',
            },
          ],
          col: 2,
          order: 4,
          row: 2,
          span: 12,
        },
        label: '业务顾问',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'businessConsultant',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'businessConsultantPhone',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
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
              order: 5,
              type: 'Input',
            },
          ],
          col: 1,
          order: 5,
          row: 3,
          span: 12,
        },
        label: '业务顾问电话',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'businessConsultantPhone',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'businessContacts',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
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
              order: 6,
              type: 'Input',
            },
          ],
          col: 2,
          order: 6,
          row: 3,
          span: 12,
        },
        label: '商户联系人',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'businessContacts',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'commercialAddress',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 1,
          order: 1,
          row: 1,
          span: 12,
        },
        label: '详细地址',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'commercialAddress',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'contractWay',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 2,
          order: 2,
          row: 1,
          span: 12,
        },
        label: '联系方式',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'contractWay',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceConsultant',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 1,
          order: 1,
          row: 1,
          span: 8,
        },
        label: '服务顾问',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceConsultant',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceConsultantPhone',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 2,
          order: 2,
          row: 1,
          span: 8,
        },
        label: '服务顾问电话',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceConsultantPhone',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceType',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 3,
          order: 3,
          row: 1,
          span: 8,
        },
        label: '服务类型',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceType',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceStartDate',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 1,
          order: 4,
          row: 2,
          span: 8,
        },
        label: '合约日期',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceStartDate',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceEndDate',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 2,
          order: 5,
          row: 2,
          span: 8,
        },
        label: '合约日期',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceEndDate',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceTimes',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 3,
          order: 6,
          row: 2,
          span: 8,
        },
        label: '服务次数',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceTimes',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'serviceConfirmFiles',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 1,
          order: 1,
          row: 1,
          span: 12,
        },
        label: '服务确认单',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'serviceConfirmFiles',
        sectionName: null,
        taskKey: undefined,
      },
      {
        componentConfig: undefined,
        componentID: 'letterOfCommitment',
        componentType: 'Input',
        defaultValue: undefined,
        formItemConfig: undefined,
        grid: {
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
          col: 2,
          order: 2,
          row: 1,
          span: 12,
        },
        label: '承诺书',
        patterns: undefined,
        placeholder: undefined,
        processDefinitionId: undefined,
        propertyKey: 'letterOfCommitment',
        sectionName: null,
        taskKey: undefined,
      },
    ];

    const parseResult = parseFormActiviti(formExtend).map(item => ({
      ...item,
      grid: JSON.parse(item.grid),
    }));

    expect(parseResult).toEqual(result);
  });
});
