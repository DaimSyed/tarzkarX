import React, { useState } from "react";
import { domain } from "../../domain";
import "./Product.css";
import Flex from "../Layout/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import dummyPic from "../../assets/shop by style/Modern.png";
import { number } from "../../number";
import { useHistory } from "react-router";
const Product = (props) => {
  const [descHide, setDesShow] = useState(false);
  const history = useHistory();
  const dummyImage = props?.images[0]?.image;
  const priceformat = number({ format: props.price, style: "currency" });
  return (
    <Flex
      justify="space-between"
      direction={(props.index + 1) % 2 === 0 ? "row-reverse" : "row"}
      className="product"
    >
      <div className="product_image">
        <img src={dummyImage ? ` ${domain}${dummyImage}` : dummyPic} alt="" />
      </div>
      <div className="product_detail">
        <div
          className="product_name"
          onClick={() =>
            history.push(`/category/${props.category.name}/${props.id}`)
          }
        >
          {props.name}
        </div>
        <div className="product_category">{props.category.name}</div>
        <div className="product_price">{priceformat}</div>
        <div className="product_colors">
          {props.colors.map((color) => (
            <div
              className="product_color"
              key={color.id}
              style={{ backgroundColor: color.color }}
            ></div>
          ))}
        </div>
        {props.showAddto ? (
          <button className="product_addTo">Add to cart</button>
        ) : null}

        {props.showDes ? (
          <div className="product_description">
            <div className="product_decr_head">
              <span>Description</span>
              {descHide ? (
                <FontAwesomeIcon
                  onClick={() => setDesShow(false)}
                  icon={faArrowUp}
                  color="white"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => setDesShow(true)}
                  icon={faArrowDown}
                  color="white"
                />
              )}
            </div>
            {descHide ? <div className="p_desc">{props.desc}</div> : null}
          </div>
        ) : null}
      </div>
    </Flex>
  );
};

export default Product;
