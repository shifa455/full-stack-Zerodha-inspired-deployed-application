import React from "react";
function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col company-links text-center  ">
            <p>Company</p>
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">About</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Products</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Pricing</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Referral programme</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Careers</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Zerodha.tech</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Press & media</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Zerodha cares (CSR)</a>
            <br />
          </div>
          <div className="col company-links text-center">
            <p>Support</p>
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link ">Contact</a>
            <br />
            <a href="" style={{textDecoration:" none"}} className="text-muted nav-link">Support portal</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Z-Connect blog</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">List of charges</a>
            <br />
            <a href=" " style={{textDecoration:"none"}} className="text-muted nav-link">Downloads & resources</a>
            <br />
          </div>
          <div className="col company-links text-center">
            <p >Account</p>
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link ">Open an account</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">Fund transfer</a>
            <br />
            <a href="" style={{textDecoration:"none"}} className="text-muted nav-link">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div className="footer-graveyard-link text-center py-3">
            <ul className="list-inline m-0">
              <li className="list-inline-item mx-3">NSE</li>
              <li className="list-inline-item mx-3">BSE</li>
              <li className="list-inline-item mx-3">MCX</li>
              <li className="list-inline-item mx-3">Terms & conditions</li>
              <li className="list-inline-item mx-3">Policies & procedures</li>
              <li className="list-inline-item mx-3">Privacy policy</li>
              <li className="list-inline-item mx-3">Disclosure</li>
              <li className="list-inline-item mx-3">
                For investor's attention
              </li>
              <li className="list-inline-item mx-3">Investor charter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
