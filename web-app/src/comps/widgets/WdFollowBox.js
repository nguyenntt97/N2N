import React, { Component } from "react";

class FollowPanel extends Component {
  render() {
    return (
      <div class="main-content container">
        <div class="row">
          <div class="content col s8">
            <h5>Danh sách theo dõi</h5>
            <ul class="watchlist">
              <li>
                <div class="info-date">
                  <span class="date-day">14</span>
                  <span class="date-month">Tháng 7</span>
                </div>
                <div class="info-title">Re:Zero</div>
                <img class="info-thumb" src="sample.png" />
              </li>
              <li>
                <div class="info-date">
                  <span class="date-day">14</span>
                  <span class="date-month">Tháng 7</span>
                </div>
                <div class="info-title">Re:Zero</div>
                <img class="info-thumb" src="sample.png" />
              </li>
              <li>
                <div class="info-date">
                  <span class="date-day">14</span>
                  <span class="date-month">Tháng 7</span>
                </div>
                <div class="info-title">Re:Zero</div>
                <img class="info-thumb" src="sample.png" />
              </li>
            </ul>
          </div>
          <div class="side-content col s4">
            <div class="list">
              <h6>QUAN TÂM</h6>
              <div class="list-wig">
                <div class="wig-item z-depth-1">Topic A</div>
                <div class="wig-item z-depth-1">
                  <span class="new badge">4</span>
                  Topic B
                </div>
                <div class="wig-item z-depth-1">Topic C</div>
                <div class="wig-item z-depth-1">Topic D</div>
                <div class="wig-item z-depth-1">Topic E</div>
              </div>
            </div>

            <div class="list">
              <h6>NỔI BẬT</h6>
              <div class="collection">
                <div class="collection-item">Topic A</div>
                <div class="collection-item">
                  <span class="new badge">4</span>
                  Topic B
                </div>
                <div class="collection-item">Topic C</div>
                <div class="collection-item">Topic D</div>
                <div class="collection-item">Topic E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowPanel;
