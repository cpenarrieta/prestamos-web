import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import './index.css';
import store from './store'
import actions from './actions'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
injectTapEventPlugin();

function preRenderActions() {
  store.dispatch(actions.receiveConfig(require('./config/config')));
  renderApplication();
}

function renderApplication() {
  render(
    <MuiThemeProvider>
      <Provider store={store}>
        {routes(store)}
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
}

preRenderActions();
