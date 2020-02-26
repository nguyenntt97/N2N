import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { TabPane, ProjectInfo, VolPane, CommentBox } from "./widgets";
import { TopBoard } from "./widgets/CommonWidget";

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
        "-webkit-linear-gradient( right, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 0.8) 50%, rgba( 255, 255, 255, 1 ) 100% )",
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
    position: "relative",
    transition: "all .3s ease-in-out"
  },
  mask: {
    position: "absolute",
    background: "rgba(255,200,200,0.5)",
    width: "100%",
    height: "100%",
    zIndex: 4,
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
    marginBottom: 5,
    "&:hover": {
      cursor: "pointer",
      "& $longthumb": {
        top: "-60%"
      }
    }
  },
  itemTitle: {
    position: "absolute",
    left: 70,
    zIndex: 10,
    fontWeight: "bold"
  }
}));

const generateVolViews = volData =>
  volData !== []
    ? volData.map(v => ({
      title: v.title,
      body: <VolPane
        avatar={v.cover}
        chapters={v.chapList} />
    }))
    : [
      {
        title: "Tập trống",
        body: <VolPane avatar="/img/loading.gif" empty />
      }
    ];

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

const getProjectId = () => {
  let urlList = window.location.pathname.split("/");
  return urlList[urlList.length - 1];
};

export default function ProjectView() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [prjData, setPrjData] = React.useState([]);
  const [thisPrjData, setThisPrjData] = React.useState([]);
  const [loading, setLoading] = React.useState("false");
  const [projectLoading, setProjectLoading] = React.useState(false);

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

  React.useEffect(() => {
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

    async function fetchThisProject() {
      try {
        setProjectLoading(true);
        const response = await fetch(
          "http://sonako.codes:8080/project?id=" + getProjectId()
        );
        const json = await response.json();

        setThisPrjData(json);
        setProjectLoading(false);
      } catch (err) {
        setProjectLoading("null");
      }
    }

    fetchProjects();
    fetchThisProject();
  }, []);

  return (
    <Grid container justify="space-between" style={{
      padding: 5
    }}>
      <Grid item container xs={12} md={7} justify="center">
        <Grid item xs={12}>
          <ProjectInfo prjData={thisPrjData} loading={projectLoading} />
        </Grid>
        <Grid item xs={12} >
          <TabPane
            content={generateVolViews(
              thisPrjData.volInfo ? thisPrjData.volInfo : []
            )}
            immersive
          />
        </Grid>
        <Grid item xs={12} style={{ padding: 10 }}>
          <CommentBox content={COMMENT} />
        </Grid>
      </Grid>
      <Grid item container xs={6} md={4} justify="center">
        <TabPane content={widget} />
      </Grid>
    </Grid>
  );
}






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

