import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import FormDesigner from './components';
import store from './store';
import { setBaseUrl } from '../shared/utils/createAPI';

function FormDesignerEntry(props) {
  setBaseUrl(props.apiUrl);

  return (
    <Provider store={store}>
      <FormDesigner {...props} />
    </Provider>
  );
}

FormDesignerEntry.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};

export default FormDesignerEntry;
