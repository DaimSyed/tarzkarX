import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Padder from "../components/Layout/Padder";
import Slider from "../components/Slider/Slider";
import { domain } from "../domain";
import { number } from "../number";
import "./ProductPage.css";

const ProductPage = () => {
  const { categoryName, productId } = useParams();
  const product = useSelector((state) =>
    state?.store?.products
      ?.map((pd) => {
        if (pd.categoryName === categoryName) {
          return pd.products.filter((pb) => pb.id == productId);
        } else return null;
      })
      ?.filter(Boolean)
  );
  const pd = product?.[0]?.[0];
  console.log(pd);
  return (
    <div className="productPage">
      {" "}
      <Slider
        slides={pd?.images?.map((img) => ({
          image: `${domain}${img.image}`,
        }))}
        pagination={true}
        showArrows={false}
        padding={[10]}
        show={1}
      />
      <Padder padding="0rem 2rem 2rem">
        <div className="productP_name">{pd?.name}</div>
        <div className="productP_price">{number({ format: pd?.price })}</div>
        <hr />
        <div className="productP_desc">{pd?.desc}</div>
        <div className="productP_number">
          <input
            type="number"
            placeholder={1}
            max={pd?.stock}
            min={1}
            step={1}
          />
        </div>
        <button className="product_addTo">Add to cart</button>
        <div className="productP_sku">
          SKU: <strong>{pd?.sku}</strong>
        </div>
        <div className="productP_category">
          Category: <strong>{pd?.category?.name}</strong>
        </div>
      </Padder>
      <Slider pagination={false}  showArrows={true}/>
      {/* <div className="product_name">{pd}</div> */}
    </div>
  );
};

export default ProductPage;
