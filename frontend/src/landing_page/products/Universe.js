import React from "react";
import './Universe.css';


function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Zerodha Fundhouse */}
        <div className="col-4 p-3 mt-5 text-center">
          <a
            href="https://zerodhafundhouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            <img
              src="media/image/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ width: "200px", height: "auto", marginBottom: "15px" }}
            />
          </a>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-4 p-3 mt-5 text-center">
          <a
            href="https://sensibull.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"   // ✅ यह जोड़ा
          >
            <img
              src="media/image/sensibullLogo.svg"
              alt="Sensibull Logo"
              style={{ width: "220px", height: "auto", marginBottom: "15px" }}
            />
          </a>
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>


        {/* Tijori */}
        <div className="col-4 p-3 mt-5 text-center">
          <a
            href="https://tijorifinance.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            <img
              src="media/image/tijori.svg"
              alt="Tijori Logo"
              style={{ width: "150px", height: "auto", marginBottom: "15px" }}
            />
          </a>
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-4 p-3 mt-5 text-center">
          <a
            href="https://www.streak.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            <img
              src="media/image/streakLogo.png"
              alt="Streak Logo"
              style={{ width: "160px", height: "auto", marginBottom: "15px" }}
            />
          </a>
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-4 p-3 mt-5 text-center">
          <a
            href="https://www.smallcase.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            <img
              src="media/image/smallcaseLogo.png"
              alt="Smallcase Logo"
              style={{ width: "190px", height: "auto", marginBottom: "15px" }}
            />
          </a>
          <p className="text-small text-muted">
            A thematic investing platform that enables you to build diversified portfolios of stocks and ETFs, tailored to your interests and financial goals.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-4 p-3 mt-5 text-center">
          <a
            href="https://joinditto.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
          >
            <img
              src="media/image/dittoLogo.png"
              alt="Ditto Logo"
              style={{ width: "160px", height: "auto", marginBottom: "15px" }}
            />
          </a>
          <p className="text-small text-muted">
            Expert, no-spam advice to simplify your life and health insurance decisions and protect your future.
          </p>
        </div>

        {/* Signup Button */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
