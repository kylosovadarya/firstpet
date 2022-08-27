import React from "react";
import classes from "./cartIndicator.module.scss";


const CartIndicator = ({children}) => {
  return <span className={classes.cartIndicator}>{children}</span>;
};

export default CartIndicator;
