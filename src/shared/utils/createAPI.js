import createAPI from 'react-redux-lib/es/utils/createAPI';
import { FetchRequest } from './fetchHelper';

const createdAPI = createAPI(FetchRequest);

let baseUrl = '';

export function setBaseUrl(url) {
  baseUrl = url;
}

function createUrl(url) {
  return url ? `${baseUrl}/${url}` : baseUrl;
}

export default {
  get(url, params = {}, options = {}) {
    return createdAPI.get(createUrl(url), params, options);
  },

  post(url, params = {}, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
    };

    return createdAPI.post(createUrl(url), params, Object.assign({ headers }, options));
  },

  delete(url, params = {}, options = {}) {
    return createdAPI.delete(createUrl(url), params, options);
  },
};
