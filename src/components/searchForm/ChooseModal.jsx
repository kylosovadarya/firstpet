import React from "react";
import classes from "./chooseModal.module.scss";

const ChooseModal = ({ categories, closeModal }) => {
  return (
    <form className={classes.chooseModal}>
      <input
        type="radio"
        name="chooseCategory"
        id="all-id-modal"
        value={"All categories"}
        onClick={closeModal}
      />
      <label for="all-id-modal">All</label>
      <ul>
        {categories.map((item) => (
          <li>
            <input
              type="radio"
              name="chooseCategory"
              id={`${item}-id-modal`}
              onClick={closeModal}
              value={item}
            />
            <label for={`${item}-id-modal`}>{item}</label>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default ChooseModal;
