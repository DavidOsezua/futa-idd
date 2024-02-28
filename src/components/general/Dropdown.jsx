/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";
// import { whitepaper } from "../assests";

const Dropdown = ({ onClose, leave }) => {
  return (
    <ul className={`${styles.container}`} onMouseLeave={leave}>
      <li onClick={onClose}>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
      </li>
      <li onClick={onClose}>
        <NavLink to="/resources" className={styles.link}>
          Resources
        </NavLink>
      </li>
      <li onClick={onClose}>
        <NavLink to="/graphics" className={styles.link}>
          Graphics
        </NavLink>
      </li>
      <li onClick={onClose}>
        <NavLink to="/ceramics" className={styles.link}>
          Ceramics
        </NavLink>
      </li>
      <li onClick={onClose}>
        <NavLink to="/contact" className={styles.link}>
          Contact
        </NavLink>
      </li>
      <li onClick={onClose}>
        <NavLink to="/faq" className={styles.link}>
          Faq
        </NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
