import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./carousel.module.scss";
import { slides } from "./CarouselContent";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const Carousel = () => {
  const [slideClasses, setSlideClasses] = useState([classes.slide]);
  const [activeSlides, setActiveSlides] = useState(slides.slice(0, 4));

  const clickNext = () => {
    setSlideClasses([...slideClasses, classes.active]);
  };

  console.log(slideClasses);
  console.log(activeSlides);
  return (
    <div className={classes.carousel}>
      <div className={classes.wrapper}>
        <ArrowLeft className={classes.arrowLeft} />
        {activeSlides.map((item) => (
          <div key={Math.random() + Date.now()}>
            <CarouselItem item={item} className={slideClasses.join(" ")} />
          </div>
        ))}
        <ArrowRight className={classes.arrowRight} onClick={clickNext} />
      </div>
    </div>
  );
};

export default Carousel;
