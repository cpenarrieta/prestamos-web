import * as config from './config';
import * as headerNav from './headerNav';
import * as auth from './auth';
import * as quote from './quote';

const actions = Object.assign({},
  config,
  headerNav,
  auth,
  quote
);

export default actions;
