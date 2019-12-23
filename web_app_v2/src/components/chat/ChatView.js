import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Dante, DanteMini } from "../dante/Dante";
import { Paper } from "@material-ui/core";
import { Theme } from "../common/theme";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`
  },
  ava: {
    height: "100%",
    width: "100%"
  },
  yourComment: {
    padding: 10,
    marginLeft: 80
  }
}));

export default function ChatView() {
  const classes = useStyles();

  return [
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src="/sample-ava.jpg" className={classes.ava} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <li>
        <Divider component="li" variant="inset" color="white" />
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Hôm nay
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src="/sample-ava.jpg" className={classes.ava} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="OMG <3" secondary={"sirOwen"} />
      </ListItem>
      <Divider variant="middle" />
    </List>,
    <Paper elevation={1} className={classes.yourComment}>
      <DanteMini
        content={null}
        data_storage={{
          save_handler: (editorContext, content) => {
            console.log("Saved");
            console.log(editorContext, content);
          }
        }}
      />
    </Paper>
  ];
}
