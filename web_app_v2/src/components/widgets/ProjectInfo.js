import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";

import { TabPane } from "../widgets";

const useStyles = data =>
  makeStyles(theme => ({
    projectBanner: {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('" +
        data.banner +
        "')",
      width: "100%",
      height: 250,
      borderRadius: 15,
      backgroundSize: "cover"
    },
    projectPortrait: {
      height: 200,
      position: "relative",
      margin: 25,
      borderRadius: 15
    }
  }));

const data = [
  {
    cover: "/img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?",
    banner: "/img/cover2.png"
  }
];

const widget = [
  {
    title: "Cập nhật",
    label: "update-tab",
    body: <span>Content 1</span>
  },
  {
    title: "TOP",
    label: "top-tab",
    body: <span>Content 2</span>
  }
];

export default function ProjectInfo(props) {
  const classes = useStyles(data[0])();

  return (
    <Grid className={classes.projectBanner} container xs={12}>
      <Grid item xs={12} md={7}>
        <img className={classes.projectPortrait} src={data[0].cover} />
      </Grid>
      <Grid item xs={12} md={5}></Grid>
    </Grid>
  );
}
