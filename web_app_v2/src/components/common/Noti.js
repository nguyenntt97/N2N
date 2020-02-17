import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

export default function Noti(props) {
  const handleNotiClose = (ev, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.setOpen(false);
  };

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={handleNotiClose}
    >
      <Alert
        onClose={handleNotiClose}
        severity={props.notiType ? props.notiType : "success"}
      >
        {props.msg}
      </Alert>
    </Snackbar>
  );
}
