import React from "react";
import "../css/GigData.css";

const GigData = ({ gig_title, clicks, orders, cancels }) => {
  return (
    <div className="gigData">
      <div className="left">
        <h3>{gig_title}</h3>
      </div>
      <div className="right">
        <h3 className="clicks">{clicks}</h3>
        <h3 className="orders">{orders}</h3>
        <h3 className="cancels">{cancels}%</h3>
      </div>
    </div>
  );
};

export default GigData;
