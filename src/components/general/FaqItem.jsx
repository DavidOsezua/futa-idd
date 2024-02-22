import React, { useState, useEffect } from "react";
import styles from "./FaqItem.module.css";
import { plus } from "../../assests";

const FaqItem = ({ num, curr, onOpen, resource, className }) => {
  const isOpen = num === curr;
  const openHandler = () => {
    onOpen(isOpen ? null : num);
  };

  //   const [loading, setLoading] = useState();

  //   useEffect(function () {
  //     async function fetch() {
  //       setLoading(true);
  //       await new Promise((resolve) => setTimeout(resolve, 3000));

  //       setLoading(false);
  //     }

  //     fetch();
  //   }, []);

  return (
    <div className={`${styles.container} ${className}`} onClick={openHandler}>
      <div
        className={`${styles.titleContent} ${
          isOpen && styles.titleContentRemove
        }`}
      >
        <h4 className={`${styles.title}`}>{resource.questions}</h4>
        <img
          src={plus}
          className={`cursor-pointer w-[20px]`}
          onClick={openHandler}
        />
      </div>

      <div className={`${styles.text} ${isOpen && styles.showText}`}>
        <p> {resource.answers}</p>
      </div>
    </div>
  );
};

export default FaqItem;
