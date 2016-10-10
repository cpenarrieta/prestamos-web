import xr from 'xr';
import sync from '../synchronous';
import persistAuthToken from './persistAuthToken';
import { browserHistory } from 'react-router';

export default function signin(user, nextPath) {
  return (dispatch, getState) => {
    const { apiUrl } = getState().config;
    const url = `${apiUrl}/auth/signin/`;

    dispatch(sync.submitLogin());

    xr.post(url, user)
      .then(
        (response) => {
          const token = response.data.token;
          const userReceived = response.data.user;
          dispatch(sync.receiveUser(userReceived));
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
