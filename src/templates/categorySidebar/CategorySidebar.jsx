import React from "react";
import classes from "./categorySidebar.module.scss";
import SortMenu from "./SortMenu";
import Brands from "./Brands";
import Rating from './Rating';
import { brands, menuContent } from "./categorySidebarContent";

const CategorySidebar = () => {
  return (
    <div className={classes.categorySidebar}>
      <SortMenu content={menuContent} />
      <Brands brands={brands} />
      <Rating />
    </div>
  );
};

export default CategorySidebar;
