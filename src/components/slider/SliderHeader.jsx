import React from "react";
import classes from "./sliderHeader.module.scss";
import GreenOval from "../../trifles/GreenOval";

const SliderHeader = () => {
  return (
    <div className={classes.sliderHeader}>
      <div className={classes.sliderHeader}>
        <button>Description</button>
        <button>
          Reviews<GreenOval>18</GreenOval>
        </button>
        <button>
          Questions<GreenOval>4</GreenOval>
        </button>
      </div>
    </div>
  );
};

export default SliderHeader;
