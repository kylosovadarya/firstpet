import React from "react";
import classes from "./carouselItem.module.scss";

const CarouselItem = ({ item }) => {
  return (
    <div className={classes.item}>
      <p>{item.text}</p>
      <span className={classes.name}>{item.name}</span>
      <span className={classes.portrait}></span>
    </div>
  );
};

export default CarouselItem;
