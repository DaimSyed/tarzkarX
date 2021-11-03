import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import CommonHeading from "../components/CommonHeading/CommonHeading";
import Padder from "../components/Layout/Padder";
import AddressInput from "material-ui-address-input";
import PhoneInput from "react-phone-input-2";
import { number } from "../number";
import InputMaterialUi from "input-material-ui";

import "react-phone-input-2/lib/material.css";
import Slider from "../components/Slider/Slider";
import "./CheckoutPage.css";
import Alertpop from "../components/Alert/Alert";
import axios from "axios";
import { domain } from "../domain";
import { useHistory } from "react-router";
import { resetCart } from "../features/cart";

const CheckoutPage = () => {
  const cart = useSelector((state) => state?.cart);
  const userId = useSelector((state) => state?.userId?.id);
  const history = useHistory();
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [pnumber, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageType, setErrorMessageType] = useState("error");
  const totolPrice = number({
    format: cart?.reduce((acc, val) => acc + val.quantity * val.price, 0),
  });

  const placeOrder = async () => {
    const orderOject = {};
    const addr = addresses[address];

    const items = cart.map((pd) => {
      return { product_id: pd.id, color_id: pd.colorId, quantity: pd.quantity };
    });
    orderOject.items = items;
    orderOject.firstname = firstname;
    orderOject.lastname = lastname;
    orderOject.street1 = addr.addressLine1;
    orderOject.street2 = addr.addressLine2;
    orderOject.city = addr.city;
    orderOject.zip = addr.zip;
    orderOject.contact = pnumber;
    orderOject.fingerprint = userId;

    console.log(orderOject);
    try {
      const ordered = await axios.post(`${domain}/order/oph/`, orderOject);
      if (ordered.data) {
        setError(true);
        setErrorMessage("Your order had placed");
        setErrorMessageType("success");
        console.log(ordered, "I am ordered");

        setTimeout(() => {
          setError(false);
          history.push("/");
          dispatch(resetCart([]));
        }, 3000);
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
      setErrorMessageType("error");
    }
  };

  // console.log(address, "HHHH", addresses);
  const order = () => {
    if (firstname.trim() === "") {
      setError(true);
      setErrorMessage("Please type valid first name");
      return;
    }
    if (lastname.trim() === "") {
      setError(true);
      setErrorMessage("Please type valid last name");
      return;
    }
    if (pnumber.trim().length < 12) {
      setError(true);
      setErrorMessage("Please type valid Phone number");
      return;
    }
    if (!addresses[address]) {
      setError(true);
      setErrorMessage("Please select any address or type any valid address");
      return;
    }

    placeOrder();
  };
  // console.log(pnumber);
  // console.log(address);
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
            <Alertpop
              message={errorMessage}
              open={error}
              type={errorMessageType}
            />
            <div className="items_total">
              Totol Price: <strong>{totolPrice}</strong>
            </div>
            <div className="checkout_input">
              <InputMaterialUi
                type="text"
                label="First Name"
                placeholder=""
                required
                value={firstname}
                onChange={(e) => {
                  setError(false);
                  setfirstName(e);
                }}
              />
              <InputMaterialUi
                type="text"
                label="Last Name"
                required
                placeholder=""
                value={lastname}
                onChange={(e) => {
                  setError(false);
                  setlastname(e);
                }}
              />
              <AddressInput
                onAdd={(ad) => {
                  setError(false);
                  setAddresses((st) => [...st, ad]);
                }}
                onChange={(index) => {
                  setError(false);
                  setAddress(index);
                }}
                required
                value={address}
                allAddresses={addresses}
              />
              <PhoneInput
                country="pk"
                value={pnumber}
                required
                inputProps={{ enableAreaCodes: true, autoFormat: true }}
                onChange={(number) => {
                  setError(false);
                  setNumber(number);
                }}
              />
            </div>
            <div className="order_button">
              <button onClick={order}>Order Now</button>
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
