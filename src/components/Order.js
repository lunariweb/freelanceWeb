import React from "react";
import "../css/Order.css";

const Order = ({ title, price, link }) => {
  return (
    <div className="order">
      <div className="order__details">
        <h3>{title}</h3>
        <h3> - </h3>
        <h3 className="price">${price}</h3>
      </div>
      <div className="order__actions">
        <h3>View</h3>
      </div>
    </div>
  );
};

export default Order;
