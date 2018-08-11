import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ProcessManage from './components';
import store from './store';
import { setBaseUrl } from '../shared/utils/createAPI';

function ProcessManageEntry(props) {
  setBaseUrl(props.apiUrl);

  return (
    <Provider store={store}>
      <ProcessManage />
    </Provider>
  );
}

ProcessManageEntry.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};

export default ProcessManageEntry;
