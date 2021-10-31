import React from "react";
import "./Banner.css";
import dummy from "../../assets/images/banner.png";
const Banner = ({
  title,
  image = dummy,
  height = "50vh",
  centered,
  desc,
  underline,
}) => {
  const numberFromdesc = desc?.match(/(\d+)/);
  const numberFromTitle = title?.match(/(\d+)/);

  return (
    <div className="banner" style={{ height: height }}>
      <div className="banner_img">
        <img src={image} alt="" />
      </div>
      <div
        className={`banner_text ${centered ? "centered" : ""} ${
          underline ? "underline" : ""
        }`}
      >
        <div className="banner_title">
          {title.replace(/[0-9]/g, "")}
          {numberFromTitle ? <strong>{numberFromTitle[0]}</strong> : null}
        </div>
        {desc && (
          <div className="banner_desc">
            {desc.replace(/[0-9]/g, "")}{" "}
            {numberFromdesc ? <strong>{numberFromdesc[0]}</strong> : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
