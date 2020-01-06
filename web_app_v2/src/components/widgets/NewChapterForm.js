/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: option => option.title
  };

  const flatProps = {
    options: top100Films.map(option => option.title)
  };

  const [value, setValue] = React.useState(null);

  return (
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
  );
}
