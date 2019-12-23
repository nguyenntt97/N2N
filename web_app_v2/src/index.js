// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

// const loggerMiddleware = createLogger();

// const store = createStore(
//   nannoApp,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );

// store.dispatch(fetchPosts("general")).then(() => console.log(store.getState()));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
