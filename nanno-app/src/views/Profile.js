import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div class="main-frame">
        <div class="edit-section container">
          <div class="main-section">
            <div class="info-section">
              <div class="ava-holder">
                <img src="/sample-ava.jpg" />
                <div class="info-panel">
                  <div class="info-name">ABC xyz</div>
                </div>
                <div class="info-stat">
                  <div class="info-comp">
                    <div class="info-type">ROLE</div>
                    <div class="info-content">Admin</div>
                  </div>
                </div>
              </div>
              <div class="detail-info" />
              <div class="comment-section container">
                <h2>Tất cả 1 bình luận</h2>
                <div class="new-message">
                  <textarea />
                  <div class="btn-set">
                    <a class="waves-effect waves-light btn-small">
                      <i class="material-icons right">delete</i>
                      Xóa
                    </a>
                    <a class="waves-effect waves-light btn-small">
                      <i class="material-icons right">send</i>
                      Đăng
                    </a>
                  </div>
                </div>
                <div class="message">
                  <div class="mess-header">
                    <div class="mess-owner">tnguyen178</div>
                    <div class="mess-date">+13 12 giờ trước</div>
                  </div>
                  <div class="mess-content">Truyện hay vãi</div>
                </div>
                <div class="message">
                  <div class="mess-header">
                    <div class="mess-owner">tnguyen178</div>
                    <div class="mess-date">+13 12 giờ trước</div>
                  </div>
                  <div class="mess-content">Truyện hay vãi</div>
                  <div class="mess-set">
                    <a>trả lời</a>
                  </div>
                  <div class="mess-rep">
                    <div class="message">
                      <div class="mess-header">
                        <div class="mess-owner">tnguyen178</div>
                        <div class="mess-date">+13 12 giờ trước</div>
                      </div>
                      <div class="mess-content">Hay kax</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-section">
            <div class="folder">
              <ul class="collection with-header">
                <li class="collection-header">
                  <h4>Thư mục</h4>
                </li>
                <li class="collection-item">Truyện</li>
                <li class="collection-item">LN</li>
                <li class="collection-item">Misc</li>
                <li class="collection-item">Alvin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
