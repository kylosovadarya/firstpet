import React from "react";
import AngleBtn from "../../trifles/AngleBtn";
import classes from "./banner.module.scss";

function Banner({ banner }) {
  return (
    <div className={classes.banner}>
      <div>
        <p className={classes.subfocus}>{banner.sub}</p>
        <h3>{banner.heading}</h3>
      </div>
      <AngleBtn className={classes.btn}>{banner.button}</AngleBtn>
    </div>
  );
}

export default Banner;
