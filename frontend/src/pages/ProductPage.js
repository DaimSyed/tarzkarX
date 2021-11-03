import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Alertpop from "../components/Alert/Alert";
import Colors from "../components/Colors/Colors";
import Error from "../components/Error/Error";
import Padder from "../components/Layout/Padder";
import Slider from "../components/Slider/Slider";
import { domain } from "../domain";
import { addToCart } from "../features/cart";
import { number } from "../number";
import "./ProductPage.css";

const ProductPage = () => {
  const { categoryName, productId } = useParams();
  const [max, setMax] = useState(1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(false);
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

  const checkMaxStock = (e) => {
    if (e.target.value > +pd?.stock) {
      setMax(pd?.stock);
      return;
    }
    setMax(e.target.value);
    console.log(e.target.value);
  };

  const getSelectedColor = (color) => {
    setSelectedColor(color);
    setError(false);
  };

  const cart = () => {
    if (selectedColor && max <= +pd?.stock) {
      dispatch(
        addToCart({ ...pd, colorId: selectedColor.id, increment: +max })
      );
    } else {
      setError(true);
    }
  };

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
            placeholder="1"
            max={pd?.stock}
            min={1}
            value={max}
            onChange={checkMaxStock}
            step={1}
          />
        </div>

        <Colors colors={pd?.colors} handler={getSelectedColor} />
        <button onClick={cart} className="product_addTo">
          Add to cart
        </button>
        <div className="productP_sku">
          SKU: <strong>{pd?.sku}</strong>
        </div>
        <div className="productP_category">
          Category:{" "}
          <strong>
            {" "}
            <Link to={`/category/${pd?.category?.name}`}>
              {" "}
              {pd?.category?.name}
            </Link>
          </strong>
        </div>
      </Padder>
      <Alertpop message="Please Select any color" open={error} />
      <Slider pagination={false} />
    </div>
  );
};

export default ProductPage;
