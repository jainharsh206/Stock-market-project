import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/image/logo.svg" style={{ width: "50%" }} alt="logo" />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Product</a>
            <a href="#" className="footer-link">Pricing</a>
            <a href="#" className="footer-link">Referral programme</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Zerodha tech</a>
            <a href="#" className="footer-link">Press & media</a>
            <a href="#" className="footer-link">Zerodha cares (CBR)</a>
          </div>


          <div className="col">
            <p>Support</p>
            <a href="#" style={linkStyle}>Contact</a>
            <a href="#" style={linkStyle}>Support portal</a>
            <a href="#" style={linkStyle}>Z-Connect blog</a>
            <a href="#" style={linkStyle}>List of charges</a>
            <a href="#" style={linkStyle}>Download & resource</a>
          </div>

          <div className="col">
            <p>Account</p>
            <a href="#" style={linkStyle}>Open an account</a>
            <a href="#" style={linkStyle}>Fund transfer</a>
            <a href="#" style={linkStyle}>60 days challenge</a>
          </div>
        </div>

        {/* 🔹 Extra NSE, BSE, MCX, etc. links row */}


        {/* 🔹 Legal text */}
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
        </div>

        <div className="mt-4 text-center">
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.nseindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                NSE
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.bseindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                BSE
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.mcxindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                MCX
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.share.market/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                Terms & conditions
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.share.market/policies-procedures"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                Policies & procedures
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.nseindia.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                Privacy policy
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.nseindia.com/nse-investments/disclosures"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                Disclosure
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.e3s-conferences.org/articles/e3sconf/abs/2020/74/e3sconf_ebldm2020_02024/e3sconf_ebldm2020_02024.html"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                For investor's attention
              </a>
            </li>

            <li style={{ margin: "0 10px" }}>
              <a
                href="https://nsdl.co.in/publications/investor_charter.php"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-extra-link"
              >
                Investor charter
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

const linkStyle = {
  color: "Black",
  textDecoration: "none",
  marginBottom: "10px",
  display: "block"
};

const extraLinkStyle = {
  color: "gray",
  textDecoration: "none"
};

export default Footer;
