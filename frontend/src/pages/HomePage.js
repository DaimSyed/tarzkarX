import React from "react";
import { useParams } from "react-router";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import bannerImg from "../assets/images/banner.png";
import CommonHeading from "../components/CommonHeading/CommonHeading";
import ShopByStyle from "../components/ShopByStyle/ShopByStyle";
import FeatureProduct from "../components/FeatureProducts/FeatureProduct";
import Brands from "../components/Brands/Brands";
import Catalogues from "../components/Catalogues/Catalogues";
import NewsLetter from "../components/Newletter/NewsLetter";
import Slider from "../components/Slider/Slider";
const HomePage = () => {
  return (
    <div className="homaPage">
      <Banner
        image={bannerImg}
        title="Furniture you"
        desc="'ll Love in 2021"
        centered={false}
        height="30vh"
        underline={false}
      />

      <ShopByStyle />
      <FeatureProduct />
      <Brands />
      <Catalogues />
      <NewsLetter />
      <Slider heading="Follow us on instagram" pagination = {false} />
    </div>
  );
};

export default HomePage;
