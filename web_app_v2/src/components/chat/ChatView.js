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
import { Paper, Button } from "@material-ui/core";
import { Theme } from "../common/theme";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "0 0 10px 0"
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`
  },
  dividerInset: {
    margin: `10px 0 0 ${theme.spacing(9)}px`
  },
  ava: {
    height: "100%",
    width: "100%"
  },
  yourComment: {
    padding: 15
  }
}));

const basicUser = text => (
  <Typography component="div" style={{ color: "#1b262c" }}>
    <Box fontWeight="fontWeightMedium">{text}</Box>
  </Typography>
);
const modUser = text => (
  <Typography component="div" style={{ color: "#3282b8" }}>
    <Box fontWeight="fontWeightBold">{text}</Box>
  </Typography>
);
export default function ChatView() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="/sample-ava.jpg" className={classes.ava} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={basicUser("Shakuma")}
            secondary={
              <React.Fragment>
                {"I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <li>
          {/* <Divider component="li" variant="inset" color="white" /> */}
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
          <ListItemText primary={modUser("nguyenntt")} secondary={"OMG <3"} />
        </ListItem>
        {/* <Divider variant="middle" /> */}
      </List>
      <Paper elevation={1} className={classes.yourComment}>
        <DanteMini
          content={null}
          data_storage={{
            save_handler: (editorContext, content) => {
              console.log(editorContext, content);
            }
          }}
        />
      </Paper>
      <Box component="div" style={{ textAlign: "right", padding: "10px 0px" }}>
        <Button variant="contained" color="primary">
          Post
        </Button>
      </Box>
    </React.Fragment>
  );
}
