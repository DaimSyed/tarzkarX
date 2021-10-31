import React from "react";
import CommonHeading from "../CommonHeading/CommonHeading";
import Padder from "../Layout/Padder";
import SimpleImageWithText from "../SimpleImageWithText/SimpleImageWithText";
import contem from "../../assets/shop by style/Contemporary.png";
import modern from "../../assets/shop by style/Modern.png";
import Flex from "../Layout/Flex";

const ShopByStyle = () => {
  return (
    <Padder>
      <CommonHeading text="Shop by Style" />
      <Flex justify="space-between">
        <SimpleImageWithText height="18vh" image={contem} text="Contemporary" />
        <SimpleImageWithText height="18vh" image={modern} text="Modern" />
      </Flex>
    </Padder>
  );
};

export default ShopByStyle;
