import React, { Component } from "react";

class CommentBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment-bar-big z-depth-2">
        <div className="other-comment">
          <div className="comment-msg">Other comment</div>
        </div>
        <div className="my-comment">
          <div className="comment-content">Type your comment here</div>
          <a className="waves-effect waves-light">
            <i className="material-icons right">send</i>
          </a>
        </div>
      </div>
    );
  }
}

export default CommentBar;
