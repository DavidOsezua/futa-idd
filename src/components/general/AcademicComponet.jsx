import React from "react";
import FaqComponent from "./FaqComponent";
import styles from "./AcademicComponent.module.css";
import { Level } from "../../data";

const AcademicComponet = ({ title }) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.title}`}>{title}</h2>

        <p className={`${styles.text}`}>
          Bachelor of Technology (BTech.) Industrial Design
        </p>

        <ul className={`${styles.options}`}>
          <li className={`${styles.text}`}>Ceramics Option</li>
          <li className={`${styles.text}`}>Graphics Option</li>
        </ul>

        <div className={`${styles.container}`}>
          <h2 className={`${styles.title}`}>
            Admission <span className={`${styles.span}`}>requirements</span>
          </h2>

          <p className={`${styles.text}`}>
            (a) UTME <span className={`${styles.span}`}>Requirements</span>
          </p>
          <p className={`${styles.text}`}>
            Candidates seeking admission into the Department of Industrial
            Design for the bachelor’s degree programme must possess 5 credit
            passes at the West African Senior Secondary School Certificate
            Examinations (WASSSCE) or NECO or GCE O’Level or its equivalent in
            not more than two sittings in the following subjects: English
            Language, Mathematics, Chemistry, and 2 of the following: Economics,
            Physics, Technical Drawing, Fine Art and Geography. Credit or Pass
            in Fine Art will be an additional advantage, while a pass grade in
            Physics will be acceptable.
          </p>

          <p className={`${styles.text}`}>
            UTME Subjects: <br /> English Language, Mathematics, Chemistry, and
            any one of Fine Art, Physics, Geography and Economics.
          </p>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <h2 className={`${styles.title} mt-[1rem]`}>
          Course <span className={`${styles.span}`}>synopsis</span>
        </h2>
        <FaqComponent Sectiondata={Level} />
      </div>
    </>
  );
};

export default AcademicComponet;
