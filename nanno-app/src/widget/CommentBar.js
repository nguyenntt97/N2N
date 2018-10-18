import React, { Component } from "react";

const ESC_KEY = 27;
const ENT_KEY = 13;
const BCKSPC_KEY = 8;
const DEFAULT_TEXT = "Enter to focus this, Esc to unfocus";

const renderTabHead = tab => {};

class CommentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCmd: false,
      isFocus: false,
      curMsg: ""
    };
  }

  // handleKeyPress = ev => {
  //   let curMsg = "";
  //   switch (ev.keyCode) {
  //     case ESC_KEY:
  //       this.setState({
  //         isFocus: false
  //       });
  //       break;
  //     case ENT_KEY:
  //       if (!this.state.isFocus) {
  //         this.setState({
  //           isFocus: true
  //         });
  //       }
  //       break;
  //     default:
  //       if (this.state.isFocus) {
  //         if (this.state.curMsg != null) {
  //           curMsg = this.state.curMsg;
  //         }
  //         this.setState({
  //           curMsg: curMsg + String.fromCharCode(ev.keyCode)
  //         });
  //       }
  //   }
  // };

  // handleKeyUp = ev => {
  //   switch (ev.keyCode) {
  //     case BCKSPC_KEY:
  //       if (this.state.isFocus) {
  //         this.setState({
  //           curMsg: this.state.curMsg.substr(0, this.state.curMsg.length - 1)
  //         });
  //       }
  //       break;
  //   }
  // };

  // componentWillMount() {
  //   document.addEventListener("keypress", this.handleKeyPress, false);
  //   document.addEventListener("keydown", this.handleKeyUp, false);
  // }

  render() {
    return (
      <div className="comment-bar-big z-depth-2">
        <div className="other-comment">
          <div className="comment-msg">
            <div>
              <i className="tiny material-icons">forum</i>
              Comments
            </div>
          </div>
          <div className="comment-section">
            <div className="message">
              <div className="mess-header">
                <div className="mess-owner">tnguyen178</div>
                <div className="mess-date">+13 12 giờ trước</div>
              </div>
              <div className="mess-content">Truyện hay vãi</div>
            </div>
            <div className="message">
              <div className="mess-header">
                <div className="mess-owner">tnguyen178</div>
                <div className="mess-date">+13 12 giờ trước</div>
              </div>
              <div className="mess-content">Truyện hay vãi</div>
              <div className="mess-set">
                <a>trả lời</a>
              </div>
              <div className="mess-rep">
                <div className="message">
                  <div className="mess-header">
                    <div className="mess-owner">tnguyen178</div>
                    <div className="mess-date">+13 12 giờ trước</div>
                  </div>
                  <div className="mess-content">Hay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-comment">
          <div className="comment-profile">
            <img src="/sample-ava.jpg" />
            <span>[elpsychris]</span>
          </div>
          <div className="comment-content">
            <i className="small material-icons">navigate_next</i>
            <textarea rows="1">
              {this.state.curMsg == "" ? DEFAULT_TEXT : this.state.curMsg}
            </textarea>
          </div>
          <a className="waves-effect waves-light">
            <i className="material-icons right">send</i>
          </a>
        </div>
      </div>
    );
  }
}

export default CommentBar;
