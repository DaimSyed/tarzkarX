import React from "react";
import Flex from "../Layout/Flex";
import "./Cataglogue.css";
const Catalogue = ({ image, text, reverse, heading }) => {
  return (
    <Flex
      direction={reverse ? "row-reverse" : "row"}
      justify="space-between"
      className="catalogue"
    >
      <div className="catalogue_image">
        <img src={image} alt="" />
      </div>
      <div className="catalogue_details">
        <div className="catalogue_heading">{heading}</div>
        <div className="catalogue_text">
          {text
            ? text
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dumambled it to make a type specimen boo"}
        </div>
        <button className="catalogue_button">Shop</button>
      </div>
    </Flex>
  );
};

export default Catalogue;
