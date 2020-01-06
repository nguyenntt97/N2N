import React from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { TabPane, ProjectInfo, VolPane, DirTree } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import { Typography, Divider } from "@material-ui/core";
import { Dante } from "./dante/Dante";
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
  }
}));

export default function EditorView() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justify="center">
      <Grid item container spacing={2} direction="column" xs={12} md={7} lg={8}>
        <Grid item>
          <Dante
            content={null}
            read_only={false}
            data_storage={{
              save_handler: (editorContext, content) => {
                console.log(editorContext, content);
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={8} md={4} lg={3} justify="center">
        <Grid item>
          <div className={classes.root}>
            <Typography
              variant="h5"
              style={{
                color: "#005691",
                fontWeight: "bold"
              }}
            >
              Cài đặt chương mới
            </Typography>
            <DirTree directory={myDirectory} />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
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
