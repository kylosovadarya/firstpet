import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./carousel.module.scss";
import { slides } from "./CarouselContent";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const Carousel = () => {
  return (
    <div className={classes.carousel}>
      <div className={classes.wrapper}>
        <ArrowLeft className={classes.arrowLeft} />
        {slides.map((item) => (
          <div key={Math.random() + Date.now()}>
            <CarouselItem item={item} className={classes.slide} />
          </div>
        ))}
        <ArrowRight className={classes.arrowRight} />
      </div>
    </div>
  );
};

export default Carousel;
