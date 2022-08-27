import React from "react";
import classes from "./viewSelect.module.scss";
import List from "../../trifles/icons/List";
import Grid from "../../trifles/icons/Grid";

const ViewSelect = () => {
  return (
    <form className={classes.viewSelect}>
      <button type="button">
        <Grid />
        Grid view
      </button>
      <button type="button">
        <List />
        List view
      </button>
      <span className={classes.quantity}>117</span>
    </form>
  );
};

export default ViewSelect;
