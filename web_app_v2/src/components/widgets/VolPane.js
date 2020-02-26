import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, List, ListItemText, Divider, Link } from "@material-ui/core";
import { Redirect, withRouter } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

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

  console.log(props.avatar)
  return (
    <Grid className={classes.projectBanner} container justify="space-around">
      <Grid item container elevation={5} item xs={12} md={5} justify="center">
        <img className={classes.projectPortrait} src={props.avatar} />
      </Grid>
      <Grid item xs={12} md={6}>
        {props.empty ? (
          <Alert severity="info" className={classes.chapterList}>
            <AlertTitle>Tình trạng</AlertTitle>
            Truyện chưa có người dịch!
          </Alert>
        ) : (
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
