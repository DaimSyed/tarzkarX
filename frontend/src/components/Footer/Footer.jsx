import React from "react";
import {
  faCopyright,
  faEnvelope,
  faLocationArrow,
  faMobile,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import f1 from "../../assets/footer/1.png";
import f2 from "../../assets/footer/2.png";
import Padder from "../Layout/Padder";
const Footer = () => {
  return (
    <footer className="footer">
      <Padder>
        <div className="footer_shop_store">
          <div className="footer_shop">
            <div className="footer-heading">Shop</div>
            <div className="footer-item">Visit our store</div>
            <div className="footer-item">About Us</div>
            <div className="footer-item">Our Blogs</div>
            <div className="footer-item">Craftsmanship</div>
            <div className="footer-item">Apply for a job</div>
          </div>
          <div className="footer_store">
            <div className="footer-heading">Store Info</div>
            <div className="footer-info">
              <FontAwesomeIcon
                className="footer-info--icon"
                icon={faMobileAlt}
              />
              <span>0300 0001122</span>
            </div>
            <div className="footer-info">
              <FontAwesomeIcon
                className="footer-info--icon"
                icon={faEnvelope}
              />
              <span>xyz@gmail.com</span>
            </div>
            <div className="footer-info">
              <FontAwesomeIcon
                className="footer-info--icon"
                icon={faLocationArrow}
              />
              <span>X floor, Cantt Lahore</span>
            </div>
          </div>
        </div>
        <div className="footer_payments">
          <div className="footer-heading">Payment Methods</div>
          <div className="footer_payment">
            <img src={f1} alt="" />
          </div>
          <div className="footer_payment">
            <img src={f2} alt="" />
          </div>
        </div>
        <div className="footer_social">
          <div className="footer_icon">
            <FontAwesomeIcon className="footer_socia-icon" icon={faFacebookF} />
          </div>
          <div className="footer_icon">
            <FontAwesomeIcon className="footer_socia-icon" icon={faInstagram} />
          </div>
          <div className="footer_icon">
            <FontAwesomeIcon className="footer_socia-icon" icon={faTwitter} />
          </div>
          <div className="footer_icon">
            <FontAwesomeIcon
              className="footer_socia-icon"
              icon={faLinkedinIn}
            />
          </div>
        </div>
      </Padder>
      <hr />
      <div className="footer_copyright">
        <FontAwesomeIcon icon={faCopyright} />
        2021, Qode Interactive, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
