import React, { useState } from "react";
import Enroll from "../components/general/Enroll";
import styles from "./Academics.module.css";
import AcademicComponet from "../components/general/AcademicComponet";
import FaqComponent from "../components/general/FaqComponent";
import { Level } from "../data";

const Academics = () => {
  const [active, setActive] = useState("Bachelor");

  const activeHandler = (text) => {
    setActive(text);
  };
  return (
    <section className="pt-[8rem]">
      <div className={`${styles.container}`}>
        <div className={`${styles.titleContainer}`}>
          <h2 className={`${styles.title}`}>Academic Programs</h2>
          <p className={`${styles.text}`}>
            Our academic programs are meticulously crafted to cultivate the next
            generation of design visionaries. Rooted in a commitment to
            excellence, innovation, and holistic education, our programs are
            designed to empower students with the skills, knowledge, and mindset
            needed to thrive in the dynamic world of design.
          </p>
        </div>

        {/* tabs */}

        <div>
          <div className={`${styles.tabContainer}`}>
            <p
              onClick={() => activeHandler("Bachelor")}
              className={`${
                active === "Bachelor" ? styles.activeText : ""
              } cursor-pointer`}
            >
              Bachelor
            </p>
            <p
              onClick={() => activeHandler("Masters")}
              className={`${
                active === "Masters" ? styles.activeText : ""
              } cursor-pointer`}
            >
              Masters
            </p>
            <p
              onClick={() => activeHandler("Phd")}
              className={`${
                active === "Phd" ? styles.activeText : ""
              } cursor-pointer`}
            >
              Phd
            </p>
            <p
              onClick={() => activeHandler("Post Graduate Diploma")}
              className={`${
                active === "Post Graduate Diploma" ? styles.activeText : ""
              } cursor-pointer`}
            >
              Post Graduate Diploma
            </p>
          </div>

          <hr />
          <div>
            {active === "Bachelor" && (
              <div>
                <AcademicComponet title={"Bachelor"} />
              </div>
            )}
            {active === "Masters" && (
              <div>
                <AcademicComponet title={"Masters"} />
              </div>
            )}
            {active === "Phd" && (
              <div>
                <AcademicComponet title={"Phd"} />
              </div>
            )}
            {active === "Post Graduate Diploma" && (
              <div>
                <AcademicComponet title={"Post Graduate Diploma"} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Enroll />
    </section>
  );
};

export default Academics;
