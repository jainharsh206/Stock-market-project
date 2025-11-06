import React from "react";
import "./StepsToOpenAccount.css";

const StepsToOpenAccount = () => {
  return (
    <div className="steps-container">
      <h2 className="steps-heading">
        Steps to open a demat account with Zerodha
      </h2>

      <div className="steps-main">
        {/* Left Side Image */}
        <div className="steps-left">
          <img
            src="/media/image/steps-acop.svg" // 🔹 अपना path यहां डालें
            alt="Steps illustration"
            className="steps-image"
          />
        </div>

        {/* Right Side Steps */}
        <div className="steps-right">
          <div className="step-item">
            <div className="step-number">01</div>
            <div className="step-text">Enter the requested details</div>
          </div>
          <div className="step-line"></div>
          <div className="step-item">
            <div className="step-number">02</div>
            <div className="step-text">Complete e-sign & verification</div>
          </div>
          <div className="step-line"></div>
          <div className="step-item">
            <div className="step-number">03</div>
            <div className="step-text">Start investing!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToOpenAccount;
