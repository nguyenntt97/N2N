import React from "react";

import { Typography, Divider, Box } from "@material-ui/core";
import ChatView from "../chat/ChatView";

export default function CommentBox(props) {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          color: "#3f72af"
        }}
      >
        Bình luận
      </Typography>
      <Divider />
      <Box
        component="div"
        style={{
          padding: "0px 20px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <ChatView data={props.COMMENT} />
      </Box>
    </React.Fragment>
  );
}
