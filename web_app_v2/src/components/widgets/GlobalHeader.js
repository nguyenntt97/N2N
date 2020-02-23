import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// My components
import SearchBar from "./SearchBar";
import QuickOption from "./QuickOpt";

const useStyles = makeStyles(theme => ({
  headerBg: {
    position: "fixed",
    background: "primary",
    color: "#f0f0f0",
    width: "100%"
  },
  customTb: {
    minHeight: 30
  },
  grows: {
    flexGrow: 1,
    width: "100%"
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
  },
  logo: {
    position: "relative",
    top: "4px",
    height: "40px"
  },
  title: {
    fontWeight: "bold"
  }
}));

export default function MainAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grows}>
      <AppBar className={classes.headerBg} position="static" elevation={0}>
        <Toolbar className={classes.customTb}>
          <img src="/logo_sm.png" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Sonako
          </Typography>
          <SearchBar />
          <div className={classes.grows} />
          <QuickOption />
        </Toolbar>
      </AppBar>
    </div>
  );
}
