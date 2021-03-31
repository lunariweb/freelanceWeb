import React from "react";
import "../css/ManageOrdersinOrders.css";
import OrderMain from "./OrderMain";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";

const CompletedOrders = ({ table_title }) => {
  return (
    <div className="manageOrders_orders">
      {/* header */}
      <div className="orderTable__header">
        <h3>{table_title}</h3>
      </div>
      {/* table header */}
      <div className="orderTable__tbheader">
        <div className="left">
          <h4>BUYER</h4>
          <h4>GIG</h4>
        </div>
        <div className="right">
          <h4>TOTAL</h4>
          <h4>STATUS</h4>
        </div>
      </div>
      {/* orders */}
      <OrderMain
        avatarimg={avatar1}
        buyer_username="creedfili"
        gigName="this is your gig name that the order is placed"
        price="450"
        status="COMPLETED"
      />
    </div>
  );
};

export default CompletedOrders;
