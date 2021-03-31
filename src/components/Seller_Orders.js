import React from "react";
import "../css/SellerOrders.css";
import ManageOrdersinOrders from "./PriorityOrders";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PriorityOrders from "./PriorityOrders";
import NewOrders from "./NewOrders";
import ActiveOrders2 from "./ActiveOrders2";
import DeliveredOrders from "./DeliveredOrders";
import CompletedOrders from "./CompletedOrders";
import CancelledOrders from "./CancelledOrders";

const Seller_Orders = () => {
  return (
    <Router>
      <div className="sellerOrders">
        {/* header */}
        <div className="sellerOrders__header">
          <h1>Manage Orders</h1>
        </div>
        {/* navigation */}
        <div className="sellerOrders__nav">
          <Link to="/seller/orders" className="link">
            <h4>PRIORITY</h4>
          </Link>
          <Link to="/seller/orders/new" className="link">
            <h4>NEW</h4>
          </Link>
          <Link to="/seller/orders/active" className="link">
            <h4>ACTIVE</h4>
          </Link>
          <Link to="/seller/orders/delivered" className="link">
            <h4>DELIVERED</h4>
          </Link>
          <Link to="/seller/orders/completed" className="link">
            <h4>COMPLETED</h4>
          </Link>
          <Link to="/seller/orders/cancelled" className="link">
            <h4>CANCELLED</h4>
          </Link>
        </div>
        {/* orders area */}

        <Route
          path="/seller/orders"
          exact
          render={() => <PriorityOrders table_title="PRIORITY ORDERS" />}
        />
        <Route
          path="/seller/orders/new"
          render={() => <NewOrders table_title="NEW ORDERS" />}
        />
        <Route
          path="/seller/orders/active"
          render={() => <ActiveOrders2 table_title="ACTIVE ORDERS" />}
        />
        <Route
          path="/seller/orders/delivered"
          render={() => <DeliveredOrders table_title="DELIVERED ORDERS" />}
        />
        <Route
          path="/seller/orders/completed"
          render={() => <CompletedOrders table_title="COMPLETED ORDERS" />}
        />
        <Route
          path="/seller/orders/cancelled"
          render={() => <CancelledOrders table_title="CANCELLED ORDERS" />}
        />
      </div>
    </Router>
  );
};

export default Seller_Orders;
