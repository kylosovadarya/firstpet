import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AngleDown = ({ ...props }) => {
  return <FontAwesomeIcon {...props} icon={faAngleDown} />;
};

export default AngleDown;
