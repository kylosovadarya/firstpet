import React from "react";
import classes from "./navbar.module.scss";
import { Link } from "react-router-dom";
import Green from "../../trifles/Green";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div>
        <Green>Write me!</Green>
        <span>Telegram: @kylosovadaria</span>
        <span>kylosova.daria@icloud.com</span>
      </div>
      <nav>
        <Link to="/blog">
          <Green>Blog</Green>
        </Link>
        <Link to="/category">
          <Green>About us</Green>
        </Link>
        <Link to="/description">
          <Green>Careers</Green>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
