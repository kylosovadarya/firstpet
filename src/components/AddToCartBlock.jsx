import React from "react";
import AngleBtn from "../trifles/AngleBtn";
import GreenBtn from "../trifles/GreenBtn";
import classes from './addToCartBlock.module.scss';

const AddToCartBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cost}>
        <h1>36.23 USD</h1>
        <p>48.56 USD</p>
      </div>
      <form>
        <select>
          <option>Pcs</option>
        </select>
        <GreenBtn>+ Add to cart</GreenBtn>
      </form>
    </div>
  );
};

export default AddToCartBlock;
