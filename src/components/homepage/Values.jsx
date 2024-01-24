// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Values.module.css";
import { valueData } from "../../data";
import ValueCard from "./ValueCard";

const Values = () => {
  return (
    <section>
      <h2 className="text-center pb-[3rem] pt-[3rem] text-[2rem]">
        Our <span className="text-[#754FE2]">values</span>
      </h2>
      <div className={`${styles.sectionContainer}`}>
        {valueData.map((valueObject, i) => (
          <ValueCard key={i} valueObject={valueObject} />
        ))}
      </div>
    </section>
  );
};

export default Values;
