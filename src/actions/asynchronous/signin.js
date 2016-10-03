import xr from 'xr';
import sync from '../synchronous';
import persistAuthToken from './persistAuthToken';
import { browserHistory } from 'react-router';

export default function signin(username, password, nextPath) {
  return (dispatch, getState) => {
    const { apiUrl } = getState().config;
    const url = `${apiUrl}/auth/signin/`;

    dispatch(sync.submitLogin());

    xr.post(url, { username, password })
      .then(
        (response) => {
          const token = response.data.token;
          const user = response.data.user;
          dispatch(sync.receiveUser(user));
          dispatch(persistAuthToken(token));
          browserHistory.push(nextPath || '/');
        },
        (errorResponse) => {
          const { status, response } = errorResponse;
          dispatch(sync.authError(status, response));
        }
      );
  }
}
