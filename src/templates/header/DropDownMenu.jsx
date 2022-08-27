import React from "react";
import classes from "./dropDownMenu.module.scss";
import Menu from "../../components/menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = ({ dropDown, data, point }) => {
  const dropDownClasses = [classes.dropDown];
  if (dropDown) {
    dropDownClasses.push(classes.active);
  }

  return (
    <div className={dropDownClasses.join(" ")}>
      <div className={classes.wrapper}>
        {data
          .filter((obj) => Object.keys(obj)[0] == point)
          .map((obj) =>
            obj[Object.keys(obj)].map((obj) => (
              <Menu title={obj.title} points={obj.points}>
                <span className={classes.more}>
                  More
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </Menu>
            ))
          )}
      </div>
    </div>
  );
};

export default DropDownMenu;
