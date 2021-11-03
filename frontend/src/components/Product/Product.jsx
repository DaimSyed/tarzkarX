import React, { useState } from "react";
import { domain } from "../../domain";
import "./Product.css";
import Flex from "../Layout/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import dummyPic from "../../assets/shop by style/Modern.png";
import { number } from "../../number";
import { useHistory } from "react-router";
import Colors from "../Colors/Colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart";
import Error from "../Error/Error";
import { Snackbar } from "@mui/material";
import Alertpop from "../Alert/Alert";
const Product = (props) => {
  const [descHide, setDesShow] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(false);
  const [selectedColor, setSelectedColor] = useState(false);
  const dummyImage = props?.images[0]?.image;
  const priceformat = number({ format: props.price, style: "currency" });
  const dispatch = useDispatch();
  const getSelectedColor = (color) => {
    setSelectedColor(color);
    setError(false);
  };
  const cart = () => {
    if (selectedColor) {
      dispatch(addToCart({ ...props, colorId: selectedColor.id }));
    } else {
      setError(true);
    }
  };
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

        <Alertpop message="Please Select any color" open={error} />

        <Colors colors={props?.colors} handler={getSelectedColor} />
        {props.showAddto ? (
          <button onClick={cart} className="product_addTo">
            Add to cart
          </button>
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
