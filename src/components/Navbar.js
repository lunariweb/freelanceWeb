import React from "react";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__contents">
        {/* logo */}
        <img alt="" src={logo} className="navbar__logo" />
        {/* search bar */}
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search Services"
            className="navbar__searchBar"
          />
          <button className="navbar__searchBtn">Search</button>
        </div>
        {/* blank content */}
        <div className="blank"></div>
        {/* navbar buttons */}
        <div className="navbar__buttons">
          <h3>Explore</h3>
          <Link to="/seller">
            <h3>Become a Seller</h3>
          </Link>
          <h3>About</h3>
          <h3>Sign In</h3>
        </div>
        <div className="navbar__lastBtn">
          <button>Join</button>
        </div>
        {/* final button */}
      </div>
    </div>
  );
};

export default Navbar;
