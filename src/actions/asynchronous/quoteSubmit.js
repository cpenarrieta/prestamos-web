import xr from 'xr';
import Cookies from 'js-cookie';
import sync from '../synchronous';

export default function quoteSubmit(request) {
  return (dispatch, getState) => {
    const { apiUrl } = getState().config;
    const url = `${apiUrl}/api/quotes`;
    const { token } = Cookies.getJSON('auth') || {};
    const headers = Object.assign({'Authorization': `Bearer ${token}`}, xr.defaults.headers);

    dispatch(sync.startQuoteSubmit());

    xr.post(url, request, { headers })
      .then(
        (response) => {
          dispatch(sync.doneQuoteSubmit(response.data));
        },
        (errorResponse) => {
          const { status, response } = errorResponse;
          dispatch(sync.authError(status, response));
        }
      );
  }
}
