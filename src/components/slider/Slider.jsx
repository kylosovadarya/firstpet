import React from "react";
import AboutProduct from "./AboutProduct";
import classes from "./slider.module.scss";
import SliderHeader from "./SliderHeader";

const Slider = () => {
  return (
    <div className={classes.slider}>
     <SliderHeader />
     <AboutProduct />
    </div>
  );
};

export default Slider;
