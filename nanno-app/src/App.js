import React, { Component } from "react";
import "./main.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  withRouter
} from "react-router-dom";

import Mainpage from "./views/Mainpage";
import Projects from "./views/Projects";
import FollowPanel from "./views/Follow";
import Profile from "./views/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toMainpage: false,
      toProject: false
    };
  }

  render() {
    return (
      <div className="App">
        <div className="nav-head">
          <div className="nav-icon">Nanno</div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
          <div className="nav-item item-cur">Re:Zero</div>
          <div className="nav-item-item" />
          <div className="custom-bar">
            <div className="my-profile">
              <div className="avatar custom-img">
                <Link to="/follow/me">
                  <img src="/sample-ava.jpg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Route path="/follow/me" component={Profile} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    );
  }
}

const routes = [
  {
    path: "/project",
    exact: true,
    sidebar: () => (
      <Link to="/">
        <div className="nav-item">
          Project <i class="small material-icons">chevron_right</i>
        </div>
      </Link>
    ),
    main: () => <Projects />
  },
  {
    path: "/",
    exact: true,
    sidebar: () => (
      <Link to="/project">
        <div className="nav-item">
          \ <i class="small material-icons">chevron_right</i>
        </div>
      </Link>
    ),
    main: () => <Mainpage />
  }
];

export default App;
