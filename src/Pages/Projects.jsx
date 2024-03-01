import React, { useState } from "react";
import styles from "./Projects.module.css";
import { graphics } from "../data";
import ProjectCard from "../components/general/ProjectCard";

const Projects = () => {
  const [active, setActive] = useState("Gallery");

  const activeHandler = (text) => {
    setActive(text);
  };
  return (
    <>
      <section className={`pt-[8rem] bg-[#754FE2] pb-[5rem]`}>
        <div
          className={`flex flex-col justify-center items-center text-center ${styles.container}`}
        >
          <h2 className="font-bold text-[1.7rem] text-[#fff]">
            Projects Showcase
          </h2>
          <p className="text-[#fff] text-[0.95rem]">
            Explore the boundless realm of design excellence through our diverse
            portfolio of projects. Our students and faculty continually push the
            boundaries of creativity, innovation, and problem-solving. These
            projects reflect our commitment to design that not only captivates
            the eye but also enriches lives and transforms industries.
          </p>
        </div>
      </section>

      <section className={`pt-[2rem]`}>
        <div className={`${styles.container2}`}>
          {/* tabs */}

          <div className={`pt-[4rem] flex justify-center `}>
            <div className={`${styles.tabContainer}`}>
              <p
                onClick={() => activeHandler("Gallery")}
                className={`${
                  active === "Gallery" ? styles.activeText : ""
                } cursor-pointer`}
              >
                Gallery
              </p>
              <p
                onClick={() => activeHandler("projects")}
                className={`${
                  active === "projects" ? styles.activeText : ""
                } cursor-pointer`}
              >
                Projects
              </p>
              <p
                onClick={() => activeHandler("Departments")}
                className={`${
                  active === "Departments" ? styles.activeText : ""
                } cursor-pointer`}
              >
                Departments
              </p>
            </div>
          </div>

          <div>
            {active === "Gallery" && (
              <div className={`${styles.galleryContainer}`}>
                {graphics.map((card, i) => (
                  <ProjectCard key={i} card={card} />
                ))}
              </div>
            )}
            {active === "projects" && <div>Projects</div>}
            {active === "Departments" && <div>Departments</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
