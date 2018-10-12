import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="project-comp">
        <div className="main-content container">
          <div className="row">
            <div className="col s9 vol-col">
              <div className="vol-background">
                <img src="bg.jpg" />
              </div>
              <div className="vol-list">
                <div className="card small vol-item order-3">
                  <div className="card-image waves-effect waves-block waves-light card-image-thumb">
                    <img
                      className="activator vol-thumb"
                      src="vol1_sample.jpg"
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
                      src="vol1_sample.jpg"
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
                      src="vol1_sample.jpg"
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
            <div className="col s4" />
          </div>
        </div>

        <div className="vol-body container">
          <ul className="vol-tab">
            <li onClick={e => changeTab(e, 0)} className="cur-tab">
              Tập 1
            </li>
            <li onClick={e => changeTab(e, 1)}>Tập 2</li>
            <li onClick={e => changeTab(e, 2)}>Tập 3</li>
            <li onClick={e => changeTab(e, 3)}>Tập 4</li>
            <li onClick={e => changeTab(e, 4)}>Tập 5</li>
            <li onClick={e => changeTab(e, 5)}>Tập 6</li>
          </ul>
          <div className="vol-content">
            <div className="vol-card z-depth-1">
              <div className="vol-cover">
                <img className="z-depth-2" src="vol1_sample.jpg" />
              </div>
              <div className="chap-list">
                <a className="vol-title">TẬP 1</a>
                <a href="#">Chương 1</a>
                <a href="#">Chương 2</a>
                <a href="#">Chương 3</a>
                <a href="#">Chương 4</a>
                <a href="#">Chương 5</a>
                <a href="#">Chương 6</a>
                <a href="#">Chương 7</a>
                <a href="#">Chương 8</a>
                <a href="#">Chương 9</a>
                <a href="#">Chương 10</a>
                <a href="#">Chương 11</a>
                <a href="#">Chương 1</a>
                <a href="#">Chương 2</a>
                <a href="#">Chương 3</a>
                <a href="#">Chương 4</a>
                <a href="#">Chương 5</a>
                <a href="#">Chương 6</a>
                <a href="#">Chương 7</a>
                <a href="#">Chương 8</a>
                <a href="#">Chương 9</a>
                <a href="#">Chương 10</a>
                <a href="#">Chương 11</a>
                <a href="#">Chương 1</a>
                <a href="#">Chương 2</a>
                <a href="#">Chương 3</a>
                <a href="#">Chương 4</a>
                <a href="#">Chương 5</a>
                <a href="#">Chương 6</a>
                <a href="#">Chương 7</a>
                <a href="#">Chương 8</a>
                <a href="#">Chương 9</a>
                <a href="#">Chương 10</a>
                <a href="#">Chương 11</a>
              </div>
            </div>
          </div>
        </div>

        <div className="comment-section container">
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
                <div className="mess-content">Hay kax</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const changeTab = (e, iNew) => {
  let curTab = document.getElementsByClassName("cur-tab")[0];
  if (curTab == e.target) {
    return;
  }
  let iCur = Array.from(curTab.parentElement.children).indexOf(curTab);
  curTab.className = "";
  e.target.className = iNew > iCur ? "cur-tab tab-left" : "cur-tab tab-right";
};

export default Projects;
