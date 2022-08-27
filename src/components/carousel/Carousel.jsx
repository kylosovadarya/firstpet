import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./carousel.module.scss";
import { carousel } from "./CarouselContent";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const Carousel = () => {

  return (
    <div className={classes.carousel}>
      <ArrowLeft className={classes.arrowLeft} />
      <TransitionGroup className={classes.wrapper}>
        {carousel.map((item) => (
          <CSSTransition
            key={Math.random() + Date.now()}
            timeout={500}
            classNames="item"
          >
            <CarouselItem item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <ArrowRight className={classes.arrowRight} />
    </div>
  );
};

export default Carousel;
