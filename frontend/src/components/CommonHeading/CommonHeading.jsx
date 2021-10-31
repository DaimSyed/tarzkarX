import React from "react";
import "./CommonHeading.css";
const CommonHeading = ({ text }) => {
  return (
    <div className="comm_heading">
      <div className="comm_head">{text}</div>
    </div>
  );
};

export default CommonHeading;
