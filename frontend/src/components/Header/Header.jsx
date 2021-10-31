import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { showNav } from "../../features/nav";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="header">
      <div
        onClick={() => dispatch(showNav())}
        className="header_icon header_hamburger"
      >
        <FontAwesomeIcon icon={faBars} color="white" />
      </div>
      <div className="header_name" onClick={() => history.push("/")}>
        Tarzkar
      </div>
      <div className="header_icons">
        <div className="header_icon headers_icon-search">
          <FontAwesomeIcon icon={faSearch} color="white" />
        </div>
        <div className="header_icon headers_icon_cart">
          <Link to="/checkout">
            <FontAwesomeIcon icon={faShoppingCart} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
