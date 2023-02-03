import React from "react";

const Api = ({ imageURL }) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageURL} alt="noAlt" width='500px' height='auto' />
            </div>
        </div>
    );
}

export default Api;