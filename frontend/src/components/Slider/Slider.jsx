import React from "react";
import "./Slider.css";
import Carousel from "react-elastic-carousel";
import i1 from "../../assets/instagram/1.png";
import i2 from "../../assets/instagram/2.png";
import i3 from "../../assets/instagram/3.png";
import Slide from "../Slide/Slide";
import CommonHeading from "../CommonHeading/CommonHeading";
const Slider = ({
  show = 3,
  pagination = true,
  padding = [5],
  heading,
  slides = [{ image: i1 }, { image: i2 }, { image: i3 }],
  showArrows,
}) => {
  return (
    <div className="slider_wrapper">
      {heading && <CommonHeading text={heading} />}
      <Carousel
        className="slider"
        itemsToShow={show}
        pagination={pagination}
        itemPadding={padding}
        showArrows={showArrows}
      >
        {slides.map((slide, i) => (
          <Slide
            key={`${slide.image}${i}`}
            image={slide.image}
            desc={slide.desc ? slide.desc : false}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
