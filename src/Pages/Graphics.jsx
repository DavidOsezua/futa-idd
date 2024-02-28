import React from "react";
import styles from "./Graphics.module.css";
import { graphicsBG, rightArk, leftArk, graphicsAbt } from "../assests";

const Graphics = () => {
  return (
    <>
      <section className={`${styles.section} pt-[8rem] px-[1rem]`}>
        {/* <div className={`${styles.overlay}`}></div> */}
        <div className={`${styles.heroContainer}`}>
          <h2 className={`${styles.title}`}>
            Graphics and multimedia technology
          </h2>
          <img src={graphicsBG} className={`${styles.heroImage}`} />
        </div>
        <img src={rightArk} className={`${styles.rightArk}`} />
        <img src={leftArk} className={`${styles.leftArk}`} />
      </section>

      <section className="pt-[5rem]">
        <div className={`${styles.container}`}>
          <div className={`${styles.wrapper}`}>
            <p>Content</p>
            <img src={graphicsAbt} className={`${styles.image}`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Graphics;
