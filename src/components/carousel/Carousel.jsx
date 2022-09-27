import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./carousel.module.scss";
import { slides } from "./CarouselContent";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const Carousel = () => {
  const [clicks, setClicks] = useState(0);
  const slideClasses = [classes.slide];
  const [activeSlides, setActiveSlides] = useState(slides.slice(0, 4));

  const arrNext = () => {
    setActiveSlides(activeSlides.concat(slides.slice(4, 7)));
    setClicks(clicks + 1);
  };

  const rightClick = useRef(null);

  useEffect(() => {
    slideClasses.push(classes.active)
  }, [activeSlides])

  return (
    <div className={classes.carousel}>
      <div className={classes.wrapper}>
        <ArrowLeft className={classes.arrowLeft} />
        {activeSlides.map((item) => (
          <CarouselItem
            item={item}
            className={slideClasses.join(" ")}
            key={`carouselItem${slides.indexOf(item)}`}
          />
        ))}
        <ArrowRight
          className={classes.arrowRight}
          onClick={arrNext}
          ref={rightClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
