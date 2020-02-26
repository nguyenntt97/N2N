import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function Expandable(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {props.data.map((v, i) => (
        <ExpansionPanel
          key={i}
          expanded={expanded === "panel" + i}
          onChange={handleChange("panel" + i)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={"panel" + i + "bh-content"}
            id={"panel" + i + "bh-header"}>
            <Typography className={classes.heading}>{v.title}</Typography>
            <Typography className={classes.secondaryHeading}>
              {v.description}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{v.content}</ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
