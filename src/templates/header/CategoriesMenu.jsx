import React, { useState } from "react";
import classes from "./categoriesMenu.module.scss";
import AngleDown from "../../trifles/icons/AngleDown";
import DropDownMenu from "./DropDownMenu";

const CategoriesMenu = ({ data }) => {
  const [dropDown, setDropDown] = useState(false);
  const [activePointValue, setActivePointValue] = useState([]);

  const categories = data.map((item) => Object.keys(item)[0]);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.menu}
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
      >
        {categories.map((point) => (
          <div
            className={classes.point}
            key={`categoriesMenu-${point}`}
            onMouseEnter={() => {
              setActivePointValue(point);
            }}
          >
            {point}
            <AngleDown />
          </div>
        ))}
      </div>
      <DropDownMenu dropDown={dropDown} data={data} point={activePointValue} />
    </div>
  );
};

export default CategoriesMenu;
