import React from "react";
import classes from "./detailedCard.module.scss";
import Stars from "../../trifles/stars/Stars";
import Table from "../Table";
import { table } from "./detailedCardsContent";
import GreenBtn from "../../trifles/GreenBtn";
import AngleRight from "../../trifles/icons/AngleRight";
import Heart from "../../trifles/icons/Heart";

const DetailedCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.picture}></div>
      <div className={classes.text}>
        <div>
          <h3>Product title</h3>
          <p className={classes.description}>
            Space for a small product description
          </p>
          <Stars n={3} />
          <Table table={table} />
        </div>
        <div>
          <h3>36.99 USD</h3>
          <p className={classes.initialCost}>48.56</p>
          <p className={classes.shipping}>Free shipping</p>
          <p className={classes.delivery}>Delivery in 1 day</p>
          <GreenBtn>
            Product Detail
            <AngleRight style={{ marginLeft: 10, fontSize: 12 }} />
          </GreenBtn>
          <button className={classes.add}>
            <Heart />
            Add to wish list
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
