import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Column 1 */}
        <div className="col-4 p-5 mt-2 mb-2  text-muted">
          <h4>
            <FontAwesomeIcon icon={faCirclePlus} /> Account Opening
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges at Zerodha
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
          <br />
        </div>

        {/* Column 2 */}
        <div className="col-4 p-5 mt-2 mb-2  text-muted">
          <h4>
            <FontAwesomeIcon icon={faUser} />
            Your Zerodha Account
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Zerodha Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Profile
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account modification
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and conversion of securities
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
          <br />
        </div>

        {/* Column 3 */}
        <div className="col-4 p-5 mt-2 mb-2  text-muted">
          <h4>
            <FontAwesomeIcon icon={faChartSimple} />
            Kite
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            IPO
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin Trading Facility (MTF) and Margins
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts and orders
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Alerts and Nudges
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            General
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2  text-muted">
          <h4>
            <FontAwesomeIcon icon={faCreditCard} />
            Funds
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add money
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw money
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add bank accounts
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2  text-muted">
          <h4>
            <FontAwesomeIcon icon={faCircleNotch} />
            Console
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate actions
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Funds statement
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Segments
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2  text-muted">
          <h4>
            <FontAwesomeIcon icon={faRotate} />
            Coin
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mutual funds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            National Pension Scheme (NPS)
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fixed Deposit (FD)
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Features on Coin
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Payments and Orders
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            General
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
