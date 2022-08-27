import React, { useState, useRef, useEffect } from "react";
import classes from "./searchForm.module.scss";
import ChooseBtn from "./ChooseBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({ modal, setModal, data }) => {
  const [query, setQuery] = useState("");
  const [formActive, setFormActive] = useState(false);
  const dropDownClasses = [classes.dropDown];
  const formClasses = [classes.searchForm];
  const dropDownRef = useRef(null);
  const inputRef = useRef(null);

  const queryChange = (event) => {
    setQuery(event.target.value);
    event.target.value !== "" ? setFormActive(true) : setFormActive(false);
  };

  if (formActive) {
    dropDownClasses.push(classes.active);
    formClasses.push(classes.active);
  }

  useEffect(() => {
    const onClick = (e) => {
      if (
        !dropDownRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setFormActive(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <form>
      <div className={formClasses.join(" ")}>
        <ChooseBtn modal={modal} setModal={setModal} data={data} />
        <input
          placeholder={"Search products, categories..."}
          id="search-id"
          name="search"
          value={query}
          onChange={queryChange}
          ref={inputRef}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setQuery("");
          }}
        >
          <FontAwesomeIcon icon={faXmark} className={classes.xMark} />
        </button>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <ul className={dropDownClasses.join(" ")} ref={dropDownRef}>
        <li>{query}</li>
        <li>{query}</li>
        <li>{query}</li>
        <li>{query}</li>
        <li>{query}</li>
        <li>{query}</li>
      </ul>
    </form>
  );
};

export default SearchForm;
