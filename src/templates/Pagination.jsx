import React from "react";
import classes from "./pagination.module.scss";
import GreenOval from "../trifles/GreenOval";
import GreenBtn from "../trifles/GreenBtn";
import AngleDown from "../trifles/icons/AngleDown";

const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <div>
        <span>Page: </span>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <GreenBtn style={{padding: '14px 18px'}}>
        Show more products <AngleDown style={{ color: "white", marginLeft: 10 }} />
      </GreenBtn>
      <div>
        <GreenOval>336</GreenOval>
        <span> Products</span>
      </div>
    </div>
  );
};

export default Pagination;
