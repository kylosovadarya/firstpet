import React from "react";
import classes from "./headTable.module.scss";

const headings = ["Vitamins", "Quantity", "%DV"];

const data = [
  ["Vitamin A equiv.", "735 mg", "104%"],
  ["Vitamin A equiv.", "735 mg", "104%"],
  ["Vitamin A equiv.", "735 mg", "104%"],
  ["Vitamin A equiv.", "735 mg", "104%"],
  ["Vitamin A equiv.", "735 mg", "104%"],
  ["Vitamin A equiv.", "735 mg", "104%"],
  ["Vitamin A equiv.", "735 mg", "104%"],
];

const HeadTable = () => {
  return (
    <table className={classes.headTable}>
      <thead>
        {headings.map((item) => (
          <th key={Math.random() + Date.now()}>{item}</th>
        ))}
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {item.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HeadTable;
