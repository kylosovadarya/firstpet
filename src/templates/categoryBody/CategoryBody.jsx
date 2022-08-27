import React from "react";
import classes from "./categoryBody.module.scss";
import CategorySidebar from "../categorySidebar/CategorySidebar";
import DetailedCards from "../../components/cards/DetailedCards";
import Pagination from "../Pagination";

const CategoryBody = () => {
  return (
    <div className={classes.categoryBody}>
      <CategorySidebar />
      <DetailedCards />
    </div>
  );
};

export default CategoryBody;
