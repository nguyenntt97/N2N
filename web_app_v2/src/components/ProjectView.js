import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { TabPane, ProjectInfo, VolPane } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import { Typography, Divider } from "@material-ui/core";

import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import GuildBoard from "./widgets/GuildBoard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    position: "relative"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  project_ava: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  container: {
    overflow: "hidden",
    marginLeft: 40,
    height: "100%",
    position: "absolute",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      zIndex: 4,
      right: 30,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(top, rgba( 0, 0, 0, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-moz-linear-gradient(top, rgba( 255, 255, 255, 0) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-ms-linear-gradient(top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-o-linear-gradient( right, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% )",
      background:
        "-webkit-linear-gradient( right, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 0.8) 60%, rgba( 255, 255, 255, 1 ) 100% )",
      "-ms-filter":
        "progid:DXImageTransform.Microsoft.gradient(startColorstr=#550000FF, endColorstr=#550000FF)",
      filter:
        "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff, endColorstr=#ffffffff)"
    }
  },
  longthumb: {
    width: "90%",
    left: "10%",
    top: 0,
    position: "relative"
  },
  mask: {
    position: "absolute",
    background: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    zIndex: 3,
    top: 0,
    left: 0
  },
  parallelogram: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: "''",
      top: 0,
      left: "100%",
      width: "100%",
      bottom: 0,
      background: "#000",
      position: "absolute",
      transform: "skew(30deg)",
      transformOrigin: "bottom",
      zIndex: 5,
      background: "#fff"
    },
    "&::before": {
      content: "''",
      top: 0,
      right: "80%",
      width: "100%",
      bottom: 0,
      background: "#000",
      position: "absolute",
      transform: "skew(30deg)",
      transformOrigin: "bottom",
      background: "#fff",
      zIndex: 5
    }
  },
  lItem: {
    marginBottom: 5
  },
  itemTitle: {
    position: "absolute",
    top: 0,
    left: 70,
    zIndex: 10,
    fontWeight: "bold"
  }
}));

const generateVolViews = volData =>
  volData.map(v => ({
    title: v.vol_title,
    label: "latest-news",
    body: <VolPane chapters={v.chapters} />
  }));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function ProjectView() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const widget = [
    {
      title: "Cập nhật",
      label: "update-tab",
      body: (
        <div className={classes.demo}>
          <List dense={dense}>
            {generate(
              <ListItem className={classes.lItem}>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src="/project_sample_ava.jpg"
                      className={classes.project_ava}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.itemTitle}
                  primary="Single-line item"
                  secondary={"Views: 1000"}
                />
                <div className={classes.container}>
                  <div className={classes.parallelogram}>
                    <div className={classes.mask} />
                    <img
                      className={classes.longthumb}
                      src="/img/cover1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </ListItem>
            )}
          </List>
        </div>
      )
    },
    {
      title: "TOP",
      label: "top-tab",
      body: <span>Content 2</span>
    }
  ];

  return (
    <Grid container spacing={2} justify="center">
      <Grid item container xs={12} md={8} spacing={2} justify="center">
        <Grid item xs={12} md={12}>
          <ProjectInfo />
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <TabPane content={generateVolViews(vol_data)} immersive />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{
              color: "#4a47a3",
              fontWeight: "bold"
            }}
          >
            Bình luận
          </Typography>
          <Divider />
          <ChatView data={COMMENT} />
        </Grid>
      </Grid>
      <Grid item xs={8} md={4} lg={3} justify="center">
        <TabPane content={widget} />
      </Grid>
    </Grid>
  );
}

const vol_data = [
  {
    vol_id: "121313",
    vol_title: "Tập 1",
    chapters: [
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      },
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      }
    ]
  },
  {
    vol_id: "121313",
    vol_title: "Tập 2",
    chapters: [
      {
        id: "1232424",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu 2"
      }
    ]
  },
  {
    vol_id: "121313",
    vol_title: "Tập 3",
    chapters: [
      {
        id: "1232423",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu"
      }
    ]
  },
  {
    vol_id: "121313",
    vol_title: "Tập 4",
    chapters: [
      {
        id: "1232424",
        chapter_id: 1,
        title: "Chương 1: Khởi đầu 2"
      }
    ]
  }
];

const COMMENT = [
  {
    username: "superman",
    avatar: "sample-ava.jpg",
    content: "Kết từ cái nhìn đầu",
    date: "11/02/2019"
  },
  {
    username: "superman",
    avatar: "sample-ava.jpg",
    content: "Chém gió",
    date: "11/02/2019"
  },
  {
    username: "superman",
    avatar: "sample-ava.jpg",
    content: "Kết từ cái nhìn đầu",
    date: "11/02/2019"
  }
];
