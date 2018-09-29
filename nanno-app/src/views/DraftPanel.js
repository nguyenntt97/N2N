import React, { Component } from "react";

class DraftPanel extends Component {
  render() {
    return (
      <div class="main-frame">
        <div class="edit-section container">
          <div class="main-section">
            <div class="dir-bar">
              <input type="text" />
            </div>
            <div class="main-area">
              <div class="list-section">
                <i class="small material-icons">format_align_left</i>
                <i class="small material-icons">format_align_center</i>
                <i class="small material-icons">format_align_right</i>
              </div>
              <div class="title-section">
                <input class="post-title" type="text" placeholder="Tiêu đề" />
                <div class="msg-box" />
              </div>
              <textarea class="post-content">
                Nhập hoặc paste nội dung (Ctrl + V) vào đây
              </textarea>
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

export default DraftPanel;
