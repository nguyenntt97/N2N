import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { NewsItem } from "../common";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { ListItemSecondaryAction } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NewsPane(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.data.map((item, i) => (
        <span>{item.title}</span>
      ))}
    </div>
  );
}
