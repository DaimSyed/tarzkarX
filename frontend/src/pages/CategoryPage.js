import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Banner from "../components/Banner/Banner";
import Padder from "../components/Layout/Padder";
import Product from "../components/Product/Product";
import "./CategoryPage.css";
import { domain } from "../domain";

const CategoryPage = () => {
  const increment = 2;
  const { categoryName } = useParams();
  const [count, setCount] = useState(increment);
  const categoryProducts = useSelector((state) =>
    state?.store?.products?.find(
      (product) => product.categoryName === categoryName
    )
  );
  const totalResults = categoryProducts?.products?.length;
  const productToshow = categoryProducts?.products.slice(0, count);
  console.log(increment, count, totalResults);

  useEffect(() => {
    setCount(increment);
  }, [categoryProducts]);

  useEffect(() => {
    if (count > totalResults) {
      setCount(totalResults);
    }
  }, [count, totalResults]);

  const loadMore = () => {
    if (count >= totalResults) {
      setCount(false);
      return;
    }

    if (count + increment > totalResults) {
      setCount((count) => count + (totalResults - count));
      return;
    }
    setCount((count) => count + increment);
  };

  return (
    <div className="category">
      <Banner
        title={categoryProducts?.categoryName || "Loading"}
        underline
        image={`${domain}${categoryProducts?.categoryImg}`}
        centered
        height="20vh"
      />
      <Padder padding="2rem">
        <div className="category_name">
          Home / <span>{categoryProducts?.categoryName}</span>
        </div>
        <div className="catgegory_amount">
          Showing 1-{count} of {totalResults} Results
        </div>
        {productToshow?.map((product, index) => (
          <Product key={product.id} {...product} index={index} showDes />
        ))}
        {count < totalResults ? (
          <button onClick={loadMore} className="category_load">
            Show More
          </button>
        ) : null}
      </Padder>
    </div>
  );
};

export default CategoryPage;
