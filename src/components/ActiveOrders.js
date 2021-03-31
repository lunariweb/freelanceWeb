import React from "react";
import "../css/ActiveOrders.css";
import Order from "./Order";

const ActiveOrders = () => {
  return (
    <div className="activeOrders">
      <div className="header">
        <h3>Active Orders - </h3>
        <h3 className="price">$100</h3>
      </div>
      <div className="order__content">
        <Order title="Create something sample order" price="450" />
        <Order title="Create something sample order" price="450" />
        <Order title="Create something sample order" price="450" />
        <Order title="Create something sample order" price="450" />
      </div>
    </div>
  );
};

export default ActiveOrders;
