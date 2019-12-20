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
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: Theme.spacing(5),
    borderRadius: 0,
    borderBottom: "1px solid #940a37"
  },
  indicator: {
    "&::after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "5px solid transparent",
      left: 0,
      right: 0,
      margin: "auto"
    }
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

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        elevation={props.immersive ? 0 : 1}
        className={props.immersive ? classes.root : null}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="white"
      >
        {props.content.map(t => (
          <Tab label={t.title} />
        ))}
      </Tabs>
      {props.content.map((t, i) => (
        <TabPanel value={value} index={i}>
          {t.body}
        </TabPanel>
      ))}
    </Paper>
  );
}
