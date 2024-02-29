/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ card }) => {
  return (
    <div>
      <img src={card.image} />
      <div>
        <p className="text-[#754FE2]">{card.course}</p>
        <h2 className={`${styles.title}`}>{card.title}</h2>
        <p className={`${styles.text}`}>{card.creator}</p>
        <p className={`${styles.text}`}>{card.matricNumber}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
