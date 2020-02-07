import React from "react";
import {
  makeStyles
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  Link
} from "react-router-dom";

import {
  getShortened
} from "../common/helpers";
import {
  loadingEffect
} from "../common/theme"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    flexGrow: 1,
    background: "#e8f1f5",
    backgroundImage: "url('/foggy-birds.png')",
    backgroundRepeat: "repeat",
    overflow: "hidden"
  },
  growBox: {
    flexGrow: 1,
    position: "relative",
    zIndex: "5"
  },
  title: {
    color: "#004a7c",
    // fontWeight: "bold"
    fontFamily: "Yanone Kaffeesatz",
    fontSize: "40px",
    zIndex: "5",
    position: "relative",
    left: "18px",
  },
  paper: {
    height: 280,
    width: 160,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "40px"
  },
  cover: {
    width: "100%",
    height: 225,
    overflow: "hidden",
    position: "relative"
  },
  borderLayout: {
    width: "90%",
    height: "75%",
    position: "absolute",
    border: "2px solid rgb(65,60,105,0.5)"
  },
  link: {
    display: "flex",
    position: "relative",
    marginLeft: theme.spacing(1)
  },
  bigFig: {
    height: "200%",
    top: "5px",
    position: "absolute"
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    zIndex: "4",
    filter: "brightness(60%)"
  },
  ...loadingEffect

}));
const projectItem = (item, classes) => {
  const preventDefault = event => event.preventDefault();
  return (
    <Paper className={classes.paper}>
      <div className={classes.cover}>
        {item.loading ? (
          <div className={classes.placeholder}>
            <div className={classes.ldsDualRing} />
          </div>
        ) : (
            <img src={item.thumbnail} width="100%" />
          )}
      </div>
      <Link
        href="/projects/123"
        // onClick={preventDefault}
        className={classes.link}
        to={"/projects/123"}
      >
        {getShortened(item.name)}
      </Link>
      <div className={classes.borderLayout}></div>
    </Paper>
  );
};
export default function ProjectPane(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const phItem = {
    loading: true,
    name: ""
  };

  return (
    <Grid container className={classes.root} direction="column">
      <div style={{
        backdropFilter: "brightness(30%)",
        backgroundImage: "url('/background.jpg')"
      }} className={classes.backdrop} />
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      <Grid container>
        <Grid
          item
          container
          spacing={3}
          alignItems="center"
          className={classes.growBox}
          xs={12}
          md={7}
          lg={9}
          wrap="nowrap"
        >
          {(props.data && props.data.length > 0
            ? props.data.slice(6)
            : Array(6).fill(phItem)
          ).map((k, i) => (
            <Grid key={i} item>
              {projectItem(k, classes)}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <img src="/big_fig.png" className={classes.bigFig} />
        </Grid>
      </Grid>
    </Grid>
  );
}