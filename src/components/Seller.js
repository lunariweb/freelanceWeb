import React from "react";
import Seller_Dashboard from "./Seller_Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarSeller from "./NavbarSeller";
import Seller_Messages from "./Seller_Messages";
import Seller_Orders from "./Seller_Orders";

const Seller = () => {
  return (
    <Router>
      <div>
        {/* seller navbar */}
        <NavbarSeller />
        <Switch>
          {/* seller dash */}
          <Route path="/seller/seller_dash" component={Seller_Dashboard} />
          {/* seller messages */}
          <Route path="/seller/messages" component={Seller_Messages} />
          {/* orders */}
          <Route path="/seller/orders" component={Seller_Orders} />
          {/* gigs */}
          {/* earnings */}
          {/* Buyer requests */}
        </Switch>
      </div>
    </Router>
  );
};

export default Seller;
