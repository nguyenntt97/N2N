import React from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import { Dante } from "./dante/Dante";

import { TabPane, ProjectInfo, VolPane, DirTree, Expandable } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import Noti from "./common/Noti";

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
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  editor: {
    maxWidth: "100%"
  }
}));

export default function EditorView() {
  const classes = useStyles();
  const [chapContent, setChapContent] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [notiOpen, setNotiOpen] = React.useState(false);
  const [notiMsg, setNotiMsg] = React.useState(false);

  React.useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch("https://snk-api.herokuapp.com/chapter/2");
        const json = await response.json();

        setChapContent(json);
        setLoading(false);
      } catch (err) {}
    }

    fetchProjects();
  }, []);

  const expand_data = [
    {
      title: "My data",
      description: "Manage your posts",
      content: <DirTree directory={myDirectory} />
    },
    {
      title: "Chapter info",
      description: "Edit this chapter info",
      content: (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-basic"
              label="Title"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <Button variant="contained" color="primary">
              Update
            </Button>
          </div>
        </form>
      )
    }
  ];

  return [
    <Grid container justify="center">
      <Grid item container spacing={2} direction="column" xs={12} md={7} lg={8}>
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          style={{
            fontWeight: "bold"
          }}
        >
          Chương mới
        </Typography>

        <Grid item className={classes.editor}>
          {loading ? null : (
            <Dante
              content={
                chapContent.content ? JSON.parse(chapContent.content) : null
              }
              read_only={false}
              data_storage={{
                url: "https://snk-api.herokuapp.com/chapter/2",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                crossDomain: true
              }}
              config={{ debug: true }}
              xhr={{
                // before_handler: function () {
                //   alert('this is the before ajax handler')
                // },
                success_handler: function(rs) {
                  setNotiMsg("Auto-save: DONE!");
                  setNotiOpen(true);
                },
                failure_handler: function(error) {
                  console.log("this is the error ajax handler", error);
                }
              }}
            />
          )}
        </Grid>
      </Grid>
      <Grid item xs={8} md={4} lg={3} justify="center">
        <Grid item>
          <Expandable data={expand_data} />
        </Grid>
      </Grid>
    </Grid>,
    <Noti open={notiOpen} msg={notiMsg} setOpen={setNotiOpen} />
  ];
}

const myDirectory = [
  {
    id: "1",
    title: "My Data",
    child: [
      {
        id: "3",
        title: "Maou no Vadalis",
        child: [
          {
            id: "4",
            title: "Vol 1",
            child: [
              {
                id: "5",
                title: "Chapter 1"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              },
              {
                id: "6",
                title: "Chapter 2"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Shared Data",
    child: []
  }
];
