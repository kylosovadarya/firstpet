import React from "react";
import classes from "./checkout.module.scss";
import Breadcrumps from "../components/Breadcrumps";
import CheckoutBody from "../templates/CheckoutBody";

const Checkout = () => {
  return (
    <div className={classes.checkout}>
      <Breadcrumps />
      <CheckoutBody />
    </div>
  );
};

export default Checkout;
