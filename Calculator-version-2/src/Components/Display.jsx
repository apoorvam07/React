import React from "react";
import styles from "./Display.module.css";
export default function Display({ displayValue }) {
  return (
    <input
      classNameName={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
}
