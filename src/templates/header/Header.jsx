import React from "react";
import classes from "./header.module.scss";
import Navbar from "./Navbar";
import SearchBlock from "./SearchBlock";
import CategoriesMenu from "./CategoriesMenu";

const Header = ({ data }) => {
  return (
    <div className={classes.header}>
      <Navbar />
      <SearchBlock data={data} />
      <CategoriesMenu data={data} />
    </div>
  );
};

export default Header;
