import React, { useState, useEffect } from "react";
import { useEndpoint, genReq } from "./common/fetchApi";
import Grid from "@material-ui/core/Grid";

import { ProjectPane, TabPane, NewsPane, TopBoard } from "./widgets";
// import GuildBoard from "./widgets/GuildBoard";

const data = [
  {
    cover: "img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover2.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover3.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  }
];

const mainContent = [
  {
    title: "Main board",
    label: "latest-news",
    body: <NewsPane data={data} />
  },
  {
    title: "Mới nhất",
    label: "top-tab",
    body: <span>Content 2</span>
  }
];

function MainView() {
  const projectList = useEndpoint(genReq("/projects"));

  const widget = [
    {
      title: "Cập nhật",
      label: "update-tab",
      body: <TopBoard data={projectList.data} />
    },
    {
      title: "TOP",
      label: "top-tab",
      body: <span>Content 2</span>
    }
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        <ProjectPane data={projectList.data} title="Mới Nhất" />
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="center"
        style={{ marginTop: "70px" }}
      >
        <Grid item xs={12} md={7}>
          <TabPane immersive content={mainContent} />
        </Grid>
        <Grid container item sm={12} md={4} justify="space-around">
          <Grid item xs={12} sm={5} md={12}>
            <TabPane content={widget} />
          </Grid>
          <Grid item xs={12} sm={5} md={12}>
            <TabPane content={widget} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainView;
