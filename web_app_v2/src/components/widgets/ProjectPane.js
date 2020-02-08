import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import {
  VisibilityOutlined,
  ChatBubbleOutlineOutlined
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { getShortened, toDateStr } from "../common/helpers";
import { loadingEffect } from "../common/theme";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    flexGrow: 1,
    paddingTop: "50px",
    marginTop: "-50px",
    paddingBottom: "40px",
    background: "#e8f1f5",
    backgroundImage: "url('/foggy-birds.png')",
    backgroundRepeat: "repeat",
    overflow: "hidden"
  },
  growBox: {
    flexGrow: 1,
    position: "relative",
    zIndex: "5",
    overflow: "hidden",
    padding: "10px"
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
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "40px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  card: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  cover: {
    width: "200px",
    height: 225,
    overflow: "hidden",
    position: "relative",
    "&::before": {
      content: "''",
      boxSizing: "border-box",
      margin: "5%",
      width: "90%",
      height: "90%",
      position: "absolute",
      border: "2px solid rgb(65,60,105,0.5)"
    }
  },
  link: {
    position: "relative",
    marginLeft: theme.spacing(1)
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    zIndex: "4",
    filter: "brightness(60%)",
    backgroundPosition: "center"
  },
  dateTxt: {
    display: "block",
    width: "100%",
    marginTop: "5px"
  },
  ...loadingEffect
}));
const projectItem = (item, classes) => {
  const preventDefault = event => event.preventDefault();
  return (
    <Card className={classes.paper} variant="outlined">
      <CardContent className={classes.card}>
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
          <Typography color="textSecondary" gutterBottom>
            <Chip
              size="small"
              label="Action"
              component="a"
              href="#chip"
              clickable
            />
          </Typography>
          <Typography variant="h6">{getShortened(item.name)}</Typography>
        </Link>
        <Rating name="read-only" value={3} size="small" readOnly />
        <Typography variant="h8" className={classes.dateTxt}>
          <i>4 ngày trước</i>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Synopsis
        </Button>
        <Grid container alignItems="center" spacing={1} justify="flex-end">
          <Grid item>
            <VisibilityOutlined fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" gutterBottom>
              220
            </Typography>
          </Grid>
          <Grid item>
            <ChatBubbleOutlineOutlined fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" gutterBottom>
              220
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
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
      <div
        style={{
          backdropFilter: "brightness(30%)",
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          backgroundPositionX: "100%"
        }}
        className={classes.backdrop}
      />
      {/* <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography> */}
      <Grid
        item
        container
        spacing={3}
        alignItems="center"
        justify="center"
        className={classes.growBox}
        xs={10}
        wrap="nowrap"
      >
        {(props.data && props.data.length > 0
          ? props.data.slice(0, 10)
          : Array(10).fill(phItem)
        ).map((k, i) => (
          <Grid key={i} item>
            {projectItem(k, classes)}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
