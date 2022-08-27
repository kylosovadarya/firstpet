import React from "react";
import classes from "./menu.module.scss";

const Menu = ({ title, points, children }) => {
  return (
    <div className={classes.menu}>
      <h3>{title}</h3>
      <ul>
        {points.map((point) => (
          <li key={Date.now() + Math.random()}>{point}</li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default Menu;
