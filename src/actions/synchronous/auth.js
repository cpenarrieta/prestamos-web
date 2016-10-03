export const SUBMIT_LOGIN = 'auth/SUBMIT_LOGIN';
export const RECEIVE_USER = 'auth/RECEIVE_USER';
export const AUTH_ERROR = 'auth/AUTH_ERROR';
export const SET_USERNAME = 'auth/SET_USERNAME';
export const SET_PASSWORD = 'auth/SET_PASSWORD';


export function submitLogin() {
  return { type: SUBMIT_LOGIN };
}

export function receiveUser(user) {
  return { type: RECEIVE_USER, user };
}

export function authError(status, error) {
  return { type: AUTH_ERROR, status, error };
}

export function setUsername(username) {
  return { type: SET_USERNAME, username };
}

export function setPassword(password) {
  return { type: SET_PASSWORD, password };
}
