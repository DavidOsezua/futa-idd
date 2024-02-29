import React, { useState } from "react";
import styles from "./Ceramics.module.css";
import {
  graphicsBG,
  rightArk,
  leftArk,
  graphicsAbt,
  DrIbiwoye,
  backgroundCeramics,
} from "../assests";
import { coreCourses, graphics } from "../data";
import CoreCoursesCard from "../components/general/CoreCoursesCard";
import ProjectCard from "../components/general/ProjectCard";
const Ceramics = () => {
  const [active, setActive] = useState("Gallery");

  const activeHandler = (text) => {
    setActive(text);
  };
  return (
    <>
      <section className={`${styles.section} pt-[8rem] px-[1rem]`}>
        {/* <div className={`${styles.overlay}`}></div> */}
        <div className={`${styles.heroContainer}`}>
          <h2 className={`${styles.title}`}>
            Ceramics and industrial works section
          </h2>
          <img src={backgroundCeramics} className={`${styles.heroImage}`} />
        </div>
        <img src={rightArk} className={`${styles.rightArk}`} />
        <img src={leftArk} className={`${styles.leftArk}`} />
      </section>

      <section className="pt-[5rem]">
        <div className={`${styles.container}`}>
          <h2 className={`${styles.contentTitle} ${styles.mobileTitle}`}>
            Ceramics <span className="text-[#754FE2]">Design</span>{" "}
          </h2>
          <div className={`${styles.wrapper}`}>
            <img src={graphicsAbt} className={`${styles.Abtimage}`} />
            <div className={`${styles.contentWrapper}`}>
              <h2 className={`${styles.contentTitle} ${styles.desktopTitle}`}>
                Ceramics <span className="text-[#754FE2]">Design</span>{" "}
              </h2>
              <p className={`${styles.text}`}>
                A ceramic is an inorganic, non-metallic solid prepared by the
                action of heat and subsequent cooling. Ceramic materials may
                have a crystalline or partly crystalline structure. Because most
                common ceramic is often restricted to inorganic crystalline
                materials , as opposed to the non-crystalline glasses.
              </p>

              <p className={`${styles.text}`}>
                The ceramic section provides the specific fields of study which
                comprises the following: Identification of the different
                traditional art and craft materials and tools, practical
                practice in the various arts and crafts for skill training. More
                studies on shapes, forms nad design, Introduction to wheel
                throwing, Exhibition and evaluation of works, preparation of
                different clay bodies and glazes from locally available
                materials and more.
              </p>

              <p className={`${styles.text}`}>
                Technical study of ceramics machines and equipment, advanced
                studies, practice and professional projects. Exhibition and
                evaluation of students work to promote production and
                professionalism.
              </p>
            </div>
          </div>

          <h2 className={`${styles.rankTitle} ${styles.center}`}>
            Head Of Section
          </h2>

          <div className={`${styles.imageContainer}`}>
            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>
          </div>

          <h2 className={`${styles.rankTitle} ${styles.center}`}>
            Our Lecturer
          </h2>
          <div className={`${styles.imageContainer}`}>
            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>
          </div>

          <h2 className={`${styles.rankTitle} ${styles.center}`}>
            Technologist
          </h2>
          <div className={`${styles.imageContainer}`}>
            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={DrIbiwoye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>
          </div>

          {/* Graphics Core Courses */}

          <h2 className={`${styles.contentTitle} pt-[5rem]`}>
            Graphics <span className="text-[#754FE2] ">core courses</span>{" "}
          </h2>
          <div className={`${styles.courseContainer}`}>
            {coreCourses.map((coreCourse, i) => (
              <CoreCoursesCard key={i} coreCourse={coreCourse} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Gallery */}
      <section className={`pt-[6rem]`}>
        <div className={`${styles.container2}`}>
          <p>Our Gallery</p>
          <h2 className={`${styles.contentTitle}`}>
            <span className="text-[#754FE2]">Ceramics</span> Works Done
          </h2>
          <p className={`text-[0.95rem] pt-[0.5rem]`}>
            Dive into a world of artistry with our captivating ceramics. Each
            piece is a testament to skillful craftsmanship and creative
            expression. From stunning vases to practical tableware, our ceramics
            blend elegance with utility.
          </p>

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
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceramics;
