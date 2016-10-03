import React from 'react';
import { Router, browserHistory, IndexRedirect, Route } from 'react-router';
import App from './containers/layouts/App';
import QuoteViewContainer from './containers/QuoteViewContainer';

function routes(store) {
  return (
    <Router history={browserHistory} store={store} >
      <Route path="/" component={App} >
        <IndexRedirect to="/quote" />
        <Route path="/quote" component={QuoteViewContainer} />
      </Route>
    </Router>
  );
}

export default routes;
