import styles from "./Enroll.module.css";
import { cta } from "../../assests";
const Enroll = () => {
  return (
    <div className={`${styles.container} p-[1rem]`}>
      <div className={`${styles.imgContainer}`}>
        <div className={`${styles.overlay}`}></div>
        <img src={cta} className={`${styles.img}`} />
      </div>
      <div className={`${styles.textContainer}`}>
        <p>Enroll now!</p>
        <h1 className={`${styles.title}`}>
          Bring your creative side to life by enrolling!{" "}
        </h1>
        <p className={`${styles.text}`}>
          Welcome to the FUTA Industrial Design Department, where innovation
          meets creativity. Our department is a dynamic hub for aspiring
          designers.
        </p>
      </div>
    </div>
  );
};

export default Enroll;
