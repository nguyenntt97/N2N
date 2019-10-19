import React from "react";

class ScoreBoard extends React.Component {
  componentDidMount() {
    var i = 0,
      prec;
    var degs = document.getElementById("prec").classList[2];
    var activeBorder = document.getElementById("activeBorder");

    setTimeout(function() {
      loopit("c");
    }, 500);

    function loopit(dir) {
      let isCont = true;
      console.log(i, degs);
      if (dir == "c") i = i + 2;
      else i = i - 2;

      if (i < 0) {
        i = 0;
        isCont = false;
      }
      if (i > degs) {
        i = degs;
        isCont = false;
      }
      prec = (100 * i) / 360;
      document.getElementById("prec").innerHTML = (
        Math.round(prec * 5) / 100
      ).toFixed(2);

      if (i <= 180) {
        activeBorder.style.backgroundImage =
          "linear-gradient(" +
          (90 + i) +
          "deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)";
      } else {
        activeBorder.style.backgroundImage =
          "linear-gradient(" +
          (i - 90) +
          "deg, transparent 50%, #a12a6c 50%),linear-gradient(90deg, white 50%, transparent 50%)";
      }

      if (isCont == true) {
        setTimeout(function() {
          loopit("c");
        }, 1);
      }
    }
  }

  render() {
    return (
      <div className="project-score-board z-depth-1">
        <div id="activeBorder" class="active-border">
          <ul className="your-score">
            <i id="1-star" className="material-icons">
              star
            </i>
            <i id="2-star" className="material-icons">
              star
            </i>
            <i id="3-star" className="material-icons">
              star
            </i>
            <i id="4-star" className="material-icons">
              star
            </i>
            <i id="5-star" className="material-icons">
              star
            </i>
          </ul>
          <div className="wave -one" />
          <div className="wave -two" />
          <div className="wave -three" />
          <div id="circle" class="circle">
            <span className="cur-score prec 320" id="prec">
              0
            </span>
          </div>
        </div>
        {/* <div className="rank-board z-depth-1">
          <span className="rank-num">63</span>
          <span className="rank-title">TOP THÁNG</span>
          <span className="rank-total-mem">3.3ng</span>
        </div> */}
      </div>
    );
  }
}

export default ScoreBoard;
