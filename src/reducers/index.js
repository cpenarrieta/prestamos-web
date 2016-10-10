import { combineReducers } from 'redux';
import config from './config';
import headerNav from './headerNav';
import auth from './auth';
import quote from './quote';

const appReducer = combineReducers({
  config,
  headerNav,
  auth,
  quote
});

export default appReducer
