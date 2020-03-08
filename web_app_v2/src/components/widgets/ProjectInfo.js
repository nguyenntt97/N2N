import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { Typography, Divider, Button } from "@material-ui/core";
import { Skeleton, Rating } from "@material-ui/lab";

import { TabPane } from "../widgets";
import { loadingEffect } from "../common/theme";

const useStyles = data =>
  makeStyles(theme => ({
    projectBanner: {
      width: "100%",
      minHeight: 250,
      borderRadius: 15,
      backgroundSize: "cover",
      position: "relative",
      padding: 10
    },
    projectPortrait: {
      height: 250,
      margin: 25,
      borderRadius: 15
    },
    sideInfo: {
      color: "white",
      padding: "5px"
    },
    ...loadingEffect
  }));

var data = {
  cover: "/img/cover1.jpg",
  title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?",
  banner: "/img/cover2.png"
};
const labels = {
  1: "Dở tệ",
  2: "Tệ",
  3: "Thường",
  4: "Hay",
  5: "Siêu phẩm"
};

export default function ProjectInfo(props) {
  const classes = useStyles(data[0])();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(2);

  data.banner = props.prjData.thumbnail;
  data.cover = props.prjData.thumbnail;

  return (
    <Grid
      className={classes.projectBanner}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('" +
          data.banner +
          "')"
      }}
      container
      item
      xs={12}
    >
      {props.loading ? (
        <div className={classes.placeholder}>
          <div className={classes.ldsDualRing} />
        </div>
      ) : null}
      <Grid container item xs={12} sm={4} lg={3} justify="center">
        <img className={classes.projectPortrait} src={data.cover} />
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={8}
        lg={9}
        alignItems="center"
        justify="center"
      >
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            color: "#fff"
          }}
        >
          {props.loading ? "N/A" : props.prjData.name}
        </Typography>
        <Grid
          container
          item
          xs={12}
          className={classes.sideInfo}
          justify="center"
        >
          <Grid item xs={6} sm={4}>
            <p>
              <b>Tác giả</b>: {props.prjData.author}, {props.prjData.artist}
            </p>
            <p>
              <b>Ngày đăng</b>: {props.prjData.author}
            </p>
            <p>
              <b>Tác giả</b>: {props.prjData.author}
            </p>
          </Grid>
          <Grid container item xs={6} sm={8} alignItems="center">
            <Grid container>
              <Box>
                <b>Đánh giá</b>: <br />
                <Grid container alignItems="center">
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />{" "}
                  &nbsp;
                  {value !== null && labels[hover !== -1 ? hover : value]}
                </Grid>
              </Box>
            </Grid>
            <br />
            <Button variant="contained" color="secondary">
              Bookmark
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
