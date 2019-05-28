import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { fetchPosts } from "./actions";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import nannoApp from "./reducers";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const loggerMiddleware = createLogger();

const store = createStore(
  nannoApp,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(fetchPosts("general")).then(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
