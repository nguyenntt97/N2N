import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NewsPane(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.data.map((item, i) => (
        <span key={i}>{item.title}</span>
      ))}
    </div>
  );
}
