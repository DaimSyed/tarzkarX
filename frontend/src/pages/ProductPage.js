import React from "react";
import { useParams } from "react-router";

const ProductPage = () => {
  const { categoryName, productId } = useParams();
  return (
    <div>
      {" "}
      <h1>
        I am Product with {productId} of category: {categoryName}
      </h1>{" "}
    </div>
  );
};

export default ProductPage;
