import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-head">
        <div className="nav-icon">Nanno</div>
        {this.props.routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
        <div className="nav-item item-cur">Re:Zero</div>
        <div className="nav-item-item" />
        <div className="custom-bar">
          <div className="board-noti">
            Board
            <div>+3</div>
            <ul className="z-depth-1">
              <li>
                <img src="/sample-ava.jpg" />
                <div className="noti-content">
                  <span className="board-noti-title">
                    Tại sao các cô gái Việt Nam lại rất xinh xắn
                  </span>
                  <span className="board-noti-time">1 hour ago</span>
                </div>
              </li>
              <li>
                <img src="/sample-ava.jpg" />
                <div className="noti-content">
                  <span className="board-noti-title">
                    Tại sao các cô gái Việt Nam lại rất xinh xắn
                  </span>
                  <span className="board-noti-time">1 hour ago</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="my-profile">
            <div className="avatar custom-img">
              <Link to="/follow/me">
                <img src="/sample-ava.jpg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
