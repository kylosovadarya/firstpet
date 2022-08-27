import React from "react";
import classes from "./greenBtn.module.scss";

const GreenBtn = ({ children, ...props }) => {
  return (
    <button className={classes.greenBtn} {...props}>
      {children}
    </button>
  );
};

export default GreenBtn;
