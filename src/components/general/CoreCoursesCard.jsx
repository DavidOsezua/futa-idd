/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CoreCoursesCard.module.css";

const CoreCoursesCard = ({ coreCourse }) => {
  return (
    <div className={`${styles.container}`}>
      <img src={coreCourse.image} className={`${styles.image}`} />
      <div>
        <h2 className={`${styles.title}`}>{coreCourse.title}</h2>
        <p className={`${styles.content}`}>{coreCourse.content}</p>
      </div>
    </div>
  );
};

export default CoreCoursesCard;
