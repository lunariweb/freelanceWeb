import React from "react";
import "../css/GigsTable.css";
import GigData from "./GigData";

const GigsTable_Denied = ({ status }) => {
  return (
    <div className="gigsTable">
      {/* status bar */}
      <div className="statusBar">
        <h3>{status}</h3>
      </div>
      <div className="tbHeader">
        <p>GIG</p>
        <p className="clicks">CLICKS</p>
        <p className="orders">ORDERS</p>
        <p className="cancels">CANCELLATIONS</p>
      </div>
      {/* tb header */}
      {/* gig */}
      <GigData
        gig_title="I will creata a custom logo animation"
        clicks="4"
        orders="8"
        cancels="0"
      />
      <GigData
        gig_title="I will creata a custom logo animation"
        clicks="4"
        orders="8"
        cancels="20"
      />
      <GigData
        gig_title="I will creata a custom logo animation"
        clicks="4"
        orders="8"
        cancels="0"
      />
    </div>
  );
};

export default GigsTable_Denied;
