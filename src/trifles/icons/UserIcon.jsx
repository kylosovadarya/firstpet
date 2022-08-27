import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function UserIcon({...props}) {
  return <FontAwesomeIcon {...props} icon={faUser} />;
}

export default UserIcon;
