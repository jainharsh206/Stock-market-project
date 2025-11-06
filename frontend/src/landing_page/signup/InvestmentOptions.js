import React from "react";
import "./InvestmentOptions.css";


const InvestmentOptions = () => {
  const options = [
   {
    title: "Stocks",
    description: "Invest in all exchange-listed securities",
    image: "/images/media/stocks-acop.svg", // ✅ public folder path
  },

    {
      title: "Mutual funds",
      description: "Invest in commission-free direct mutual funds",
      image: "/images/mutualfunds.png",
    },
    {
      title: "IPO",
      description: "Apply to the latest IPOs instantly via UPI",
      image: "/images/ipo.png",
    },
    {
      title: "Futures & options",
      description:
        "Hedge and mitigate market risk through simplified F&O trading",
      image: "/images/futures.png",
    },
  ];

  return (
    <div className="investment-container">
      <h2 className="investment-heading">
        Investment options with Zerodha demat account
      </h2>

      <div className="investment-grid">
        {options.map((opt, index) => (
          <div className="investment-card" key={index}>
            <img src={opt.image} alt={opt.title} className="investment-icon" />
            <h3 className="investment-title">{opt.title}</h3>
            <p className="investment-desc">{opt.description}</p>
          </div>
        ))}
      </div>

      <button className="investment-btn">Explore Investments</button>
    </div>
  );
};

export default InvestmentOptions;
