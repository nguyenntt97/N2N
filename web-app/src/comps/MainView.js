import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import SideWidget from "./widgets/SideWidget";
// import GuildBoard from "./widgets/GuildBoard";
import GuildBoard from "../containers/GuildBoard";

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
          <GuildBoard />
          <SideWidget />
        </div>
        <script type="text/javascript" src="js/materialize.min.js" />
      </div>
    );
  }
}

export default Mainpage;
