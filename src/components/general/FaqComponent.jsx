/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./Faqcomponent.module.css";
import FaqItem from "./FaqItem";

const FaqComponent = ({ Sectiondata }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  const [curr, setIsOpen] = useState(null);

  return (
    <div className={styles.sectionContainer}>
      <ul className={styles.faqContainer}>
        {Sectiondata.map((resource, i) => (
          <FaqItem
            key={i}
            resource={resource}
            num={i}
            curr={curr}
            onOpen={setIsOpen}
            onToggle={toggleHandler}
            toggle={toggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default FaqComponent;
