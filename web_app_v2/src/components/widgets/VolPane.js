import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, List, ListItemText, Divider, Link } from "@material-ui/core";
import { Redirect, withRouter } from "react-router-dom";

const useStyles = data =>
  makeStyles(theme => ({
    projectPortrait: {
      height: 270,
      position: "relative",
      margin: 25,
      borderRadius: 15
    },
    chapterList: {
      width: "100%"
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
    <Grid className={classes.projectBanner} container xs={12} spacing={2}>
      <Grid item container elevation={5} item xs={12} md={5} justify="center">
        <img className={classes.projectPortrait} src={data[0].cover} />
      </Grid>
      <Grid item xs={12} md={6}>
        <List component="nav" className={classes.chapterList}>
          {props.chapters.map((c, index) => (
            <ListItem
              button
              onClick={() => {
                console.log("haha");
                props.history.push("/");
              }}
            >
              <ListItemText primary={c.title} />
            </ListItem>
          ))}
        </List>
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
