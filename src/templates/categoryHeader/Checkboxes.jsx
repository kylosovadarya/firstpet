import React from "react";
import classes from "./checkboxes.module.scss";

const Checkboxes = () => {
  const radio = ["Fruits", "Vegetables"];
  const checks = ["Green", "Yellow"];

  return (
    <div className={classes.checkboxes}>
      <form>
        {radio.map((item) => (
          <div className={classes.container} key={`radio-${item}`}>
            <input id={`id-radio-${item}`} name="fruits" type="radio" />
            <label htmlFor={`id-radio-${item}`}>{item}</label>
          </div>
        ))}
      </form>

      {checks.map((item) => (
        <form key={`checkbox-${item}`}>
          <input id={`id-check-${item}`} name={item} type="checkbox" />
          <label htmlFor={`id-check-${item}`}>{item}</label>
        </form>
      ))}
    </div>
  );
};

export default Checkboxes;
