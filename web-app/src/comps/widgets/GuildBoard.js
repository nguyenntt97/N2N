import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import post from "../GuildNews";

class GuildBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="guild-content">
        <h4>GUILD BOARD</h4>
        <ul className="list-discuss">
          {this.props.data.map(postItem =>
            post(
              postItem.title,
              postItem.author,
              postItem.time,
              postItem.commentNo,
              postItem.followers,
              postItem.link
            )
          )}
        </ul>
      </div>
    );
  }
}

export default GuildBoard;
