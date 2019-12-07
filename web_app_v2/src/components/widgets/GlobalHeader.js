import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// My components
import SearchBar from "./SearchBar";
import QuickOption from "./QuickOpt";

const useStyles = makeStyles(theme => ({
  headerBg: {
    position: "fixed",
    background: "#fff",
    color: "#292929"
  },
  grows: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: theme.spacing(1),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

export default function MainAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grows}>
      <AppBar
        className={classes.headerBg}
        position="static"
        elevation={2}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src="/logo_2.png" height="50px" />

          <SearchBar />
          <div className={classes.grows} />
          <QuickOption />
        </Toolbar>
      </AppBar>
    </div>
  );
}
