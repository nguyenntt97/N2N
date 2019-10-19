// import React, { Component } from "react";
// import { BrowserRouter as Route, Link, Router } from "react-router-dom";

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notiActive: false,
//       notiUnActive: false,
//       profileMenu: [
//         {
//           label: "View Profile",
//           href: "userprofile"
//         },
//         {
//           label: "Message Wall",
//           href: "#"
//         },
//         {
//           label: "",
//           href: ""
//         },
//         {
//           label: "Log Out",
//           href: "#"
//         }
//       ]
//     };

//     this.onNotiClick = this.onNotiClick.bind(this);
//     this.onNotiOutClick = this.onNotiOutClick.bind(this);
//   }

//   componentDidMount() {
//     document.addEventListener("click", this.onNotiOutClick);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("click", this.onNotiOutClick);
//   }

//   onNotiOutClick = e => {
//     let notiCheck = document.getElementById("noti-check");
//     if (!notiCheck.contains(e.target)) {
//       this.setState({
//         notiActive: false,
//         notiUnActive: true
//       });
//     }
//   };

//   onNotiClick = e => {
//     if (this.state.notiActive) {
//       return;
//     }
//     console.log(this.state.notiActive);

//     this.setState({
//       notiActive: true,
//       notiUnActive: false
//     });
//   };
//   render() {
//     console.log("Props", this.props.routes);
//     const pMenu = (
//       <Menu>
//         {this.state.profileMenu.map((item, idx) =>
//           item.href ? (
//             <Menu.Item key={idx}>
//               <a href={item.href}>{item.label}</a>
//             </Menu.Item>
//           ) : (
//             <Menu.Divider />
//           )
//         )}
//       </Menu>
//     );
//     return (
//       <div className="nav-head">
//         <Link to="/">
//           <div className="nav-icon">Sonako</div>
//         </Link>
//         {this.props.breadcrumb.map((bread, index) => {
//           return [
//             <i className="small material-icons">chevron_right</i>,
//             index == this.props.breadcrumb.length - 1 ? (
//               <div className="nav-item">{bread.label}</div>
//             ) : (
//               <Link to={bread.href}>
//                 <div className="nav-item">{bread.label}</div>
//               </Link>
//             )
//           ];
//         })}
//         {/* <div className="nav-item item-cur">Re:Zero</div>
//         <div className="nav-item-item" /> */}
//         <div className="custom-bar" id="noti-check">
//           <div
//             className={
//               (this.state.notiUnActive ? "unactive" : "") +
//               (this.state.notiActive ? " active" : "") +
//               " board-noti"
//             }
//             onClick={this.onNotiClick}
//           >
//             <div>+3</div>
//             <span />
//             <ul className="z-depth-1">
//               <li>
//                 <img src="/sample-ava.jpg" />
//                 <div className="noti-content">
//                   <span className="board-noti-title">
//                     Tại sao các cô gái Việt Nam lại rất xinh xắn
//                   </span>
//                   <span className="board-noti-time">1 hour ago</span>
//                 </div>
//               </li>
//               <li>
//                 <img src="/sample-ava.jpg" />
//                 <div className="noti-content">
//                   <span className="board-noti-title">
//                     Tại sao các cô gái Việt Nam lại rất xinh xắn
//                   </span>
//                   <span className="board-noti-time">1 hour ago</span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="my-profile">
//             <div className={"avatar custom-img"}>
//               {/* thử antd và css module */}
//               <Dropdown
//                 overlay={pMenu}
//                 // overlayClassName={styles.hihi}
//                 trigger={["click"]}
//               >
//                 <a className="ant-dropdown-link">
//                   <img src="/sample-ava.jpg" />
//                 </a>
//               </Dropdown>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NavBar;
