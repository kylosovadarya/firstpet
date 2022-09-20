import React from "react";
import classes from "./chooseModal.module.scss";

const ChooseModal = ({ categories, closeModal }) => {
  return (
    <div className={classes.chooseModal}>
      <input
        type="radio"
        name="chooseCategory"
        id="all-id-modal"
        value={"All categories"}
        onClick={closeModal}
      />
      <label htmlFor="all-id-modal">All</label>
      <ul>
        {categories.map((item) => (
          <li key={`${item}-id-modal`}>
            <input
              type="radio"
              name="chooseCategory"
              id={`${item}-id-modal`}
              onClick={closeModal}
              value={item}
            />
            <label htmlFor={`${item}-id-modal`}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseModal;
