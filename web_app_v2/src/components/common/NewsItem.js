import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

const ESC_KEY = 27;
const ENT_KEY = 13;
const BCKSPC_KEY = 8;
const DEFAULT_TEXT = "Enter to focus this, Esc to unfocus";

const renderTabHead = tab => {};

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCmd: false,
      isFocus: false,
      curMsg: ""
    };
  }

  render() {
    return (
      <Paper elevation={0} width={500} height={400}>
        <div>Item 1</div>
      </Paper>
    );
  }
}

export default NewsItem;
