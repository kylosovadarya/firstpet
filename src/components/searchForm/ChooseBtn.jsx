import React, { useState } from "react";
import classes from "./chooseBtn.module.scss";
import Modal from "../modals/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import ChooseModal from "./ChooseModal";

const ChooseBtn = ({ modal, setModal, data }) => {
  const categories = data.map((obj) => Object.keys(obj)[0]);
  const [checkedName, setCheckedName] = useState("All categories");
  const btnClasses = [classes.chooseBtn];

  const checking = (e) => {
    setModal(false);
    setCheckedName(e.target.value);
    console.log(checkedName);
  };

  if (checkedName !== "All categories") {
    btnClasses.push(classes.active)
  }

  return (
    <>
      <button
        className={btnClasses.join(" ")}
        onClick={(e) => {
          e.preventDefault();
          setModal(true);
        }}
      >
        {checkedName}
        {checkedName === "All categories" ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon
            style={{color: "white", cursor: 'pointer'}}
            icon={faXmarkCircle}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setCheckedName("All categories");
            }}
          />
        )}
      </button>
      <Modal setVisible={setModal} visible={modal}>
        <ChooseModal categories={categories} closeModal={checking} />
      </Modal>
    </>
  );
};

export default ChooseBtn;
