import React from "react";
import "./BoundingBox.css";

// This takes the imageURL, puts it below the form and also puts the bounding box around it
const Api = ({ imageURL, box }) => {
  return (
    <div className="center ma" id="middle">
      <div className=" mt2 absolute">
        <img id="inputimage" alt="" src={imageURL} />
        <div
          className="bounding-box"
          style={{
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
            top: box.topRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Api;
