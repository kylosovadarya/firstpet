import React, { useState } from "react";
import classes from "./searchBlock.module.scss";
import CartIndicator from "../../trifles/CartIndicator";
import { Link } from "react-router-dom";
import SearchForm from "../../components/searchForm/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";

const SearchBlock = ({ data }) => {
  const [modal, setModal] = useState(false);
  const count = 1;

  return (
    <div className={classes.searchBlock}>
      <h1>
        <Link to="/">Some products</Link>
      </h1>
      <SearchForm modal={modal} setModal={setModal} data={data} />
      <div>
        <button onClick={() => setModal(true)}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button onClick={() => setModal(true)}>
          <CartIndicator>{count}</CartIndicator>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </button>
      </div>
    </div>
  );
};

export default SearchBlock;
