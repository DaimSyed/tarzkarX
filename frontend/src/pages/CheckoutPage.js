import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import CommonHeading from "../components/CommonHeading/CommonHeading";
import Padder from "../components/Layout/Padder";
import AddressInput from "material-ui-address-input";
import PhoneInput from "react-phone-input-2";

import InputMaterialUi from "input-material-ui";

import "react-phone-input-2/lib/material.css";
import Slider from "../components/Slider/Slider";
import "./CheckoutPage.css";
import { Button } from "@material-ui/core";

const CheckoutPage = () => {
  const cart = useSelector((state) => state?.cart);
  const [addresses, setAddresses] = useState([]);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  console.log(address, "HHHH", addresses);
  return (
    <div className="checkoutpage">
      <CommonHeading text="Checkout Page" />
      <Padder padding="2rem">
        {cart.length ? (
          <>
            <div className="item_wrapper">
              {cart.map((item) => (
                <CartItem key={`${item.colorId}${item.id}`} {...item} />
              ))}
            </div>
            <div className="checkout_input">
              <InputMaterialUi
                type="text"
                label="First Name"
                placeholder=""
                value={firstname}
                onChange={(e) => setfirstName(e)}
              />
              <InputMaterialUi
                type="text"
                label="Last Name"
                placeholder=""
                value={lastname}
                onChange={(e) => setlastname(e)}
              />
              <AddressInput
                onAdd={(ad) => setAddresses((st) => [...st, ad])}
                onChange={(index) => setAddress(addresses(index))}
                value={address}
                allAddresses={addresses}
              />
              <PhoneInput
                country="pk"
                value={number}
                inputProps={{ enableAreaCodes: true, autoFormat: true }}
                onChange={(number) => setNumber(number)}
              />
            </div>
            <div className="order_button">
              <button>Order Now</button>
            </div>
          </>
        ) : (
          <div className="checkout_empty">Please Add Items To cart</div>
        )}
      </Padder>
      <Slider pagination={false} heading="Follow us on instagram" />
    </div>
  );
};

export default CheckoutPage;
