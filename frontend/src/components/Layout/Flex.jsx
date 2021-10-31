import React from "react";

const Flex = ({
  direction = "row",
  justify = "center",
  align = "center",
  children,
  className,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Flex;
