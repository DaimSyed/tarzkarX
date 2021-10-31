import React from "react";
import "./Slide.css";
import { number } from "../../number";

const Slide = ({ image, desc }) => {
  return (
    <div className="slide">
      <div className="slide_image">
        <img src={image} alt="" />
      </div>
      {desc ? (
        <div className="slide_details">
          <div className="slide_name">{desc.name}</div>
          <div className="slide_info">
            {number({ format: desc.info, style: "currency" })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Slide;
