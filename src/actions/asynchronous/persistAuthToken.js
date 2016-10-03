import Cookies from 'js-cookie';

export default function persistAuthToken(token) {
  return () => {
    Cookies.set('auth', { token });
  };
}
