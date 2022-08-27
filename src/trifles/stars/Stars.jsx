import React from "react";
import Star from "./Star";

const Stars = ({ n }) => {
  const makeKey = function () {
    return Math.random() + Date.now();
  };

  const stars = [];
  const filled = { fill: "#FDBC15", stroke: "#FDBC15" };
  const unfilled = { fill: "transparent", stroke: "#d1d1d1" };

  for (let i = 0; i < n; i++) {
    stars.push(<Star key={makeKey()} color={filled} />);
  }

  for (let i = 0; i < 5 - n; i++) {
    stars.push(<Star key={makeKey()} color={unfilled} />);
  }
  return <span>{stars}</span>;
};

export default Stars;
