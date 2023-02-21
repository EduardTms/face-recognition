// Libraries
import React from "react";

// Style-Sheets
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="rank-container mt0 pt0 ba b--near-black br3 center shadow-2">
      <div className="black f3">{`${name}, your number of entries is `}</div>
      <div className="black f1">{entries}</div>
    </div>
  );
};

export default Rank;
