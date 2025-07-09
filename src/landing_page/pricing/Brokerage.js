import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}><h3 className="fs-5">Brokerage calculator</h3></a>
        <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "16px"}} className>
          <li>Call & trader
          </li>
          <li>0.03% or Rs. 20/executed order whichever is lower</li>
          <li>0.025% on the sell side</li>
          <li>NSE: 0.00297%</li>
          <li>BSE: 0.00375%</li>

        </ul>
        </div>


        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}><h3 className="fs-5"> List of charges</h3></a>
          <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "16px"}} className>
          <li>Transaction/Turnover Charges
          </li>
          <li>Call & trade</li>
          <li>NRI brokerage charges</li>
          <li>Account with debit balance</li>
          <li>Charges for Investor's Protection Fund Trust (IPFT) by NSE</li>

        </ul>
        </div>
      </div>
      </div>
    
  );
}

export default Brokerage;
