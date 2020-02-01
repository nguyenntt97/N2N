import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";

import { getShortened } from "../common/helpers";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    position: "relative"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  project_ava: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  container: {
    overflow: "hidden",
    marginLeft: 40,
    height: "100%",
    width: "80%",
    position: "absolute",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      zIndex: 4,
      right: 30,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(top, rgba( 0, 0, 0, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-moz-linear-gradient(top, rgba( 255, 255, 255, 0) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-ms-linear-gradient(top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-o-linear-gradient( right, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-webkit-linear-gradient( right, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 0.8) 50%, rgba( 255, 255, 255, 1 ) 100% )",
      "-ms-filter":
        "progid:DXImageTransform.Microsoft.gradient(startColorstr=#550000FF, endColorstr=#550000FF)",
      filter:
        "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff, endColorstr=#ffffffff)"
    }
  },
  longthumb: {
    width: "90%",
    left: "10%",
    top: 0,
    position: "relative",
    transition: "all .3s ease-in-out"
  },
  mask: {
    position: "absolute",
    background: "rgba(255,200,200,0.5)",
    width: "100%",
    height: "100%",
    zIndex: 4,
    top: 0,
    left: 0
  },
  parallelogram: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: "''",
      top: 0,
      left: "100%",
      width: "100%",
      bottom: 0,
      background: "#000",
      position: "absolute",
      transform: "skew(30deg)",
      transformOrigin: "bottom",
      zIndex: 5,
      background: "#fff"
    },
    "&::before": {
      content: "''",
      top: 0,
      right: "80%",
      width: "100%",
      bottom: 0,
      background: "#000",
      position: "absolute",
      transform: "skew(30deg)",
      transformOrigin: "bottom",
      background: "#fff",
      zIndex: 5
    }
  },
  lItem: {
    marginBottom: 5,
    "&:hover": {
      cursor: "pointer",
      "& $longthumb": {
        top: "-100%"
      }
    }
  },
  itemTitle: {
    position: "absolute",
    left: 70,
    zIndex: 10,
    fontWeight: "bold"
  }
}));

export function TopBoard(props) {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);
  const [dense, setDense] = React.useState(false);

  let data = props.data;

  return (
    <div className={classes.demo}>
      <List dense={dense}>
        {(data && data.length > 0 ? data : []).slice(0, 10).map(item => (
          <ListItem className={classes.lItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={item.thumbnail} className={classes.project_ava} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.itemTitle}
              primary={
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#444f5a",
                    textShadow:
                      "-0.25px -0.25px 0 #dcdcdc, 0.25px -0.25px 0 #dcdcdc, -0.25px 0.25px 0 #dcdcdc, 0.25px 0.25px 0 #dcdcdc"
                  }}
                >
                  {getShortened(item.name, 20)}
                </Typography>
              }
              secondary={"Views: 1000"}
            />
            <div className={classes.container}>
              <div className={classes.parallelogram}>
                <div className={classes.mask} />
                <img
                  className={classes.longthumb}
                  src={item.thumbnail}
                  alt=""
                />
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
