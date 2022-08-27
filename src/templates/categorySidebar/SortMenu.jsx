import React from "react";
import GreenOval from "../../trifles/GreenOval";
import classes from "./sortMenu.module.scss";

const SortMenu = ({ content }) => {
  return (
    <div className={classes.sortMenu}>
      <h3>{content.title}</h3>
      <div className={classes.menuContent}>
        {content.categories.map((item) => (
          <div key={Date.now() + Math.random()}>
            <span>{item.name}</span>
            <GreenOval>{item.quantity}</GreenOval>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortMenu;
