import React from "react";
import styles from "./Buttonscontainer.module.css";
export default function Buttonscontainer() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div classNameName={styles.buttonscontainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} classNameName={styles.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}
