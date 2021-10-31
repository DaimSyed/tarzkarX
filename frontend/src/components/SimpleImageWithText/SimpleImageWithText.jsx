import React from "react";
import "./SimpleImageWithText.css";
const SimpleImageWithText = ({ text, image, height }) => {
  return (
    <div className="SimpleImageWithTextWrapper" style={{ height }}>
      <div className="SimpleImage">
        <img src={image} alt="" />
      </div>
      <div className="SimpleText">{text}</div>
    </div>
  );
};

export default SimpleImageWithText;
