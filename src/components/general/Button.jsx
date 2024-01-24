// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ children, className }) => {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
};

export default Button;
