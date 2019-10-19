import React, { Component } from "react";

const renderPages = (start, end, active, event) => {
  let htmlContent = [];
  for (let i = start; i <= end; i++) {
    if (active == i) {
      htmlContent.push(
        <li key={i} className="active">
          <a href="#!">{active}</a>
        </li>
      );
    } else {
      console.log("count: " + i);
      htmlContent.push(
        <li key={i} className="waves-effect">
          <a href="#!" onClick={() => event(i)}>
            {i}
          </a>
        </li>
      );
    }
  }
  console.log(htmlContent, start, end);
  return htmlContent;
};
class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.event);
    return (
      <ul className="pagination">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>

        {renderPages(
          this.props.pStart,
          this.props.pEnd,
          this.props.pCur,
          this.props.event
        )}
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
