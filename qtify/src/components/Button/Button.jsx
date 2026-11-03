import React from "react";
import styles from "./Button.module.css";

export default function Button({ buttonText}) {
  return <button className={styles.button}> <label className={styles.buttonText}>{buttonText} </label></button>;
}
