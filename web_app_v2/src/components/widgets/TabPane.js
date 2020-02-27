import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Theme } from "../common/theme";
import { fontFamily } from "@material-ui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3} padding={1}>
        {children}
      </Box>
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    // marginTop: Theme.spacing(5),
    // minHeight: 400,
    borderRadius: 0,
    // borderBottom: "1px solid #3e4149",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    padding: "10px !important"
  },
  indicator: {
    "&::after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderTop: "10px solid transparent",
      left: 0,
      right: 0,
      margin: "auto"
    }
  },
  tab: {
    fontFamily: "Fira Sans Condense, sans-serif",
    fontSize: 15,
    fontWeight: "bold",
    color: "secondary ",
    minWidth: 20
  }
});

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function TabPane(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={props.immersive ? 0 : 1}
      className={classes.root}
      style={props.style}
    >
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        {props.content.map(t => (
          <Tab label={t.title} key={t.title} className={classes.tab} />
        ))}
      </Tabs>
      <br />
      {props.content.map((t, i) => (
        <TabPanel value={value} index={i} key={i}>
          {t.body}
        </TabPanel>
      ))}
    </Paper>
  );
}
