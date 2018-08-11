import React from 'react';
import { Form, Input, Select, Popconfirm } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';
import HandleLayoutTree from '../../../shared/utils/handleLayoutTree';
import propsFieldsGenerator from '../../../shared/utils/createPropsFields.js';
import { componentProps, mapSettings, miscellaneous } from '../../consts/componentProps.js';

const FormItem = Form.Item;
const { Option } = Select;

const notFoundContent = '列表为空';
const okText = '确定';
const cancelText = '取消';

export default class BasedPropsEditor extends BaseComponent {
  constructor(props) {
    super(props);
    this.willSelectedValue = '';
    this.state = {
      visible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { resetFields } = nextProps.form;
    const { activeComponent, setLastComponetId, lastComponentId } = nextProps;
    const componentId = activeComponent.get('id');
    if (lastComponentId !== componentId) {
      setLastComponetId(componentId);
      resetFields();
    }
  }

  /**
   * 属性编辑器中选择列表类表单域的动作
   * value表示form格式表单域的值
   * field表示form格式表单域的域名
   */
  handleChange = (value, field) => {
    const { setFieldsValue, resetFields } = this.props.form;
    const { formProperty } = this.props;
    this.willSelectedValue = value;

    if (field !== mapSettings.propertyID) {
      setFieldsValue({
        [field]: value,
      });
    } else {
      // 下面代码逻辑用于判断待绑定formID是否被其他组件绑定
      let isBinded = false;
      const formItems = formProperty.toJS();

      // 判断formItems中当前组件selected的formID已经被其他组件绑定
      formItems.forEach(item => {
        if (item.id === value && item.formExtendID) {
          isBinded = true;
        }
      });

      // 如果被其他组件绑定，则弹出提示框处理是否解绑和重新绑定逻辑
      if (isBinded) {
        this.setState({
          visible: true,
        });
      } else {
        resetFields();
        setFieldsValue({
          [field]: value,
        });
      }
    }
  };

  /**
   * 如果强制绑定已经被其他组件绑定的formID，则需要先解绑其他组件的绑定，然后再设置
   */
  handleConfirm = field => {
    const { setFieldsValue } = this.props.form;
    const { unbindFormExtendId } = this.props;

    // 解除formProperty列表中具有相同value的formExtendID的绑定
    unbindFormExtendId({
      [field]: this.willSelectedValue,
    });

    // 设置当前组件新的propertyID 值
    setFieldsValue({
      [field]: this.willSelectedValue,
    });

    this.setState({
      visible: false,
    });
  };

  /**
   * 如果取消存在冲突的绑定行为，则需要将该组件的propertyID重置为上一次的值
   */
  handleCancel = field => {
    const { setFieldsValue } = this.props.form;
    const { activeComponent, layoutTree } = this.props;

    // 先保存当前编辑组件之前设置的propertyID值
    const activeId = activeComponent.get('id');
    const previousValue = new HandleLayoutTree(layoutTree).getNode(activeId)[field];

    setFieldsValue({
      [field]: previousValue || miscellaneous.mockOptionItem,
    });

    this.setState({
      visible: false,
    });
  };

  /**
   * 根据属性配置字段类型生成不同的组件
   */
  switchItem = item => {
    const { type, value } = item;
    const isBindId = item.field === mapSettings.propertyID;
    const formPropertyItems = this.props.formProperty.toJS();
    switch (type) {
      case 'char':
        return <Input disabled={item.isDisabled} />;
      case 'select-single':
        return (
          <Popconfirm
            title="表单属性已经被其他组件绑定，请确认是否强制绑定该属性？"
            okText={okText}
            cancelText={cancelText}
            visible={isBindId ? this.state.visible : false}
            onConfirm={() => this.handleConfirm(item.field)}
            onCancel={() => this.handleCancel(item.field)}
          >
            <Select
              notFoundContent={notFoundContent}
              value={value || miscellaneous.mockOptionItem}
              onChange={localValue => this.handleChange(localValue, item.field)}
            >
              {item.options.map(option => {
                const formItem = formPropertyItems.filter(localItem => localItem.id === option);
                let color = '';
                if (formItem && formItem.length) {
                  color = formItem && formItem[0].formExtendID ? 'rgba(0, 0, 0, 0.25)' : '';
                }

                return (
                  <Option key={option} value={option} style={{ color }}>
                    {option}
                  </Option>
                );
              })}
            </Select>
          </Popconfirm>
        );
      case 'select-multiple':
        return (
          <Select mode="multiple">
            {item.options.map(option => (
              <Option key={option.field} value={option.field}>
                {option.text}
              </Option>
            ))}
          </Select>
        );
      default:
        return <Input />;
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { layoutTree, formProperty, activeComponent, customProperty = {} } = this.props;

    // 将自定义组件的配置注入到通用配置表中
    Object.keys(customProperty).forEach(key => {
      componentProps[key] = customProperty[key];
    });

    // 获得组件类型对应的原始属性列表
    const componentType = activeComponent.get('type');
    const componentId = activeComponent.get('id');
    const originProps = componentType && componentProps[componentType];

    // 获取当前待编辑组件在数据库的信息，并进行数据融合处理
    const layoutTreeHandler = new HandleLayoutTree(layoutTree);
    const currentEditComponent = layoutTreeHandler.getNode(componentId);
    const idList = (formProperty && formProperty.map(propsMap => propsMap.get('id'))).toJS() || [];

    const partialData = propsFieldsGenerator.mergePropsValue(originProps, currentEditComponent);
    const propertyData = propsFieldsGenerator.handlePropsByType(
      partialData,
      componentType,
      currentEditComponent,
      originProps
    );

    return propertyData ? (
      <Form>
        {propertyData.map(item => {
          const tempItem = { ...item };
          if (item.field === mapSettings.propertyID) {
            const fakeList = [miscellaneous.mockOptionItem].concat(idList);
            tempItem.options = fakeList;
          }

          mapSettings.discountSettings.forEach(discountItem => {
            if (item.field === discountItem) {
              const fakeList = [miscellaneous.mockOptionItem].concat(idList);
              tempItem.options = fakeList;
            }
          });

          return (
            <FormItem key={tempItem.field} label={tempItem.text} {...miscellaneous.formItemLayout}>
              {getFieldDecorator(tempItem.field, {
                initialValue: tempItem.value,
                rules: [
                  {
                    required: tempItem.required,
                    message: tempItem.errorMessage,
                  },
                ],
              })(this.switchItem(tempItem))}
            </FormItem>
          );
        })}
      </Form>
    ) : null;
  }
}
