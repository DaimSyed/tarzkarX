import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Banner from "../components/Banner/Banner";
import Padder from "../components/Layout/Padder";
import Product from "../components/Product/Product";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const categoryProducts = useSelector((state) =>
    state?.store?.products?.find(
      (product) => product.categoryName === categoryName
    )
  );
  console.log(categoryProducts);
  return (
    <div className="category">
      <Banner
        title={categoryProducts?.categoryName || "Loading"}
        underline
        centered
        height="20vh"
      />
      <Padder padding="2rem">
        {categoryProducts?.products?.map((product, index) => (
          <Product key={product.id} {...product} index={index} showDes />
        ))}
      </Padder>
    </div>
  );
};

export default CategoryPage;
