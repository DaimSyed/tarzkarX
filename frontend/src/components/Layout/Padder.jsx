import React from "react";

const Padder = ({ padding = "0 2rem", children }) => {
  return <div style={{ padding: padding }}>{children}</div>;
};

export default Padder;
