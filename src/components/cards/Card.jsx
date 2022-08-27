import React from "react";
import classes from "./card.module.scss";
import GreenBtn from "../../trifles/GreenBtn";
import GreenOval from "../../trifles/GreenOval";

const Card = ({ card }) => {
  return (
    <div className={classes.card}>
      <div className={classes.picture}>
        <GreenOval className={classes.discount}>{card.discount}</GreenOval>
      </div>
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <div className={classes.flex}>
        <div>
          <div>
            <span className={classes.cost}>{card.cost}</span>
            <br />
            <span className={classes.initialCost}>{card.initialCost}</span>
          </div>
        </div>
        <GreenBtn>Buy now</GreenBtn>
      </div>
    </div>
  );
};

export default Card;
