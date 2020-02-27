import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from '@material-ui/core/Box';

// My components
import SearchBar from "./SearchBar";
import QuickOption from "./QuickOpt";

const useStyles = makeStyles(theme => ({
  headerBg: {
    position: "fixed",
    background: "primary",
    color: "#f0f0f0",
    width: "inherit"
  },
  customTb: {
    height: 25,
    display: "flex",
    justifyContent: "space-between",
    position: "relative"
  },
  grows: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    // marginLeft: theme.spacing(1),
    display: "none",
    flexGrow: "0",
    height: "30px",
    flexWrap: "nowrap",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  logo: {
    position: "relative",
    height: "130%"
  }
}));

export default function MainAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.headerBg} position="static" elevation={0}>
      <Toolbar className={classes.customTb}>
        <Box style={{
          flexGrow: 5,
          display: "flex",
          justifyContent: "flext-start"
        }}>
          <Box style={{
            flexGrow: 0,
            marginRight: 5
          }}>
            <Typography component="div" variant="h6" className={classes.title}>
              <img src="/img/logo_new.png" className={classes.logo} />
              <Box fontWeight="fontWeightBold">Sonako</Box>
            </Typography>
          </Box>
          <Box style={{
            flexGrow: 5,
            maxWidth: 600,
            position: "relative"
          }}>
            <SearchBar />
          </Box>
        </Box>
        <Box style={{
          flexGrow: 0
        }}>
          <QuickOption />
        </Box>

      </Toolbar>
    </AppBar>
  );
}
