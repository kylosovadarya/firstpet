import React from "react";
import classes from "./appliedFilters.module.scss";

const AppliedFilters = () => {
  const filters = ["Filter 1", "Filter 2"];
  return (
    <div className={classes.appliedFilters}>
      <p>Applied filters:</p>
      {filters.map((item) => (
        <span key={Date.now() + Math.random()} className={classes.filter}>
          {item}
          <button>x</button>
        </span>
      ))}
    </div>
  );
};

export default AppliedFilters;
