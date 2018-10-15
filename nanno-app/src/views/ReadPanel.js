import React, { Component } from "react";

class ReadPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content container read-content">
        <h3>
          Distributed Hash Tables And Why They Are Better Than Blockchain For
          Exchanging Health Records
        </h3>
        <h4>Introduction</h4>
        <p>
          Distributed Hash Tables are a form of a distributed database that can
          store and retrieve information associated with a key in a network of
          peer nodes that can join and leave the network at any time. The nodes
          coordinate among themselves to balance and store data in the network
          without any central coordinating party. Distributed Hash Tables are
          both fault tolerant and resilient when key/value pairs are replicated.
          The ability to distribute data among the peers is in strong contrast
          to the Blockchain model in which every node has a copy of the entire
          ledger. This is a critical distinction and could allow for the ability
          to move health records out of the silos of the EHR systems.
        </p>
        <div className="img-holder">
          <img src="/bg3.jpg" />
        </div>
        <p>
          Distributed Hash Tables are a form of a distributed database that can
          store and retrieve information associated with a key in a network of
          peer nodes that can join and leave the network at any time. The nodes
          coordinate among themselves to balance and store data in the network
          without any central coordinating party. Distributed Hash Tables are
          both fault tolerant and resilient when key/value pairs are replicated.
          The ability to distribute data among the peers is in strong contrast
          to the Blockchain model in which every node has a copy of the entire
          ledger. This is a critical distinction and could allow for the ability
          to move health records out of the silos of the EHR systems.
        </p>
        <h4>Introduction</h4>
        <p>
          Distributed Hash Tables are a form of a distributed database that can
          store and retrieve information associated with a key in a network of
          peer nodes that can join and leave the network at any time. The nodes
          coordinate among themselves to balance and store data in the network
          without any central coordinating party. Distributed Hash Tables are
          both fault tolerant and resilient when key/value pairs are replicated.
          The ability to distribute data among the peers is in strong contrast
          to the Blockchain model in which every node has a copy of the entire
          ledger. This is a critical distinction and could allow for the ability
          to move health records out of the silos of the EHR systems.
        </p>
        <p>
          Distributed Hash Tables are a form of a distributed database that can
          store and retrieve information associated with a key in a network of
          peer nodes that can join and leave the network at any time. The nodes
          coordinate among themselves to balance and store data in the network
          without any central coordinating party. Distributed Hash Tables are
          both fault tolerant and resilient when key/value pairs are replicated.
          The ability to distribute data among the peers is in strong contrast
          to the Blockchain model in which every node has a copy of the entire
          ledger. This is a critical distinction and could allow for the ability
          to move health records out of the silos of the EHR systems.
        </p>
      </div>
    );
  }
}

export default ReadPanel;
