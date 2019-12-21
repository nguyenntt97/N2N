import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { TabPane, ProjectInfo, VolPane } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import { Typography, Divider } from "@material-ui/core";
// import GuildBoard from "./widgets/GuildBoard";

const widget = [
  {
    title: "Cập nhật",
    label: "update-tab",
    body: <span>Content 1</span>
  },
  {
    title: "TOP",
    label: "top-tab",
    body: <span>Content 2</span>
  }
];

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

class ProjectView extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item container xs={12} md={8} spacing={3}>
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
        <Grid item xs={8} md={4} justify="center">
          <TabPane content={widget} />
        </Grid>
      </Grid>
    );
  }
}

export default ProjectView;
