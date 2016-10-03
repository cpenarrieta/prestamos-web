import { RECEIVE_CONFIG } from '../actions/synchronous/config';

const initialState = {};

function config(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CONFIG:
      return Object.assign({}, state, action.config);
    default:
      return state;
  }
}

export default config;
