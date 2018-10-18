import React, { Component } from "react";

class NotiBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    this.doCountDown();
  }

  doCountDown() {
    setTimeout(function() {
      document.getElementById("notification").className =
        "noti-box z-depth-1 fade-out";
    }, this.props.timeout * 1000);
  }

  render() {
    return (
      <div id="notification" className="noti-box z-depth-1 slide-in-right">
        <div className="icon-type">
          <i className="small material-icons">check_circle</i>
        </div>
        <div>
          <span>{this.props.title}</span>
          <div className="noti-msg">{this.props.msg}</div>
        </div>
      </div>
    );
  }
}

export default NotiBox;
