import React from "react";
import classes from "./categoryHeader.module.scss";
import Checkboxes from "./Checkboxes";
import ViewSelect from "./ViewSelect";
import AppliedFilters from "./AppliedFilters";
import Breadcrumps from "../../components/Breadcrumps";

const CategoryHeader = (props) => {
  return (
    <div className={classes.categoryHeader}>
      <Breadcrumps location={props.location} />
      <div className={classes.heading}>
        <h1>Fruit and vegetables</h1>
        <ViewSelect />
      </div>
      <Checkboxes />
      <AppliedFilters />
    </div>
  );
};

export default CategoryHeader;
