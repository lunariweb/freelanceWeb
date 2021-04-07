import React from "react";
import SlideButton from "./SlideButton";
import "../css/SellerGigs.css";
import DefaultButton from "./DefaultButton";
import GigsTable from "./GigsTable";

const Seller_Gigs = () => {
  return (
    <div className="sellerGigs">
      {/* header with slide button */}
      <div className="sellerGigs_header">
        <h1>Gigs</h1>
        <SlideButton />
      </div>
      <div className="sellerGigs__content">
        <div className="sellerGigs__navbar">
          <div className="left">
            <h3>ACTIVE</h3>
            <h3>PENDING APPROVAL</h3>
            <h3>DRAFT</h3>
            <h3>DENIED</h3>
            <h3>PAUSED</h3>
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
          <GigsTable />
        </div>
      </div>
      {/* gig navbar */}
      {/* gigs table */}
    </div>
  );
};

export default Seller_Gigs;
