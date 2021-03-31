import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/OrderMain.css";

const OrderMain = ({ avatarimg, buyer_username, gigName, price, status }) => {
  return (
    <div className="orderMain">
      <div className="left">
        {/* BUYER */}
        <div className="orderMain__buyer">
          <Avatar src={avatarimg} />
          <p>{buyer_username}</p>
        </div>
        {/* gig */}
        <p>{gigName}</p>
      </div>
      <div className="right">
        {/* total */}
        <p className="total">${price}</p>
        {/* status */}
        <p className="status">{status}</p>
      </div>
    </div>
  );
};

export default OrderMain;
