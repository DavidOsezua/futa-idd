/* eslint-disable react/prop-types */
import React from "react";
import Button from "../general/Button";
import styles from "./AcademicProgramCard.module.css";
import { arrowPurple } from "../../assests";

const AcademicProgramCard = ({ academicObjectOne }) => {
  return (
    <div className={`${styles.card}`}>
      <h2 className={`${styles.title}`}>{academicObjectOne.title}</h2>
      <p>{academicObjectOne.text}</p>
      <Button className={`bg-[transparent] text-[#754FE2]`}>
        Learn more <img src={arrowPurple} />
      </Button>
    </div>
  );
};

export default AcademicProgramCard;
