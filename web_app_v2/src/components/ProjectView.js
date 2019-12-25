import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { TabPane, ProjectInfo, VolPane } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import { Typography, Divider } from "@material-ui/core";

import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import GuildBoard from "./widgets/GuildBoard";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  project_ava: {
    width: "100%",
    height: "100%",
    position: "relative"
  }
}));
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

const generateVolViews = volData =>
  volData.map(v => ({
    title: v.vol_title,
    label: "latest-news",
    body: <VolPane chapters={v.chapters} />
  }));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
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
      body:
        <div className={classes.demo}>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src="/project_sample_ava.jpg" className={classes.project_ava} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>,
            )}
          </List>
        </div>
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

