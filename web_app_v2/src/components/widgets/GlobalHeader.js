import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// My components
import SearchBar from "./SearchBar";
import QuickOption from "./QuickOpt";

const useStyles = makeStyles(theme => ({
  headerBg: {
    position: "fixed",
    background: "primary",
    color: "#f0f0f0"
  },
  customTb: {
    minHeight: 30
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
      <AppBar className={classes.headerBg} position="static" elevation={0}>
        <Toolbar className={classes.customTb}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <SearchBar />
          <div className={classes.grows} />
          <QuickOption />
        </Toolbar>
      </AppBar>
    </div>
  );
}
