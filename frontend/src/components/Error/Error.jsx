import React from "react";
import "./Error.css";
const Error = ({
  text,
  width = "60%",
  fontSize = "1.4rem",
  padding = "0.3rem",
}) => {
  return (
    <div style={{ width, fontSize, padding }} className="error">
      {text}
    </div>
  );
};

export default Error;
