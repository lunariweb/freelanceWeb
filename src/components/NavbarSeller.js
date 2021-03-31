import React from "react";
import "../css/Navbar_Seller.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import avatar1 from "../images/avatar1.png";

const Navbar_Seller = () => {
  return (
    <div className="navbar">
      <div className="navbar__contents">
        {/* logo */}
        <img alt="" src={logo} className="navbar__logo" />

        {/* navbar buttons */}
        <div className="navbar__buttons">
          <Link to="/seller/seller_dash" className="navbar__buttons__h3">
            <h3>Dashboard</h3>
          </Link>
          <Link className="navbar__buttons__h3" to="/seller/messages">
            <h3>Messages</h3>
          </Link>
          <h3>Orders</h3>
          <h3>Gigs</h3>
          <h3>Earnings</h3>
          <h3>Buyer Requests</h3>

          <div className="avatar">
            <Avatar src={avatar1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Seller;
