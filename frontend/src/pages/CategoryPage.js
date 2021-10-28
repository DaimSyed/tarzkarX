import React from "react";
import { useParams } from "react-router";

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <div>
      {" "}
      <h1>I am Category Page {categoryName}</h1>{" "}
    </div>
  );
};

export default CategoryPage;
