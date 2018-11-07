import React, { Component } from "react";

const MOCK_DATA = [
  {
    main: "QUAN TÂM",
    child: [
      {
        title: "Topic A",
        href: "/topicA"
      },
      {
        title: "Topic B",
        href: "/topicA",
        badge: "4"
      },
      {
        title: "Topic C",
        href: "/topicC"
      },
      {
        title: "Topic D",
        href: "/topicD"
      }
    ]
  }
];

const renderWidget = data => {
  return (
    <div className="side-content">
      <div className="list">
        <h6>{data.main}</h6>
        <div className="list-wig">
          {data.child.map(c => (
            <a href={c.href}>
              <div className="wig-item z-depth-1">
                {c.badge ? <span className="new badge">4</span> : null}
                {c.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

class SideWidget extends Component {
  render() {
    return MOCK_DATA.map(e => renderWidget(e));
  }
}

export default SideWidget;
