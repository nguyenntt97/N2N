import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import { ProjectPane, TabPane, NewsPane } from "./widgets";
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
        const response = await fetch("https://snk-api.herokuapp.com/projects");

        const json = await response.json();

        setPrjData(json);
      } catch (err) {
        setLoading("null");
      }
    }

    fetchProjects();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} md={8}>
        <ProjectPane data={prjData} title="Mới Nhất" />
        <TabPane
          immersive
          content={mainContent}
          style={{ marginTop: "70px" }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TabPane content={widget} />
      </Grid>
    </Grid>
  );
}

export default MainView;
