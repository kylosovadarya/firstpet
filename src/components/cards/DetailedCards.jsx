import React from "react";
import classes from "./detailedCards.module.scss";
import DetailedCard from "./DetailedCard";

const CardsList = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <div className={classes.cardList}>
      {list.map((card) => (
        <DetailedCard key={`long-card${card}`} card={card} />
      ))}
    </div>
  );
};

export default CardsList;
