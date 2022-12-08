// Libraries
import React from "react";

// Style-Sheets
import './Rank.css';

const Rank = () => {
    return (
        <div className="rank-container mt0 pt0 ba b--near-black br3 center shadow-2">
         <div className="black f3">
            {'Eduard, your current rank is...'}
         </div>
         <div className="black f1">
            {'1'}
         </div>
       </div> 
    );
}

export default Rank;