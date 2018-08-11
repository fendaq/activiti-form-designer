import React from 'react';
import { connect } from 'react-redux';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';
import { Layout, Popconfirm, Button, message } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';
import createFormDataUtil from '../../../shared/utils/createFormData';
import parseFormActivitiUtil from '../../../shared/utils/parseFormActiviti';
import pasteLayoutTreeUtil from '../../../shared/utils/pasteLayoutTree';
import SelectWithConfirm from './SelectWithConfirm';
import {
  getProcessTypes,
  selectProcessType,
  selectProcessDefinition,
  selectProcessTask,
  setSwitchCount,
  copyLayoutTree,
  createFormProperty,
  setActiveComponent,
  setLayoutTree,
} from '../../actions';
import API from '../../apis';

import './index.less';

const { Header } = Layout;

class FormDesignerHeader extends BaseComponent {
  state = {
    isEidtting: false,
    isSaving: false,
    resetConfirmVisible: false,
  };

  componentDidMount() {
    this.props.getProcessTypes();
  }

  componentWillReceiveProps(nextProps) {
    // taskFormProperty改变，重新创建formProperty和layoutTree
    if (!shallowEqualImmutable(this.props.taskFormProperty, nextProps.taskFormProperty)) {
      this.createFormData(nextProps.taskFormProperty);
    }

    // 当不处在编辑状态，并且没有重新获取数据，layoutTree发生改变时，置为编辑状态
    if (
      !this.state.isEidtting &&
      this.props.switchCount === nextProps.switchCount &&
      !shallowEqualImmutable(this.props.layoutTree, nextProps.layoutTree)
    ) {
      this.setIsEditting(true);
    }
  }

  createFormData = taskFormProperty => {
    const { formPropertyVO } = taskFormProperty.toJS();
    const { formProperty, formExtend: layoutTree } = createFormDataUtil(formPropertyVO);

    this.props.createFormProperty(formProperty);
    this.props.setLayoutTree(layoutTree);
    this.props.setSwitchCount();
  };

  setIsEditting = isEidtting => {
    this.setState({
      isEidtting,
    });
  };

  handleCopy = () => {
    const { layoutTreeCopy, layoutTree } = this.props;

    // 已复制过
    if (shallowEqualImmutable(layoutTreeCopy, layoutTree)) {
      message.info('当前内容已被复制');
      return;
    }

    this.props.copyLayoutTree(layoutTree);

    message.success('复制成功');
  };

  handlePaste = () => {
    const { formProperty, layoutTreeCopy, layoutTree } = this.props;

    if (layoutTree.size > 0) {
      message.warn('当前流程已经存在表单，无法粘贴');
      return;
    }

    const { layoutTree: newLayoutTree, formProperty: newFormProperty } = pasteLayoutTreeUtil(
      layoutTreeCopy.toJS(),
      formProperty.toJS()
    );

    if (newLayoutTree.size <= 0) {
      message.warn('当前流程与复制数据源中无匹配的formProperty，无法粘贴');
      return;
    }

    this.props.createFormProperty(newFormProperty);
    this.props.setLayoutTree(newLayoutTree);
  };

  handleReset = () => {
    this.setState({
      resetConfirmVisible: true,
    });
  };

  handleResetConfirm = () => {
    this.props.setActiveComponent({});
    this.createFormData(this.props.taskFormProperty);
    this.setIsEditting(false);
    this.setState({
      resetConfirmVisible: false,
    });
  };

  handleResetCancel = () => {
    this.setState({
      resetConfirmVisible: false,
    });
  };

  handleSave = () => {
    if (this.state.isSaving) return;

    this.setState({
      isSaving: true,
    });

    const {
      selectedProcessDefinition,
      selectedProcessTasks,
      formProperty,
      layoutTree,
    } = this.props;

    if (formProperty.some(item => !item.get('formExtendID'))) {
      this.setState({
        isSaving: false,
      });
      message.warn('需要绑定完所有formProperty才能提交');
      return;
    }

    const formActiviti = parseFormActivitiUtil(layoutTree.toJS(), {
      processDefinitionId: selectedProcessDefinition,
      taskKey: selectedProcessTasks,
    });

    API.saveFormExtend(formActiviti)
      .then(res => {
        if (res.code === 0) {
          this.setState({
            isEidtting: false,
            isSaving: false,
          });

          message.success('保存成功！');
        }
      })
      .catch(err => {
        message.error(JSON.stringify(err));
      });
  };

  render() {
    const {
      processTypes,
      processDefinitions,
      allTaskFormProperties,
      selectedProcessType,
      selectedProcessDefinition,
      selectedProcessTasks,
      layoutTreeCopy,
      layoutTree,
    } = this.props;
    const { isEidtting, isSaving, resetConfirmVisible } = this.state;

    const canCopy = layoutTree.size > 0;
    const canPaste = layoutTreeCopy.size > 0;

    return (
      <Header className="form-designer__header">
        <div className="header__select-group">
          <div className="header__select">
            <SelectWithConfirm
              name="工单"
              dataList={processTypes}
              dataKey="key"
              dataValue="name"
              selected={selectedProcessType}
              isEidtting={isEidtting}
              onSelect={this.props.selectProcessType}
              setIsEditting={this.setIsEditting}
            />
          </div>

          <div className="header__select">
            <SelectWithConfirm
              name="版本"
              dataList={processDefinitions}
              dataKey="id"
              dataValue="version"
              selected={selectedProcessDefinition}
              isEidtting={isEidtting}
              onSelect={this.props.selectProcessDefinition}
              setIsEditting={this.setIsEditting}
            />
          </div>

          <div className="header__select">
            <SelectWithConfirm
              name="流程"
              dataList={allTaskFormProperties}
              dataKey="taskKey"
              dataValue="taskName"
              selected={selectedProcessTasks}
              isEidtting={isEidtting}
              onSelect={this.props.selectProcessTask}
              setIsEditting={this.setIsEditting}
            />
          </div>
        </div>

        <div className="header__btn-group">
          <Button className="header__btn" onClick={this.handleCopy} disabled={!canCopy}>
            复制
          </Button>

          <Button className="header__btn" onClick={this.handlePaste} disabled={!canPaste}>
            粘贴
          </Button>

          <Popconfirm
            title="撤销将返回到原始状态，当前的修改将丢失，是否确定撤销"
            okText="确定"
            cancelText="取消"
            visible={resetConfirmVisible}
            onConfirm={this.handleResetConfirm}
            onCancel={this.handleResetCancel}
          >
            <Button className="header__btn" onClick={this.handleReset} disabled={!isEidtting}>
              撤销
            </Button>
          </Popconfirm>

          <Button
            type="primary"
            className="header__btn"
            onClick={this.handleSave}
            disabled={!isEidtting}
            loading={isSaving}
          >
            保存
          </Button>
        </div>
      </Header>
    );
  }
}

export default connect(
  state => ({
    processTypes: state.formProcess.get('processTypes'),
    processDefinitions: state.formProcess.get('processDefinitions'),
    allTaskFormProperties: state.formProcess.get('allTaskFormProperties'),
    taskFormProperty: state.formProcess.get('taskFormProperty'),
    selectedProcessType: state.formProcess.get('selectedProcessType'),
    selectedProcessDefinition: state.formProcess.get('selectedProcessDefinition'),
    selectedProcessTasks: state.formProcess.get('selectedProcessTasks'),
    switchCount: state.formProcess.get('switchCount'),
    layoutTreeCopy: state.formProcess.get('layoutTreeCopy'),
    formProperty: state.formProperty.get('formProperty'),
    layoutTree: state.formExtend.get('layoutTree'),
  }),
  {
    getProcessTypes,
    selectProcessType,
    selectProcessDefinition,
    selectProcessTask,
    setSwitchCount,
    copyLayoutTree,
    createFormProperty,
    setActiveComponent,
    setLayoutTree,
  }
)(FormDesignerHeader);
