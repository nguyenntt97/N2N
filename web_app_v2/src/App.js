import React, { Component } from "react";
import styles from "./main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Theme } from "./components/common/theme";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { GlobalHeader, CustomizedBreadcrumbs } from "./components/widgets";

import MainView from "./components/MainView";
import ProjectView from "./components/ProjectView";
import EditorView from "./components/EditorView";

// import { NavBar, Profile, ReadPanel, UserProfile } from "./components/widgets";

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
          <Grid container justify="center">
            <Grid item xs={12}>
              <GlobalHeader viewName={"Trang chủ"} />
            </Grid>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
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
    path: "/projects/:projectId",
    exact: true,
    // sidebar: ({ match }) => {
    //   var breadcrumbs = [];

    //   breadcrumbs.push({
    //     label: match.params.project,
    //     href: "/" + match.params.project
    //   });

    //   return <NavBar breadcrumb={breadcrumbs} />;
    // },
    main: props =>
      <React.Fragment key="project">
        <CustomizedBreadcrumbs
          curUrl={window.location.pathname.split("/").filter(Boolean)}
        />
        <ProjectView />
      </React.Fragment>
  },
  {
    path: "/edit/:chapId",
    exact: true,
    // sidebar: ({ match }) => {
    //   var breadcrumbs = [];

    //   breadcrumbs.push({
    //     label: match.params.project,
    //     href: "/" + match.params.project
    //   });

    //   return <NavBar breadcrumb={breadcrumbs} />;
    // },
    main: props => <React.Fragment key="chapter">
      <CustomizedBreadcrumbs
        curUrl={window.location.pathname.split("/").filter(Boolean)}
      />
      <EditorView />
    </React.Fragment>
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
    main: props => <MainView {...props} />
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
