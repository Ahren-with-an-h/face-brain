import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  const boundingBoxes = boxes.map((box, index) => {
    return (
      <div key={index}
        className="bounding-box"
        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
      ></div>
    );
  });

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="input-image" alt="" src={imageUrl} width="500px" height="auto" />
        {boundingBoxes}
      </div>
    </div>
  );
};

export default FaceRecognition;
