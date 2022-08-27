import React from "react";
import classes from "./rating.module.scss";
import Stars from "../../trifles/stars/Stars";
import MyCheckbox from "../../components/MyCheckbox";

const Rating = () => {
  const formData = [1, 2, 3, 4, 5];

  return (
    <div className={classes.rating}>
      <h3>Rating</h3>
      {formData.map((item) => (
        <form key={Date.now() + Math.random()}>
          <MyCheckbox item={item} label={<Stars n={item} />} />
        </form>
      ))}
    </div>
  );
};

export default Rating;
