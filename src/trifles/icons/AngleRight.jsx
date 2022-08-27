import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AngleRight = ({ ...props }) => {
  return <FontAwesomeIcon {...props} icon={faAngleRight} />;
};

export default AngleRight;
