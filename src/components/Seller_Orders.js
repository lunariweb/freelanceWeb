import React from "react";
import "../css/SellerOrders.css";
import ManageOrdersinOrders from "./ManageOrdersinOrders";

const Seller_Orders = () => {
  return (
    <div className="sellerOrders">
      {/* header */}
      <div className="sellerOrders__header">
        <h1>Manage Orders</h1>
      </div>
      {/* navigation */}
      <div className="sellerOrders__nav">
        <h4 className="active">PRIORITY</h4>
        <h4>NEW</h4>
        <h4>ACTIVE</h4>
        <h4>DELIVERED</h4>
        <h4>COMPLETED</h4>
        <h4>CANCELLED</h4>
      </div>
      {/* orders area */}
      <ManageOrdersinOrders table_title="PRIORITY ORDERS" />
    </div>
  );
};

export default Seller_Orders;
