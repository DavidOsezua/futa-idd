import React from "react";
import { resourceImg } from "../assests";
import styles from "./Resources.module.css";

const Resources = () => {
  return (
    <section className="pt-[8rem]">
      <div className={`${styles.container}`}>
        <div className={`${styles.titleContainer}`}>
          <h2 className={`${styles.title}`}>
            Design <span>Resources</span>{" "}
          </h2>
          <p className={`${styles.text}`}>
            Dive into a curated collection of articles, books, guides, and
            tutorials designed to inspire and inform.
          </p>
        </div>

        <div className={`${styles.imgContainer}`}>
          <div>
            <img src={resourceImg} />
            <p className="text-center">Books</p>
          </div>
          <div>
            <img src={resourceImg} />
            <p className="text-center">Articles</p>
          </div>
          <div>
            <img src={resourceImg} />
            <p className="text-center">Books</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
