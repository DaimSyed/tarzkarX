import React from "react";
import "./Navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { hideNav } from "../../features/nav";

const Navigation = () => {
  const categories = useSelector((state) => state?.store?.categories);
  const nav = useSelector((state) => state?.nav.show);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      className="navigation"
      style={{ transform: `${nav ? "translateX(0)" : "translateX(-110%)"}` }}
    >
      <div className="naigation_icon" onClick={() => dispatch(hideNav())}>
        <FontAwesomeIcon className="navigation_cross" icon={faTimes} />
      </div>
      {categories ? (
        <div className="navigation_links">
          {categories?.map((category) => (
            <div
              onClick={() => {
                dispatch(hideNav());
                history.push(`/category/${category.name}`);
              }}
              key={category.id}
              className="navigation_link"
            >
              {category.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
