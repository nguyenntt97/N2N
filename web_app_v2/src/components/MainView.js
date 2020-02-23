import React, { useState, useEffect } from "react";
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
  const [prjData, setPrjData] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading("true");
        const response = await fetch("http://sonako.codes:8080/projects");
        const json = await response.json();

        setPrjData(json);
      } catch (err) {
        setLoading("null");
      }
    }

    fetchProjects();
  }, []);

  const widget = [
    {
      title: "Cập nhật",
      label: "update-tab",
      body: <TopBoard data={prjData} />
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
        <ProjectPane data={prjData} title="Mới Nhất" />
      </Grid>
      <Grid item xs={12} container justify="center">
        <Grid item xs={12} md={7}>
          <TabPane
            immersive
            content={mainContent}
            style={{ marginTop: "70px" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TabPane content={widget} style={{ marginTop: "70px" }} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainView;
