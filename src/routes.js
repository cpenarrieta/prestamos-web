import React from 'react';
import { Router, browserHistory, IndexRedirect, Route } from 'react-router';
import App from './containers/layouts/App';
import QuoteViewContainer from './containers/QuoteViewContainer';
import FinishQuoteViewContainer from './containers/FinishQuoteViewContainer';
import LoginContainer from './containers/LoginContainer';

function requireAuth(nextState, replace, store) {
  const { dni } = store.getState().auth.currentUser || {};
  if (!dni) {
    replace({
      pathname: '/login',
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
      <Route path="/login" component={LoginContainer} onEnter={(nextState, replace) => redirectIfLoggedIn(replace, store) }/>
    </Router>
  );
}

export default routes;
