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
          {renderPostItem(
            this.props.data.title,
            this.props.data.author,
            this.props.data.time,
            this.props.data.commentNo,
            this.props.data.followers
          )}

          <li className="discusss">
            <div className="thumbnail" />
            <div className="main-info">
              <span className="title">KONOSUBA chương 16</span>
              <span className="author">hungtb96</span>
              <span className="time">3 tiếng trước</span>
              <span className="comments">26 bình luận</span>
            </div>
            <div className="followers">
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower" />
              <div className="follower" />
              <div className="follower total">+5</div>
            </div>
          </li>

          <li className="discusss">
            <div className="thumbnail" />
            <div className="main-info">
              <span className="title">KONOSUBA chương 16</span>
              <span className="author">hungtb96</span>
              <span className="time">3 tiếng trước</span>
              <span className="comments">26 bình luận</span>
            </div>
            <div className="followers">
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower" />
              <div className="follower" />
              <div className="follower total">+5</div>
            </div>
          </li>

          <li className="discusss">
            <div className="thumbnail" />
            <div className="main-info">
              <span className="title">KONOSUBA chương 16</span>
              <span className="author">hungtb96</span>
              <span className="time">3 tiếng trước</span>
              <span className="comments">26 bình luận</span>
            </div>
            <div className="followers">
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower" />
              <div className="follower" />
              <div className="follower total">+5</div>
            </div>
          </li>

          <li className="discusss">
            <div className="thumbnail" />
            <div className="main-info">
              <span className="title">KONOSUBA chương 16</span>
              <span className="author">hungtb96</span>
              <span className="time">3 tiếng trước</span>
              <span className="comments">26 bình luận</span>
            </div>
            <div className="followers">
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower" />
              <div className="follower" />
              <div className="follower total">+5</div>
            </div>
          </li>

          <li className="discusss">
            <div className="thumbnail" />
            <div className="main-info">
              <span className="title">KONOSUBA chương 16</span>
              <span className="author">hungtb96</span>
              <span className="time">3 tiếng trước</span>
              <span className="comments">26 bình luận</span>
            </div>
            <div className="followers">
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower">
                <img src="sample-ava.jpg" />
              </div>
              <div className="follower" />
              <div className="follower" />
              <div className="follower total">+5</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
const renderPostItem = (title, author, time, commentNo, followers) => {
  return (
    <Link to="/project">
      Click
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
