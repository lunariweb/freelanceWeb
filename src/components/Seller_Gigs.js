import React from "react";
import SlideButton from "./SlideButton";
import "../css/SellerGigs.css";
import DefaultButton from "./DefaultButton";
import GigsTable from "./GigsTable_Active";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GigsTable_Pending from "./GigsTable_Pending";
import GigsTable_Active from "./GigsTable_Active";
import GigsTable_Draft from "./GigsTable_Draft";
import GigsTable_Denied from "./GigsTable_Denied";
import GigsTable_Paused from "./GigsTable_Paused";

const Seller_Gigs = () => {
  return (
    <Router>
      <div className="sellerGigs">
        {/* header with slide button */}
        <div className="sellerGigs_header">
          <h1>Gigs</h1>
          <SlideButton />
        </div>
        <div className="sellerGigs__content">
          <div className="sellerGigs__navbar">
            <div className="left">
              <Link to="/seller/gigs" className="link">
                <h3>ACTIVE</h3>
              </Link>

              <Link to="/seller/gigs/pending_approval" className="link">
                <h3>PENDING APPROVAL</h3>
              </Link>
              <Link to="/seller/gigs/draft" className="link">
                <h3>DRAFT</h3>
              </Link>
              <Link to="/seller/gigs/denied" className="link">
                <h3>DENIED</h3>
              </Link>
              <Link to="/seller/gigs/paused" className="link">
                <h3>PAUSED</h3>
              </Link>
            </div>
            <div className="right">
              <DefaultButton
                title="press me"
                onClick={() => {
                  console.log("pressed me");
                }}
              />
            </div>
          </div>
          <div className="sellerGigs__table">
            <Switch>
              <Route
                path="/seller/gigs"
                exact
                render={() => <GigsTable_Active status="ACTIVE" />}
              />
              <Route
                path="/seller/gigs/pending_approval"
                render={() => <GigsTable_Pending status="PENDING APPROVAL" />}
              />
              <Route
                path="/seller/gigs/draft"
                render={() => <GigsTable_Draft status="DRAFT" />}
              />
              <Route
                path="/seller/gigs/denied"
                render={() => <GigsTable_Denied status="DENIED" />}
              />
              <Route
                path="/seller/gigs/paused"
                render={() => <GigsTable_Paused status="PAUSED" />}
              />
            </Switch>
          </div>
        </div>
        {/* gig navbar */}
        {/* gigs table */}
      </div>
    </Router>
  );
};

export default Seller_Gigs;
