/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ValueCard.module.css";

const ValueCard = ({ valueObject }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.imgContainer}`}>
        <img src={valueObject.image} />
      </div>
      <h2 className={`${styles.title}`}>{valueObject.title}</h2>
      <p className={`${styles.text}`}>{valueObject.text}</p>
    </div>
  );
};

export default ValueCard;
