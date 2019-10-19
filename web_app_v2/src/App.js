import React, { Component } from "react";
import styles from "./main.css";
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

import MainView from "./components/MainView";
import {
  NavBar,
  Profile,
  ReadPanel,
  UserProfile,
  Projects
} from "./components/widgets";

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
        <MainView />
      </div>
    );
  }
}

const routes = [
  // {
  //   path: "/profile",
  //   exact: true,
  //   sidebar: ({ match }) => {
  //     var breadcrumbs = [];

  //     breadcrumbs.push({
  //       label: "Profile",
  //       href: "/profile"
  //     });

  //     return <NavBar breadcrumb={breadcrumbs} />;
  //   },
  //   main: () => <Profile />
  // },
  // {
  //   path: "/projects/:project",
  //   exact: true,
  //   sidebar: ({ match }) => {
  //     var breadcrumbs = [];

  //     breadcrumbs.push({
  //       label: match.params.project,
  //       href: "/" + match.params.project
  //     });

  //     return <NavBar breadcrumb={breadcrumbs} />;
  //   },
  //   main: () => <Projects />
  // },
  // {
  //   path: "/projects/:project/:chaplink",
  //   exact: true,
  //   sidebar: ({ match }) => {
  //     var breadcrumbs = [];

  //     breadcrumbs.push({
  //       label: match.params.project,
  //       href: "/" + match.params.project
  //     });
  //     breadcrumbs.push({
  //       label: match.params.chaplink,
  //       href: "/" + match.params.project + "/" + match.params.chaplink
  //     });

  //     return <NavBar breadcrumb={breadcrumbs} />;
  //   },
  //   main: ({ match }) => <ReadPanel link={match.params.chaplink} />
  // },
  {
    path: "/",
    exact: true,
    sidebar: ({ match }) => {
      var breadcrumbs = [];

      return <NavBar breadcrumb={breadcrumbs} />;
    },
    main: () => <MainView />
    // },
    // {
    //   path: "/userprofile",
    //   exact: true,
    //   sidebar: ({ match }) => {
    //     var breadcrumbs = [];

    //     return <NavBar breadcrumb={breadcrumbs} />;
    //   },
    //   main: () => <UserProfile />
  }
];

export default App;
