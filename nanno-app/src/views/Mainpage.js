import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from "./Projects";

const sample_data = {
  title: "KONOSUBA chương 16",
  author: "hungtb96",
  time: "3 tiếng trước",
  comments: "26 bình luận",
  followers: {
    followList: [
      { ava: "sample-ava.jpg" },
      { ava: "sample-ava.jpg" },
      { ava: "sample-ava.jpg" },
      { ava: "sample-ava.jpg" },
      { ava: "sample-ava.jpg" }
    ],
    total: 7
  }
};
class Mainpage extends React.Component {
  render() {
    return (
      <div className="mainpage-content">
        <div className="main-content container">
          <div className="row">
            <div className="content col s12">
              <div className="event-timeline">
                <h5>SỰ KIỆN</h5>
                <div className="timeline">
                  <div className="event">
                    <div className="event-info">
                      <div className="date">21 Th.7</div>
                      <div className="event-name">KONOSUBA tập 2</div>
                      <div className="review">
                        FitText will allow you to scale some text in relation to
                        the container it is in, while BigText is more about
                        resizing different sections of text to be the same width
                        within the container.
                      </div>
                    </div>
                  </div>

                  <div className="event">
                    <div className="event-info">
                      <div className="date">21 Th.7</div>
                      <div className="event-name">KONOSUBA tập 2</div>
                      <div className="review">
                        FitText will allow you to scale some text in relation to
                        the container it is in, while BigText is more about
                        resizing different sections of text to be the same width
                        within the container.
                      </div>
                    </div>
                  </div>

                  <div className="event">
                    <div className="event-info">
                      <div className="date">21 Th.7</div>
                      <div className="event-name">KONOSUBA tập 2</div>
                      <div className="review">
                        FitText will allow you to scale some text in relation to
                        the container it is in, while BigText is more about
                        resizing different sections of text to be the same width
                        within the container.
                      </div>
                    </div>
                  </div>

                  <div className="event">
                    <div className="event-info">
                      <div className="date">21 Th.7</div>
                      <div className="event-name">KONOSUBA tập 2</div>
                      <div className="review">
                        FitText will allow you to scale some text in relation to
                        the container it is in, while BigText is more about
                        resizing different sections of text to be the same width
                        within the container.
                      </div>
                    </div>
                  </div>

                  <div className="event">
                    <div className="event-info">
                      <div className="date">21 Th.7</div>
                      <div className="event-name">KONOSUBA tập 2</div>
                      <div className="review">
                        FitText will allow you to scale some text in relation to
                        the container it is in, while BigText is more about
                        resizing different sections of text to be the same width
                        within the container.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content col s8">
              <h4>GUILD BOARD</h4>
              <ul className="list-discuss">
                {renderPostItem(
                  sample_data.title,
                  sample_data.author,
                  sample_data.time,
                  sample_data.commentNo,
                  sample_data.followers
                )}

                <li className="discusss">
                  <div className="thumbnail" />
                  <div className="main-info">
                    <span className="title">KONOSUBA chương 16</span>
                    <span className="author">hungtb96</span>
                    <span className="time">3 tiếng trước</span>
                    <span className="comments">26 bình luận</span>
                  </div>
                  <div className="followers">
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower" />
                    <div className="follower" />
                    <div className="follower total">+5</div>
                  </div>
                </li>

                <li className="discusss">
                  <div className="thumbnail" />
                  <div className="main-info">
                    <span className="title">KONOSUBA chương 16</span>
                    <span className="author">hungtb96</span>
                    <span className="time">3 tiếng trước</span>
                    <span className="comments">26 bình luận</span>
                  </div>
                  <div className="followers">
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower" />
                    <div className="follower" />
                    <div className="follower total">+5</div>
                  </div>
                </li>

                <li className="discusss">
                  <div className="thumbnail" />
                  <div className="main-info">
                    <span className="title">KONOSUBA chương 16</span>
                    <span className="author">hungtb96</span>
                    <span className="time">3 tiếng trước</span>
                    <span className="comments">26 bình luận</span>
                  </div>
                  <div className="followers">
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower" />
                    <div className="follower" />
                    <div className="follower total">+5</div>
                  </div>
                </li>

                <li className="discusss">
                  <div className="thumbnail" />
                  <div className="main-info">
                    <span className="title">KONOSUBA chương 16</span>
                    <span className="author">hungtb96</span>
                    <span className="time">3 tiếng trước</span>
                    <span className="comments">26 bình luận</span>
                  </div>
                  <div className="followers">
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower" />
                    <div className="follower" />
                    <div className="follower total">+5</div>
                  </div>
                </li>

                <li className="discusss">
                  <div className="thumbnail" />
                  <div className="main-info">
                    <span className="title">KONOSUBA chương 16</span>
                    <span className="author">hungtb96</span>
                    <span className="time">3 tiếng trước</span>
                    <span className="comments">26 bình luận</span>
                  </div>
                  <div className="followers">
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower">
                      <img src="sample-ava.jpg" />
                    </div>
                    <div className="follower" />
                    <div className="follower" />
                    <div className="follower total">+5</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="side-content col s4">
              <div className="list">
                <h6>QUAN TÂM</h6>
                <div className="list-wig">
                  <div className="wig-item z-depth-1">Topic A</div>
                  <div className="wig-item z-depth-1">
                    <span className="new badge">4</span>
                    Topic B
                  </div>
                  <div className="wig-item z-depth-1">Topic C</div>
                  <div className="wig-item z-depth-1">Topic D</div>
                  <div className="wig-item z-depth-1">Topic E</div>
                </div>
              </div>

              <div className="list">
                <h6>NỔI BẬT</h6>
                <div className="collection">
                  <div className="collection-item">Topic A</div>
                  <div className="collection-item">
                    <span className="new badge">4</span>
                    Topic B
                  </div>
                  <div className="collection-item">Topic C</div>
                  <div className="collection-item">Topic D</div>
                  <div className="collection-item">Topic E</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script type="text/javascript" src="js/materialize.min.js" />
      </div>
    );
  }
}

const renderPostItem = (title, author, time, commentNo, followers) => {
  return (
    <Link to="/project">
      Click
      <li className="discusss">
        <div className="thumbnail" />
        <div className="main-info">
          <span className="title">{title}</span>
          <span className="author">{author}</span>
          <span className="time">{time}</span>
          <span className="comments">{commentNo}</span>
        </div>
        <div className="followers">
          {followers.followList.map(follower => (
            <div className="follower" key={follower.id}>
              <img src={follower.ava} />
            </div>
          ))}
          <div className="follower total">+{followers.total}</div>
        </div>
      </li>
    </Link>
  );
};

export default Mainpage;
