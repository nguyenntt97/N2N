import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Theme } from "./common/theme";

import { TabPane, NewsPane, ProjectInfo, VolPane } from "./widgets";
// import GuildBoard from "./widgets/GuildBoard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

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

const data = [
  {
    cover: "img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
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
  }
]

const generateVolViews = (volData) => volData.map(v => ({
  "title": v.vol_title,
  "label": "latest-news",
  "body": <VolPane/>
}));

class ProjectView extends React.Component {
  render() {
    return (
      <Grid container xs={11} spacing={1}>
        <Grid item xs={12} md={7}>
          <ProjectInfo />
          <TabPane immersive content={generateVolViews(vol_data)} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TabPane content={widget} />
        </Grid>
      </Grid>
    );
  }
}

export default ProjectView;
