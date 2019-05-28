import React, { Component } from "react";
import styles from "./main.css";
import "materialize-css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  withRouter,
  Switch
} from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import Mainpage from "./views/Mainpage";
import Projects from "./views/Projects";
import FollowPanel from "./views/Follow";
import Profile from "./views/Profile";
import DraftPanel from "./views/DraftPanel";
import ReadPanel from "./views/ReadPanel";
import NavBar from "./widget/NavBar";
import UserProfile from "./views/UserProfile";
import AdvancedSearch from "./views/AdvancedSearch";

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
      <div className={styles.App}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
        <div className="main-content container">
          <Route path="/draft/id" component={DraftPanel} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    );
  }
}

const routes = [
  {
    path: "/profile",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      breadcrumbs.push({
        label: "Profile",
        href: "/profile"
      });

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: () => <Profile />
  },
  {
    path: "/projects/:project",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      breadcrumbs.push({
        label: match.params.project,
        href: "/" + match.params.project
      });

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: () => <Projects />
  },
  {
    path: "/projects/:project/:chaplink",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      breadcrumbs.push({
        label: match.params.project,
        href: "/" + match.params.project
      });
      breadcrumbs.push({
        label: match.params.chaplink,
        href: "/" + match.params.project + "/" + match.params.chaplink
      });

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: ({ match }) => <ReadPanel link={match.params.chaplink} />
  },
  {
    path: "/",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: () => <Mainpage />
  },
  {
    path: "/userprofile",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: () => <UserProfile />
  },
  {
    path: "/advancedsearch",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: () => <AdvancedSearch />
  }
];

export default App;
