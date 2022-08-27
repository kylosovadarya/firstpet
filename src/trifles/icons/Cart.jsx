import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Cart({...props}) {
  return <FontAwesomeIcon {...props} icon={faBasketShopping} />;
}

export default Cart;
