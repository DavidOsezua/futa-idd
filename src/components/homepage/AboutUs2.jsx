// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./AboutUs2.module.css";
import Button from "../general/Button";
import { aboutUs2Card } from "../../data";
import AboutUs2Card from "./AboutUs2Card";
import { arrow } from "../../assests";

const AboutUs2 = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.sectionContainer}`}>
        <div className={`${styles.designContainer}`}>
          <h1 className={`${styles.sectionTitle}`}>
            Sections in Industrial{" "}
            <span className="text-[#754FE2]">Design</span> Department, FUTA
          </h1>
          <p>
            Welcome to our Graphic Design Section, where art meets
            functionality, and creativity knows no bounds. We believe in the
            power of visual{" "}
          </p>
          <Button>
            Explore <img src={arrow} />
          </Button>
        </div>
        <div className={`${styles.cardContainer}`}>
          {aboutUs2Card.map((aboutObject, i) => (
            <AboutUs2Card
              key={i}
              aboutObject={aboutObject}
              cardContainer={i === 0 ? "firstCard" : "secondCard"}
              titleColor={i === 1 ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
