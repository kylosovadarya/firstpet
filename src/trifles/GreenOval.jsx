import React from "react";

const GreenOval = ({ children, ...props }) => {
  return (
    <span {...props}
      style={{
        backgroundColor: "#f4f8ec",
        color: "#6a983c",

        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: 12,

        padding: "0 8px",
        borderRadius: 8,
      }}
    >
      {children}
    </span>
  );
};

export default GreenOval;
