/* eslint-disable react/prop-types */
import styles from "./ValueCard.module.css";
import { Slide, Fade, Bounce } from "react-awesome-reveal";

const ValueCard = ({ valueObject }) => {
  return (
    <Bounce>
      <div className={`${styles.card}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={valueObject.image} />
        </div>
        <h2 className={`${styles.title}`}>{valueObject.title}</h2>
        <p className={`${styles.text}`}>{valueObject.text}</p>
      </div>
    </Bounce>
  );
};

export default ValueCard;
