import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from "../Projects";
import SideWidget from "../../widget/SideWidget";
import GuildBoard from "../../widget/GuildBoard";

const sample_data = [
  {
    title: "RE-ZERO chương 16",
    author: "hungtb96",
    time: "3 tiếng trước",
    comments: "26 bình luận",
    link: "re-zero",
    followers: {
      followList: [
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" }
      ],
      total: 7
    }
  },
  {
    title: "KONOSUBA chương 15",
    author: "hungtb96",
    time: "5 tiếng trước",
    comments: "21 bình luận",
    link: "konosuba",
    followers: {
      followList: [
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" },
        { ava: "/sample-ava.jpg" }
      ],
      total: 7
    }
  }
];
class Mainpage extends React.Component {
  render() {
    return (
      <div className="content-section">
        <div className="row">
          <div className="event-timeline">
            <h5>SỰ KIỆN</h5>
            <div className="timeline">
              <div className="event">
                <div className="event-info">
                  <div className="date">21 Th.7</div>
                  <div className="event-name">KONOSUBA tập 2</div>
                  <div className="review">
                    FitText will allow you to scale some text in relation to the
                    container it is in, while BigText is more about resizing
                    different sections of text to be the same width within the
                    container.
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="event-info">
                  <div className="date">21 Th.7</div>
                  <div className="event-name">KONOSUBA tập 2</div>
                  <div className="review">
                    FitText will allow you to scale some text in relation to the
                    container it is in, while BigText is more about resizing
                    different sections of text to be the same width within the
                    container.
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="event-info">
                  <div className="date">21 Th.7</div>
                  <div className="event-name">KONOSUBA tập 2</div>
                  <div className="review">
                    FitText will allow you to scale some text in relation to the
                    container it is in, while BigText is more about resizing
                    different sections of text to be the same width within the
                    container.
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="event-info">
                  <div className="date">21 Th.7</div>
                  <div className="event-name">KONOSUBA tập 2</div>
                  <div className="review">
                    FitText will allow you to scale some text in relation to the
                    container it is in, while BigText is more about resizing
                    different sections of text to be the same width within the
                    container.
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="event-info">
                  <div className="date">21 Th.7</div>
                  <div className="event-name">KONOSUBA tập 2</div>
                  <div className="review">
                    FitText will allow you to scale some text in relation to the
                    container it is in, while BigText is more about resizing
                    different sections of text to be the same width within the
                    container.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <GuildBoard data={sample_data} />
          <SideWidget />
        </div>
        <script type="text/javascript" src="js/materialize.min.js" />
      </div>
    );
  }
}

export default Mainpage;
