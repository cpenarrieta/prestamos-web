import chelaVipApp from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from "redux-logger";
import thunk from "redux-thunk";

let middleware = [thunk];

if (JSON.parse(process.env.REACT_APP_LOGGING || "true")) {
  middleware = [...middleware, createLogger()];
}

export default createStore(chelaVipApp, compose(applyMiddleware(...middleware)));
