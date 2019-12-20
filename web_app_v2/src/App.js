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
import { Theme } from "./components/common/theme";
import Grid from "@material-ui/core/Grid";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";

import { Provider } from "react-redux";
import { createStore } from "redux";

import {
  GlobalHeader,
  GlobalTabs,
  Breadcrumb,
  ProjectPane,
  TabPane,
  NewsPane
} from "./components/widgets";

import MainView from "./components/MainView";
import ProjectView from "./components/ProjectView";

import { NavBar, Profile, ReadPanel, UserProfile } from "./components/widgets";

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
        <MuiThemeProvider theme={Theme}>
          <Grid container xs={12} justify="center">
            {/* {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))} */}

            <Grid item xs={12}>
              <GlobalHeader viewName={"Trang chủ"} />
              <Breadcrumb />
            </Grid>
            {routes.map((route, index) => (
              <Grid style={{
                marginTop:20,
                padding: 10}
                } item xs={12}>
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
              </Grid>
            ))}
          </Grid>
        </MuiThemeProvider>
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
  {
    path: "/projects/:project",
    exact: true,
    // sidebar: ({ match }) => {
    //   var breadcrumbs = [];

    //   breadcrumbs.push({
    //     label: match.params.project,
    //     href: "/" + match.params.project
    //   });

    //   return <NavBar breadcrumb={breadcrumbs} />;
    // },
    main: () => <ProjectView />
  },
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
    // sidebar: ({ match }) => {
    //   var breadcrumbs = [];

    //   return <NavBar breadcrumb={breadcrumbs} />;
    // },
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
