import React from "react";
import classes from "./row.module.scss";

const Row = ({ children }) => {
  return <div className={classes.row}>{children}</div>;
};

export default Row;
