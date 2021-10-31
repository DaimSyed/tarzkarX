import React from "react";
import CommonHeading from "../CommonHeading/CommonHeading";
import Flex from "../Layout/Flex";
import Padder from "../Layout/Padder";
import "./Catalogues.css";
import c1 from "../../assets/catalogue/1.png";
import c2 from "../../assets/catalogue/2.png";
import Catalogue from "../Catalogue/Cataglogue";
const Catalogues = () => {
  return (
    <Padder>
      <CommonHeading text="Catalogue" />
      <Catalogue image={c1} heading="Connecting With th Earth" text={false} />
      <Catalogue image={c2} heading="Our Collection" text={false} reverse />
    </Padder>
  );
};

export default Catalogues;
