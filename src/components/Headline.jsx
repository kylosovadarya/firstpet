import React from "react";
import classes from "./headline.module.scss";
import AngleBtn from "../trifles/AngleBtn";

function Headline({...props}) {
  return (
    <div className={classes.headline}>
      <h2 {...props}>{props.headline}</h2>
      <AngleBtn>{props.button}</AngleBtn>
    </div>
  );
}

export default Headline;
