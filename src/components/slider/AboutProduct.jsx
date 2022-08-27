import React from "react";
import classes from './aboutProduct.module.scss';
import HeadTable from "./HeadTable";

const AboutProduct = () => {
  return (
    <div className={classes.aboutProduct}>
      <h4>Origins</h4>
      <p>
        We work hard to ensure that the fruit and vegetables we sell are fresh
        and high in quality. If we don’t grow them ourselves, we source them
        from carefully chosen suppliers, preferring to buy locally whenever
        possible.
      </p>
      <h4>How to cook</h4>
      <p>
        From roasts, salads and soups to casseroles and cakes, Carrots will lend
        sweetness, texture and colour to an enormous number of recipes.
      </p>
      <h4>Full of vitamins!</h4>
      <HeadTable />
    </div>
  );
};

export default AboutProduct;
