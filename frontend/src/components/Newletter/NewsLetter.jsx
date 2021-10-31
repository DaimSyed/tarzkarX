import React from "react";
import Padder from "../Layout/Padder";
import "./NewsLetter.css";
import n1 from "../../assets/newsletter/1.png";
import n2 from "../../assets/newsletter/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const NewsLetter = () => {
  return (
    <Padder>
      <div className="newsletter">
        <div className="newletter_images">
          <div className="newsletter_img">
            <img src={n1} alt="" />
            <div className="newsletter_img-text">Free Shipping</div>
          </div>
          <div className="newsletter_img">
            <img src={n2} alt="" />
            <div className="newsletter_img-text">20 days return</div>
          </div>
        </div>
        <div className="newletter_heading">Sign Up for newsletter</div>
        <div className="newsletter_email">
          <input type="email" placeholder="Your Email" />
          <FontAwesomeIcon className="newsletter-icon" icon={faArrowRight} />
        </div>
      </div>
    </Padder>
  );
};

export default NewsLetter;
