import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
            renderPostItem(
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
const renderPostItem = (title, author, time, commentNo, followers, link) => {
  return (
    <Link to={link}>
      <li className="discusss">
        <div className="thumbnail" />
        <div className="main-info">
          <span className="title">{title}</span>
          <span className="author">{author}</span>
          <span className="time">{time}</span>
          <span className="comments">{commentNo}</span>
        </div>
        <div className="followers">
          {followers.followList.map(follower => (
            <div className="follower" key={follower.id}>
              <img src={follower.ava} />
            </div>
          ))}
          <div className="follower total">+{followers.total}</div>
        </div>
      </li>
    </Link>
  );
};

export default GuildBoard;
