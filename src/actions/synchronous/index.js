import * as config from './config';
import * as auth from './auth';
import * as quote from './quote';

const actions = Object.assign({},
  config,
  auth,
  quote
);

export default actions;
