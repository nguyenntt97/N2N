import React from "react";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  List,
  ListItemText,
  Divider,
  Link,
  Box
} from "@material-ui/core";
import { Redirect, withRouter } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = data =>
  makeStyles(theme => ({
    volPane: {
      width: "100%",
      position: "relative"
    },
    volCover: {
      height: 270,
      position: "relative",
      borderRadius: 15
    },
    chapterList: {
      position: "relative"
    },
    operator: {
      width: "100%",
      position: "relative",
      textAlign: "right",
      padding: 5
    }
  }));

const data = [
  {
    cover: "/img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?",
    banner: "/img/cover2.png"
  }
];

function VolPane(props) {
  const classes = useStyles(data[0])();

  return (
    <Grid className={classes.volPane} container justify="space-around">
      <Grid item container elevation={5} item xs={12} md={5} justify="center">
        <img className={classes.volCover} src={props.avatar} />
      </Grid>
      <Grid item xs={12} md={6} style={{ position: "relative" }}>
        {props.empty ? (
          <Alert severity="info" className={classes.chapterList}>
            <AlertTitle>Tình trạng</AlertTitle>
            Truyện chưa có người dịch!
          </Alert>
        ) : (
          <React.Fragment>
            <List component="nav" className={classes.chapterList}>
              {props.chapters.map((c, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    props.history.push("/edit/" + c.id);
                  }}
                >
                  <ListItemText primary={c.title} />
                </ListItem>
              ))}
            </List>
            <Box component="div" className={classes.operator}>
              <Tooltip title="Edit" placement="bottom">
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <IconButton aria-label="more">
                <MoreVertIcon />
              </IconButton>
            </Box>
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  );
}

// VolPane.propTypes = {
//   history: React.propTypes.shape({
//     push: React.PropTypes.func.isRequired
//   })
// };

export default withRouter(VolPane);
