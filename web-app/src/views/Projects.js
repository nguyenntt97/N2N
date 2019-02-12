import React from "react";
import Pagination from "../widget/Pagination";
import CommentBar from "../widget/CommentBar";
import ModalBox from "../widget/NotiBox";

import { Link } from "react-router-dom";
import FavBtn from "../lib/FavBtn";
import ScoreBoard from "../lib/ScoreBoard";

const CHAP_VOL_DATA = [
  {
    "vol-id": "1",
    "vol-name": "The Beginning",
    "vol-sum":
      "Tập 2 nối tiếp câu chuyện kể về cuộc phiêu lưu của nhóm và những thử thách được đặt ra...",
    "vol-ava": "/vol1_sample.jpg",
    "chap-data": [
      {
        "chap-id": "1",
        "chap-name": "The return of the King",
        "chap-link": "v1c1"
      },
      {
        "chap-id": "2",
        "chap-name": "The return of the Queen"
      },
      {
        "chap-id": "3",
        "chap-name": "The return of the Butler"
      },
      {
        "chap-id": "4",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "5",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "6",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "7",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "8",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "9",
        "chap-name": "The return of the Chef"
      }
    ]
  },
  {
    "vol-id": "2",
    "vol-name": "The Starting",
    "vol-ava": "/vol1_sample.jpg",
    "chap-data": [
      {
        "chap-id": "1",
        "chap-name": "The return of the King"
      },
      {
        "chap-id": "2",
        "chap-name": "The return of the Queen"
      },
      {
        "chap-id": "3",
        "chap-name": "The return of the Butler"
      },
      {
        "chap-id": "4",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "5",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "6",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "7",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "8",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "9",
        "chap-name": "The return of the Chef"
      }
    ]
  },
  {
    "vol-id": "3",
    "vol-name": "The Ending",
    "vol-ava": "/vol1_sample.jpg",
    "chap-data": [
      {
        "chap-id": "1",
        "chap-name": "The return of the King"
      },
      {
        "chap-id": "2",
        "chap-name": "The return of the Queen"
      },
      {
        "chap-id": "3",
        "chap-name": "The return of the Butler"
      },
      {
        "chap-id": "4",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "5",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "6",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "7",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "8",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "9",
        "chap-name": "The return of the Chef"
      }
    ]
  },
  {
    "vol-id": "4",
    "vol-name": "The Epilogue",
    "vol-ava": "/vol1_sample.jpg",
    "chap-data": [
      {
        "chap-id": "1",
        "chap-name": "The return of the King"
      },
      {
        "chap-id": "2",
        "chap-name": "The return of the Queen"
      },
      {
        "chap-id": "3",
        "chap-name": "The return of the Butler"
      },
      {
        "chap-id": "4",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "5",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "6",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "7",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "8",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "9",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "10",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "11",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "12",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "13",
        "chap-name": "The return of the Chef"
      },
      {
        "chap-id": "14",
        "chap-name": "The return of the Chef"
      }
    ]
  }
];

const MAX_ITEM_NUM = 5;
const getDisplayRange = (pgNum, chapList) => {
  let sId = (pgNum - 1) * MAX_ITEM_NUM;
  let eId = sId + MAX_ITEM_NUM - 1;

  if (eId > chapList.length - 1) {
    eId = chapList.length - 1;
  }
  return {
    sId: sId,
    eId: eId
  };
};

const getPageRange = (curPage, chapList) => {
  let totalPageNum = Math.ceil(chapList.length / MAX_ITEM_NUM);
  let sId = curPage - 2;
  if (sId < 1) {
    sId = 1;
  }
  let eId = sId + 4;
  if (eId > totalPageNum) {
    eId = totalPageNum;
  }

  return {
    sId: sId,
    eId: eId
  };
};

const onNotiRender = modalObj => {
  if (modalObj == null) {
    return;
  }
  return (
    <ModalBox title={modalObj["title"]} msg={modalObj["msg"]} timeout={5} />
  );
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curVol: 0,
      curChap: 0,
      curPagChap: 1,
      modal: {
        title: "Message",
        type: 1,
        msg: "This is a mockup message"
      }
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onChapterFocus(e, index) {
    this.setState({
      curChap: index
    });
  }

  onPageChange(newPage) {
    this.setState({
      curPagChap: newPage
    });
  }

  onRenderVol() {
    let curVolData = CHAP_VOL_DATA[this.state.curVol];
    let rangeObj = getDisplayRange(
      this.state.curPagChap,
      curVolData["chap-data"]
    );

    let pageRangeObj = getPageRange(
      this.state.curPagChap,
      curVolData["chap-data"]
    );

    console.log(rangeObj);
    let sId = rangeObj["sId"];
    let eId = rangeObj["eId"];

    let pSId = pageRangeObj["sId"];
    let pEId = pageRangeObj["eId"];
    return (
      <div className="vol-content">
        {onNotiRender(this.state.modal)}
        <div className="vol-card">
          <div className="vol-cover">
            <div className="vol-sum">{curVolData["vol-sum"]}</div>
            <div className="vol-border" />
            <img className="responsive-img" src={curVolData["vol-ava"]} />
          </div>
          <div className="chap-list">
            <a className="vol-title">TẬP {curVolData["vol-id"]}</a>
            {curVolData["chap-data"]
              .slice(sId, eId + 1)
              .map((chapter, index) => (
                <Link
                  key={index}
                  to={"aaa/" + chapter["chap-link"]}
                  className="chapter"
                >
                  <b>
                    Chương{" "}
                    {chapter["chap-id"] == null ? "#" : chapter["chap-id"]}:
                  </b>{" "}
                  {chapter["chap-name"]}
                </Link>
              ))}
            <Pagination
              event={this.onPageChange}
              pStart={pSId}
              pEnd={pEId}
              pCur={this.state.curPagChap}
            />
          </div>
          {/* <div className="vol-banner">
            <img className="background-banner" src="bg1.jpg" />
            <img className="main-banner" src="bg1.jpg" />
          </div> */}
        </div>
      </div>
    );
  }

  onRenderTab() {
    return CHAP_VOL_DATA.map((vol, index) => {
      if (index == 0) {
        return (
          <li
            key={index}
            onClick={e => this.onChangeTab(e, index)}
            className="cur-tab"
          >
            TẬP {vol["vol-id"]}
          </li>
        );
      } else {
        return (
          <li key={index} onClick={e => this.onChangeTab(e, index)}>
            TẬP {vol["vol-id"]}
          </li>
        );
      }
    });
  }

  onChangeTab(e, iNew) {
    let curTab = document.getElementsByClassName("cur-tab")[0];
    if (curTab == e.target) {
      return;
    }
    let iCur = Array.from(curTab.parentElement.children).indexOf(curTab);
    this.setState({
      curVol: iNew
    });
    curTab.className = "";
    e.target.className = iNew > iCur ? "cur-tab tab-left" : "cur-tab tab-right";
  }

  render() {
    return (
      <div className="content-section">
        <div className="project-comp">
          <div className="row">
            <div className="vol-col">
              <div className="vol-background">
                <img src="/bg.jpg" />
              </div>
              <div className="projects-actions">
                {/* <FavBtn /> */}
                <ScoreBoard />
              </div>
              <div className="vol-list">
                <div className="card small vol-item order-3">
                  <div className="card-image waves-effect waves-block waves-light card-image-thumb">
                    <img
                      className="activator vol-thumb"
                      src="/vol1_sample.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Tập 1<i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      <a href="#">This is a link</a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Tập 1<i className="material-icons right">close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  </div>
                </div>

                <div className="card small vol-item order-2">
                  <div className="card-image waves-effect waves-block waves-light card-image-thumb">
                    <img
                      className="activator vol-thumb"
                      src="/vol1_sample.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Tập 2<i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      <a href="#">This is a link</a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Tập 2<i className="material-icons right">close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  </div>
                </div>

                <div className="card small vol-item">
                  <div className="card-image waves-effect waves-block waves-light card-image-thumb">
                    <img
                      className="activator vol-thumb"
                      src="/vol1_sample.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Tập 3<i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      <a href="#">This is a link</a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Tập 3<i className="material-icons right">close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vol-body">
            <ul className="vol-tab">{this.onRenderTab()}</ul>
            {this.onRenderVol()}
          </div>

          {/* <div className="comment-section container">
          <h2>Tất cả 1 bình luận</h2>
          <div className="new-message">
            <textarea />
            <div className="btn-set">
              <a className="waves-effect waves-light btn-small">
                <i className="material-icons right">delete</i>
                Xóa
              </a>
              <a className="waves-effect waves-light btn-small">
                <i className="material-icons right">send</i>
                Đăng
              </a>
            </div>
          </div>
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
        </div> */}
        </div>
        <CommentBar />
      </div>
    );
  }
}

export default Projects;
