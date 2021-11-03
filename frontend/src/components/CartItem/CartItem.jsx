import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { domain } from "../../domain";
import { addToCart, removeFromCart } from "../../features/cart";
import { number } from "../../number";
import "./CartItem.css";
const CartItem = (props) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(props));
  };
  const remove = () => {
    dispatch(removeFromCart(props));
  };

  const color = props.colors.find((cl) => cl.id === props?.colorId);
  return (
    <>
      <div className="cartItem">
        <div className="item_image">
          <img src={`${domain}${props?.images?.[0]?.image}`} alt="" />
        </div>
        <div className="item_info">
          <div className="item_name">{props?.name}</div>
          <div className="item_category">{props?.category?.name}</div>
          <div className="item_colors">
            {" "}
            Selected with color: <strong>{color?.name}</strong>{" "}
            <div
              style={{ backgroundColor: color?.color }}
              className="item_color"
            ></div>
          </div>
          <div className="item_quantity">
            <button onClick={add}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>{props.quantity}</span>
            <button onClick={remove}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className="item_price">
            Total Price:{" "}
            <strong>
              {number({ format: props?.quantity * props?.price })}
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
