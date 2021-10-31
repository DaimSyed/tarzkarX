import React from "react";
import "./Brands.css";
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import Padder from "../Layout/Padder";
import Flex from "../Layout/Flex";
import CommonHeading from "../CommonHeading/CommonHeading";
const Brands = () => {
  return (
    <Padder>
      <CommonHeading text="Brands" />
      <Flex justify="space-between" className="brands">
        <div className="brand_img">
          <img src={brand1} alt="" />
        </div>
        <div className="brand_img">
          <img src={brand2} alt="" />
        </div>
        <div className="brand_img">
          <img src={brand3} alt="" />
        </div>
      </Flex>
    </Padder>
  );
};

export default Brands;
