import React from "react";
import CommonHeading from "../CommonHeading/CommonHeading";
import { useSelector } from "react-redux";
import Flex from "../Layout/Flex";
import Padder from "../Layout/Padder";
import "./FeatureProduct.css";
import Product from "../Product/Product";
const FeatureProduct = () => {
  const dummyProduct = useSelector((state) => state.store?.featured);
  console.log(dummyProduct);
  return (
    <Padder>
      <CommonHeading text="Featured Products" />
      <Flex justify="unset" align="unset" direction="column">
        {dummyProduct?.map((data, index) => (
          <Product
            key={data.id}
            {...data}
            index={index}
            showDes={false}
            showAddto={true}
          />
        ))}
      </Flex>
    </Padder>
  );
};

export default FeatureProduct;
