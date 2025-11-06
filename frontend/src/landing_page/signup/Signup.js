import React from "react";
import "./Signup.css";
import InvestmentOptions from "./InvestmentOptions";
import StepsToOpenAccount from "./StepsToOpenAccount";

function SignupSection() {
  return (
    <div>
      {/* ✅ Top Heading Section */}
      <div className="signup-top-text">
        <h5 className="signup-top-title">
          Open a free demat and trading account online
        </h5>
        <p className="signup-top-subtitle">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      {/* ✅ Signup Main Section */}
      <div className="signup-main reverse">
        {/* Left Side Image */}
        <div className="signup-left">
          <img
            src="/media/image/account_open.svg"
            alt="Platform preview"
            className="mockup-img"
          />
        </div>

        {/* Right Side Signup Form */}
        <div className="signup-right">
          <h2 className="signup-title">Signup now</h2>
          <p className="signup-subtitle">Or track your existing application</p>

          <div className="mobile-input-box">
            <span className="country-code">
              <img
                src="/media/image/india-flag.svg"
                alt="India Flag"
                className="flag-icon"
              />
              +91
            </span>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="mobile-input"
            />
          </div>

          <button className="otp-btn">Get OTP</button>

          <p className="terms">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#">terms</a> & <a href="#">privacy policy</a>.
          </p>

          <p className="nri">
            Looking to open NRI account? <a href="#">Click here</a>
          </p>
        </div>
      </div>

      {/* ✅ Investment Options Section */}
      <InvestmentOptions /> {/* यह नीचे वाला section render करेगा */}
      <StepsToOpenAccount />
    </div>
        
      
  );
}

export default SignupSection;
