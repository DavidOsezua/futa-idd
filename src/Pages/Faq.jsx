import React from "react";
import styles from "./Faq.module.css";
import FaqComponent from "../components/general/FaqComponent";
import Enroll from "../components/general/Enroll";
import { faqQuestions } from "../data";

const Faq = () => {
  return (
    <section className="pt-[8rem]">
      <div className={`${styles.container}`}>
        <div className={`${styles.titleContainer}`}>
          <h2 className={`${styles.title}`}>
            Frequently <span className="text-[#754FE2]">Asked Questions</span>{" "}
          </h2>
          <p className={`${styles.text}`}>
            Have questions? We've got answers! Explore our frequently asked
            questions to find the information you need swiftly and effortlessly.
          </p>
        </div>

        <FaqComponent Sectiondata={faqQuestions} />
      </div>

      <Enroll />
    </section>
  );
};

export default Faq;
