import React from 'react';
import { Router, browserHistory, IndexRedirect, Route } from 'react-router';
import App from './containers/layouts/App';
import QuoteViewContainer from './containers/QuoteViewContainer';
import FinishQuoteViewContainer from './containers/FinishQuoteViewContainer';
import LoginContainer from './containers/LoginContainer';
import BankLoginContainer from './containers/BankLoginContainer';
import BankDashbordContainer from './containers/BankDashbordContainer';

function requireAuth(nextState, replace, store) {
  const { dni } = store.getState().auth.currentUser || {};
  if (!dni) {
    replace({
      pathname: '/register',
      state: { nextPathName: nextState.location.pathname },
    });
  }
}

function requireAdminAuth(nextState, replace, store) {
  const { bankId } = store.getState().auth.bankUser || {};
  if (!bankId) {
    replace({
      pathname: '/login-bancos',
      state: { nextPathName: nextState.location.pathname },
    });
  }
}

function redirectIfLoggedIn(replace, store) {
  const { dni } = store.getState().auth.currentUser || {};
  if (dni) {
    replace({ pathname: '/' });
  }
}

function redirectBankIfLoggedIn(replace, store) {
  const { bankId } = store.getState().auth.bankUser || {};
  if (bankId) {
    replace({ pathname: '/acceso-bancos' });
  }
}

function redirectIfNull(replace, store) {
  const finishResults = store.getState().quote.finishResults;
  if (!finishResults) {
    replace({ pathname: '/' });
  }
}

function routes(store) {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={App} store={store} onEnter={(nextState, replace) => requireAuth(nextState, replace, store)} >
        <IndexRedirect to="/cotizacion" />
        <Route path="/cotizacion" component={QuoteViewContainer} />
        <Route path="/done-cotizacion" component={FinishQuoteViewContainer} onEnter={(nextState, replace) => redirectIfNull(replace, store) } />
      </Route>
      <Route path="/register" component={LoginContainer} onEnter={(nextState, replace) => redirectIfLoggedIn(replace, store) }/>
      <Route path="/acceso-bancos" component={BankDashbordContainer} store={store} onEnter={(nextState, replace) => requireAdminAuth(nextState, replace, store)} />
      <Route path="/login-bancos" component={BankLoginContainer} onEnter={(nextState, replace) => redirectBankIfLoggedIn(replace, store) } />
    </Router>
  );
}

export default routes;
