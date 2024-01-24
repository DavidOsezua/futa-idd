/* eslint-disable react/prop-types */
import styles from "./Aboutus2Card.module.css";


const AboutUs2Card = ({ aboutObject, cardContainer, titleColor }) => {
  return (
    <div
      className={`${styles.card} ${
        cardContainer === "firstCard" ? styles.firstCard : styles.secondCard
      }`}
    >
      <h2 className={`${styles.title} ${titleColor ? styles.secondTitle : ""}`}>
        {aboutObject.title}
        <img src={aboutObject.titleImage} />
      </h2>
      <p className={`${styles.text}`}>{aboutObject.text}</p>
      <div className={`${styles.imgContainer}`}>
        <img src={aboutObject.image} className={`${styles.img}`} />
      </div>
    </div>
  );
};

export default AboutUs2Card;
