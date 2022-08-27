import React from "react";
import DescriptionBody from "../templates/descriptionBody/DescriptionBody";
import Breadcrumps from "../components/Breadcrumps";
import classes from "./description.module.scss";
import Headline from "../components/Headline";
import Cards from "../components/cards/Cards";

const Description = () => {
  return (
    <div className={classes.description}>
      <Breadcrumps />
      <DescriptionBody />
      <Headline
        style={{ fontFamily: "Poppins", fontWeight: 500 }}
        headline={"Related products"}
        button={"More products"}
      />
      <Cards />
    </div>
  );
};

export default Description;
