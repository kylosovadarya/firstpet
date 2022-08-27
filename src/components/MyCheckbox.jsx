import React from "react";
import classes from "./myCheckbox.module.scss";

const MyCheckbox = ({...props}) => {
  return (
    <span className={classes.myCheckbox}>
      <input id={`id${props.item}`} name={props.item} type="checkbox" />
      <label htmlFor={`id${props.item}`}>{props.label}</label>
    </span>
  );
};

export default MyCheckbox;
