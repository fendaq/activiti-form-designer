import FetchHelper from 'react-redux-lib/es/fetchHelper';

const { Consts, FetchRequest, FetchResponse } = FetchHelper;

// if the schema of response is not like
// { header: { code: xxx, message: xxx }, body: { ... } }
// you need to reset the response like below
FetchResponse.parseHeader = res => ({
  code: res.code,
  message: res.msg,
});

FetchResponse.parseBody = res => res.data;

export { Consts, FetchRequest };
