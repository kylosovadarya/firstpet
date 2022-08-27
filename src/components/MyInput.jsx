import React from "react";
import classes from "./myInput.module.scss";

const MyInput = ({ ...props }) => {
  return (
    <input
      className={classes.myInput}
      {...props}
      style={{ width: props.width }}
    />
  );
};

export default MyInput;
