import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";

const post = (title, author, time, commentNo, followers, link) => {
  return (
    <Link to={"/projects/" + link}>
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

export default post;
