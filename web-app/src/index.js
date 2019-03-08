import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { createStore } from "redux";
import nannoApp from "./reducers";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(nannoApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
