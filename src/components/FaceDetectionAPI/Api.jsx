import React from "react";
import './BoundingBox.css';

const Api = ({ imageURL, box }) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageURL} alt="noAlt" width='500px' height='auto' />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default Api;