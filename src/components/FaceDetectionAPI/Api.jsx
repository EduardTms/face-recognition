import React from "react";

const Api = ({ imageURL }) => {
    return(
        <div className="center">
            <img src={imageURL} alt="noAlt" />
        </div>
    );
}

export default Api;