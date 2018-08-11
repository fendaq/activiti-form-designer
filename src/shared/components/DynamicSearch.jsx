import React from 'react';
import { Select, Spin, Form } from 'antd';
import debounce from 'lodash/debounce';
import BaseComponent from './BaseComponent';

const { Option } = Select;
const FormItem = Form.Item;
const defaultFormItemConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class DynamicSearch extends BaseComponent {
  static defaultProps = {
    componentConfig: {
      brandInfoUrl: 'http://localhost:4000/shopInfo?name="海底捞"',
    },
    formItemConfig: defaultFormItemConfig,
  };

  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchData = debounce(this.fetchData, 800);
  }

  state = {
    data: [],
    inputValue: [],
    fetching: false,
  };

  fetchData = (value, dataUrl) => {
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });

    fetch(`${dataUrl}?name=${value}`)
      .then(response => response.json())
      .then(body => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  /**
   * value表示选择列表项
   * 根据value从返回的数据集中解析相应数据
   */
  handleSelect = value => {
    const { setDynamicSearchResult } = this.props;
    setDynamicSearchResult(value);
  };

  handleChange = inputValue => {
    this.setState({
      inputValue,
      data: [],
      fetching: false,
    });
  };

  render() {
    const {
      id,
      propertyID,
      label,
      type,
      placeholder,
      formItemConfig,
      componentConfig,
      form,
      value,
    } = this.props;
    const { getFieldDecorator } = form;
    const { brandInfoUrl } = componentConfig;
    const { fetching, data, inputValue } = this.state;

    return (
      <FormItem {...formItemConfig} label={`${label || type}:`}>
        {getFieldDecorator(propertyID || `${id}`, {
          initialValue: value,
        })(
          <Select
            mode="multiple"
            labelInValue
            value={inputValue}
            placeholder={placeholder}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            filterOption={false}
            onSearch={localValue => this.fetchData(localValue, brandInfoUrl)}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            style={{ width: '100%' }}
          >
            {data.map(d => <Option key={d.value}>{d.text}</Option>)}
          </Select>
        )}
      </FormItem>
    );
  }
}
