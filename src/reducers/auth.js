import {
  SUBMIT_LOGIN,
  RECEIVE_USER,
  AUTH_ERROR,
  SET_USERNAME,
  SET_PASSWORD,
} from '../actions/synchronous/auth';

const initialState = {
  token: null,
  username: "",
  password: "",
  currentUser: {},
  submitting: false
}

function auth(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      return Object.assign({}, state, { submitting: true });
    }
    case RECEIVE_USER: {
      return Object.assign({}, state, { currentUser: action.user, submitting: false, username: "", password: "" });
    }
    case AUTH_ERROR: {
      return Object.assign({}, state, { submitting: false, username: "", password: "" });
    }
    case SET_USERNAME: {
      return Object.assign({}, state, { username: action.username });
    }
    case SET_PASSWORD: {
      return Object.assign({}, state, { password: action.password });
    }
    default:
      return state;
  }
}

export default auth;
