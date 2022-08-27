import React from "react";
import AngleRight from "./icons/AngleRight";

const AngleBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: "11px 16px",
        borderRadius: 12,

        display: "inline-flex",
        gap: 12,
        alignItems: "center",

        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: 15,

        backgroundColor: `${props.bg}`,
      }}
    >
      {children}
      <AngleRight style={{ color: `${props.angleColor}` }} />
    </button>
  );
};

export default AngleBtn;
