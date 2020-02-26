import React from "react"


import { Typography, Divider } from "@material-ui/core";
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
            <ChatView data={props.COMMENT} />
        </React.Fragment>
    )
}
