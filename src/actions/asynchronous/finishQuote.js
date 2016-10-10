import xr from 'xr';
import Cookies from 'js-cookie';
import sync from '../synchronous';
import { browserHistory } from 'react-router';

export default function finishQuote(request) {
  return (dispatch, getState) => {
    const { apiUrl } = getState().config;
    const url = `${apiUrl}/api/quotes/finishQuote`;
    const { token } = Cookies.getJSON('auth') || {};
    const headers = Object.assign({'Authorization': `Bearer ${token}`}, xr.defaults.headers);

    dispatch(sync.startFinishQuote());

    xr.post(url, request, { headers })
      .then(
        (response) => {
          dispatch(sync.doneFinishQuote(response.data));
          browserHistory.push('/done-quote');
        },
        (errorResponse) => {
          const { status, response } = errorResponse;
          dispatch(sync.authError(status, response));
        }
      );
  }
}
