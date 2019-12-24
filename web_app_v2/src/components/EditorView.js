import React from "react";
import Grid from "@material-ui/core/Grid";
import clsx from 'clsx'
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { TabPane, ProjectInfo, VolPane } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import { Typography, Divider } from "@material-ui/core";
import { Dante } from "./dante/Dante"
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
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


export default function EditorView() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justify="center">
      <Grid item container spacing={2} direction="column" xs={12} md={7} lg={8}>
        <Grid item>
          <div className={classes.root}>
            <Typography
              variant="h6"
              style={{
                color: "#4a47a3",
                fontWeight: "bold"
              }}
            >
              Cài đặt chương mới
            </Typography>
            <ExpansionPanel defaultExpanded>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography className={classes.heading}>Tập truyện</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>Chọn thể loại</Typography>
                </div>
                <div className={classes.column}>
                  <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={event => event.stopPropagation()}
                    onFocus={event => event.stopPropagation()}
                    control={<Checkbox />}
                    label="Tập truyện mới"
                  />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column}>
                  <Chip label="Barbados" onDelete={() => { }} />
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">Save</Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography className={classes.heading}>Thể loại</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>Chọn thể loại</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column}>
                  <Chip label="Barbados" onDelete={() => { }} />
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">Save</Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
          </div>
        </Grid>
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
        <TabPane content={widget} />
      </Grid>
    </Grid>
  );

}
