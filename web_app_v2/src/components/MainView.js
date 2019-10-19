import React from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import GuildBoard from "./widgets/GuildBoard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

class Mainpage extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={12}></Grid>
      </Grid>
    );
  }
}

export default Mainpage;
