import React from "react";
import classes from "./table.module.scss";

const Table = ({table}) => {
  const tab = [{ 1: "A" }, { 2: "B" }, { 3: "C" }, { 4: "D" }];

  const col1 = Object.keys(tab);
  const col2 = Object.values(tab);

  return (
    <table className={classes.table}>
      <tbody>
        {table.map((item) => (
          <tr key={Date.now + Math.random()}>
            <td>{Object.keys(item)}</td>
            <td>{Object.values(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
