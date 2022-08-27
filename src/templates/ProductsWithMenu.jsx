import React from "react";
import classes from "./productsWithMenu.module.scss";
import Menu from "../components/menu/Menu";
import AngleBtn from "../trifles/AngleBtn";

function MenuTemplate(props) {
  return (
    <div className={classes.menuTemplate}>
      <div>
        <Menu menu={props.menu} />
        <AngleBtn bg={"#f5f5f5"} {...props}>
          {props.menu.button}
        </AngleBtn>
      </div>
      {props.content}
    </div>
  );
}

export default MenuTemplate;
