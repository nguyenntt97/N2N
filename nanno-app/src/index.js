import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
