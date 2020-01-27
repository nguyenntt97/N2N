import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    padding: "10px",
    flexGrow: 1,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "90%",
      height: "100%",
      right: "5%",
      left: "5%",
      background: "#e8f1f5"
    }
  },
  title: {
    color: "#004a7c",
    // fontWeight: "bold"
    fontFamily: "Yanone Kaffeesatz",
    fontSize: "40px",
    zIndex: "5",
    position: "relative",
    left: "18px"
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
    overflow: "hidden"
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
  placeholder: {
    width: "100%",
    height: "100%",
    background: "#dcdcdc",
    display: "flex",
    justifyContent: "center",
    paddingTop: "60px"
  },
  "@keyframes ldsDualRing": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  ldsDualRing: {
    display: "inline-block",
    width: "80px",
    height: "80px",
    "&::after": {
      content: "''",
      display: "block",
      width: "64px",
      height: "64px",
      margin: "8px",
      borderRadius: "50%",
      border: "6px solid #fff",
      borderColor: "#fff transparent #fff transparent",
      animation: "$ldsDualRing 1.2s linear infinite"
    }
  }
}));

const getShortened = str =>
  str.length > 30 ? str.substring(0, 30) + "..." : str;

const projectItem = (item, classes) => {
  const preventDefault = event => event.preventDefault();
  console.log(item);
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
    <Grid container className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {(props.data && props.data.length > 0
            ? props.data.slice(6)
            : Array(6).fill(phItem)
          ).map((k, i) => (
            <Grid key={i} item>
              {projectItem(k, classes)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
