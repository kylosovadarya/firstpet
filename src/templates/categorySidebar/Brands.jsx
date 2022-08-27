import React from "react";
import MyCheckbox from "../../components/MyCheckbox";
import classes from "./brands.module.scss";

const Brands = ({ brands }) => {
  return (
    <div className={classes.brands}>
      <h3>Brands</h3>
      <form>
        {brands.map((item) => (
          <MyCheckbox
            key={Date.now() + Math.random()}
            item={item}
            label={item}
          />
        ))}
      </form>
    </div>
  );
};

export default Brands;
