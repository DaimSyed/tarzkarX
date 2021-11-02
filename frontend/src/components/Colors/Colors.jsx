import React, { useState } from "react";
import "./Colors.css";
const Colors = (props) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const selectColor = (color) => {
    setSelectedColor(color.id);
    props.handler(color);
  };
  return (
    <div className="product_colors">
      {props?.colors?.map((color, index) => (
        <div
          className={`product_color ${
            selectedColor === color.id ? "selected_color" : ""
          } `}
          onClick={() => selectColor(color)}
          key={color.id}
          style={{ backgroundColor: color.color }}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
