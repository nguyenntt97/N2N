import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Theme } from "./common/theme";

import { GlobalHeader, GlobalTabs, Breadcrumb, ProjectPane } from "./widgets";
// import GuildBoard from "./widgets/GuildBoard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

class Mainpage extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={12}>
            <GlobalHeader viewName={"Trang chủ"} />
            <Breadcrumb />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProjectPane title="Mới nhất" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ProjectPane title="Mới nhất" />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Mainpage;
