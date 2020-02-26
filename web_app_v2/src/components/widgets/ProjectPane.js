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
    paddingTop: "55px",
    marginTop: "40px",
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
    padding: 10
  },
  slider: {
    transition: "all .3s ease-in-out",
    position: "relative",
    width: "auto !important"
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
      transform: "scale(1.05)",
      cursor: "pointer"
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
    margin: 10,
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
    position: "relative"
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
    <Card id="scroll-bar" className={classes.paper} variant="outlined">
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
        <Typography color="textSecondary" gutterBottom>
          <Chip
            size="small"
            label="Action"
            component="a"
            href="#chip"
            clickable
          />
        </Typography>

        <Typography variant="h6">
          <Link
            href={"/projects/" + item.id}
            // onClick={preventDefault}
            className={classes.link}
            to={"/projects/" + item.id}
          >
            {getShortened(item.name)}
          </Link>
        </Typography>
        <Rating name="read-only" value={3} size="small" readOnly />
        <Typography className={classes.dateTxt}>
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
  const [focusScroll, setFocusScroll] = React.useState(false);
  const [scrollDelta, setScrollDelta] = React.useState(0);
  const [scrollData, setScrollData] = React.useState(0);
  const sliderRef = React.useRef();
  const slideWrapRef = React.useRef();
  const classes = useStyles();

  const phItem = {
    loading: true,
    name: ""
  };

  const prjData =
    props.data && props.data.length > 0
      ? props.data.slice(0, 10)
      : Array(10).fill(phItem);

  React.useEffect(() => {
    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    }

    // const handleUpdateOnScroll = (setScrollData, scrollDelta) => {
    //   let oneWindow = sliderRef.current.clientWidth;

    //   let start = scrollDelta;
    //   let end = scrollDelta + oneWindow;

    //   if (end > oneItem * scrollData.length) {
    //     setScrollData([...scrollData, ...prjData]);
    //   }
    // };

    const onScroll = event => {
      let newDelta = scrollDelta + event.deltaY * -2;
      let min = -0.5 * (sliderRef.current.clientWidth - slideWrapRef.current.clientWidth * 0.6);
      let max = 0.5 * (sliderRef.current.clientWidth - slideWrapRef.current.clientWidth * 0.6);
      if (newDelta >= min && newDelta <= max) {
        setScrollDelta(newDelta);
        disableScroll()
        setTimeout(() => {
          enableScroll()
        }, 400);
      }
    };

    function disableScroll() {
      if (window.addEventListener) {
        // older FF
        window.addEventListener("DOMMouseScroll", preventDefault, false);
        document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
      } else {
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      }
    }

    function enableScroll() {
      if (window.removeEventListener) {
        window.removeEventListener("DOMMouseScroll", preventDefault, false);
        document.removeEventListener("wheel", preventDefault, {
          passive: false
        }); // Enable scrolling in Chrome
      } else {
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
      }
    }

    if (focusScroll == true) {
      window.addEventListener("wheel", onScroll);
      disableScroll();
    }

    return () => {
      enableScroll();
      window.removeEventListener("wheel", onScroll);
    };
  }, [focusScroll, scrollDelta, sliderRef]);

  const onScrollFocus = ev => {
    if (focusScroll == false) {
      setFocusScroll(true);
    }
  };

  const onScrollUnfocus = ev => {
    if (focusScroll == true) {
      setFocusScroll(false);
    }
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
        ref={slideWrapRef}
        item
        container
        spacing={3}
        alignItems="center"
        justify="center"
        className={classes.growBox}
        xs={10}
        wrap="nowrap"
        onMouseOver={onScrollFocus}
        onMouseLeave={onScrollUnfocus}
      >
        <Grid
          ref={sliderRef}
          item
          container
          spacing={3}
          alignItems="flex-start"
          wrap="nowrap"
          style={{
            left: scrollDelta
          }}
          className={classes.slider}
        >
          {prjData.map((k, i) => (
            <Grid
              key={i}
              item
              style={{
                alignSelf: "flex-start"
              }}
            >
              {projectItem(k, classes)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
