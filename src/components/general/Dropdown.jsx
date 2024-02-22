import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";
// import { whitepaper } from "../assests";

const Dropdown = () => {
  const [dropDownContainer, setDropdownContainer] = useState(false);
  const controlContainer = () => {
    setDropdownContainer((prev) => !prev);
  };
  return (
    <ul className={styles.container}>
      <li>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/resources" className={styles.link}>
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink to="/graphics" className={styles.link}>
          Graphics
        </NavLink>
      </li>
      <li>
        <NavLink to="/ceramics" className={styles.link}>
          Ceramics
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={styles.link}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={styles.link}>
          Faq
        </NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
