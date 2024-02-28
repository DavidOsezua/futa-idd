// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./AboutUs.module.css";
import Enroll from "../components/general/Enroll";
import AboutComponent from "../components/general/AboutComponent";
import Values from "../components/homepage/Values";
import { about1, abt2 } from "../assests";

const About = () => {
  return (
    <>
      <section className={`${styles.section}`}>
        <div className={`${styles.about}`}>
          <h2 className={`${styles.aboutTitle}`}>About The Department</h2>
          <ul className={`${styles.aboutLink}`}>
            <li>Home</li>
            <li>/</li>
            <li>About</li>
          </ul>
        </div>
      </section>

      <section className="py-[3rem]">
        <div className={`${styles.container}`}>
          {" "}
          <AboutComponent
            Image={about1}
            title={`Brief History of the Department`}
            content={`The Industrial Design Programme is concerned with the development of creative strategies in the provision of technological solutions to problems that are related to the specific needs of industry and the society in general. The programme places emphasis on the development of high professional skills as well as exploration and development of indigenous materials in the areas of Ceramics, Graphics and Textiles Design. It also focuses on producing graduates of high quality with creative skill and entrepreneurial knowledge that can make them self reliant as well as employable by the Printing, Textiles and Ceramics industries.`}
            switched
          />
        </div>
      </section>

      <section className="bg-[#2C3459] mt-[3rem] py-[2rem]">
        <div className={`${styles.container}`}>
          <AboutComponent
            Image={abt2}
            title={`Academic Programs`}
            content={`The Industrial Design Programme is concerned with the development of creative strategies in the provision of technological solutions to problems that are related to the specific needs of industry and the society in general. The programme places emphasis on the development of high professional skills as well as exploration and development of indigenous materials in the areas of Ceramics, Graphics and Textiles Design. It also focuses on producing graduates of high quality with creative skill and entrepreneurial knowledge that can make them self reliant as well as employable by the Printing, Textiles and Ceramics industries.`}
            invert
          />
        </div>
      </section>

      <section className="pt-[3rem]">
        <div className={`${styles.container}`}>
          <h2 className={`${styles.title}`}>
            <span className="text-[#754FE2]">PROGRAMME</span> OBJECTIVES{" "}
          </h2>
          <p>The object of the programme are to:</p>
          <ul className={`${styles.options}`}>
            <li>
              provide students with appropriate training and adequate intellect
              in the acquisition of skills and technological proficiency
              necessary for effective translation of creative designs to
              finished products;
            </li>
            <li>
              raise the level of aesthetic and cultural awareness in the
              students;
            </li>
            <li>
              guide students in using their creative skills to enhance and add
              breath to the quality of living.
            </li>
            <li>
              prepare students that will attract high international employment
              profile in the field of Industrial Design; and
            </li>
            <li>prepare students for self-reliant work after graduation.</li>
          </ul>
        </div>
      </section>

      <Values />

      <section className="py-[3rem]">
        <div className={`${styles.container}`}>
          <AboutComponent
            Image={about1}
            title={`Departments Course outline`}
            content={`The Industrial Design Programme is concerned with the development of creative strategies in the provision of technological solutions to problems that are related to the specific needs of industry and the society in general. The programme places emphasis on the development of high professional skills as well as exploration and development of indigenous materials in the areas of Ceramics, Graphics and Textiles Design. It also focuses on producing graduates of high quality with creative skill and entrepreneurial knowledge that can make them self reliant as well as employable by the Printing, Textiles and Ceramics industries.`}
          />
        </div>
      </section>

      <Enroll />
    </>
  );
};

export default About;
