import React from "react";
import "../css/SellerDashboard.css";
import ActiveOrders from "./ActiveOrders";
import Sidebar from "./Sidebar";

const Seller_Dashboard = () => {
  return (
    <div className="seller__dash">
      <div className="main__content">
        <div className="leftSide">
          {/* sidebar */}
          <Sidebar />
        </div>
        <div className="rightSide">
          {/* active orders */}
          <ActiveOrders />
          {/* steps */}
          {/* mini slider */}
        </div>
      </div>
      {/* footer */}
    </div>
  );
};

export default Seller_Dashboard;
