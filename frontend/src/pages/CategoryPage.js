import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const categoryProducts = useSelector((state) =>
    state?.store?.products?.find(
      (product) => product.categoryName === categoryName
    )
  );
  console.log(categoryProducts);
  return (
    <div>
      {" "}
      <h1>I am Category Page {categoryName}</h1>{" "}
    </div>
  );
};

export default CategoryPage;
