import React from "react";
import "./Slider.css";
import Carousel from "react-elastic-carousel";
import i1 from "../../assets/instagram/1.png";
import i2 from "../../assets/instagram/2.png";
import i3 from "../../assets/instagram/3.png";
import Slide from "../Slide/Slide";
import CommonHeading from "../CommonHeading/CommonHeading";
const Slider = ({ show = 3, pagination = true, padding = [5], heading }) => {
  return (
    <div className="slider_wrapper">
      <CommonHeading text={heading} />
      <Carousel
        className="slider"
        itemsToShow={show}
        pagination={pagination}
        itemPadding={padding}
        showArrows={false}
      >
        <Slide
          image={i1}
          // desc={{ name: "HELLO WORLD I AM LOVE", info: "HELOO IAM @*(" }}
        />
        <Slide image={i2} />
        <Slide image={i3} />
        <Slide image={i1} />
        <Slide image={i3} />
      </Carousel>
    </div>
  );
};

export default Slider;
