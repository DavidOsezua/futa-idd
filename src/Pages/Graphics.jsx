import React, { useState } from "react";
import styles from "./Graphics.module.css";
import {
  graphicsBG,
  rightArk,
  leftArk,
  graphicsAbt,
  DrIbiwoye,
  ProfKayode,
  ProfOladumiye,
  DrEtsename,
  DrOdeyemi,
  MrUthman,
  mrDare,
} from "../assests";
import { coreCourses, graphics } from "../data";
import CoreCoursesCard from "../components/general/CoreCoursesCard";
import ProjectCard from "../components/general/ProjectCard";

const Graphics = () => {
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
            Graphics and multimedia technology
          </h2>
          <img src={graphicsBG} className={`${styles.heroImage}`} />
        </div>
        <img src={rightArk} className={`${styles.rightArk}`} />
        <img src={leftArk} className={`${styles.leftArk}`} />
      </section>

      <section className="pt-[5rem]">
        <div className={`${styles.container}`}>
          <h2 className={`${styles.contentTitle} ${styles.mobileTitle}`}>
            Graphics <span className="text-[#754FE2]">Design</span>{" "}
          </h2>
          <div className={`${styles.wrapper}`}>
            <img src={graphicsAbt} className={`${styles.Abtimage}`} />
            <div>
              <h2 className={`${styles.contentTitle} ${styles.desktopTitle}`}>
                Graphics <span className="text-[#754FE2]">Design</span>{" "}
              </h2>
              <p className={`${styles.text}`}>
                Graphics design is a collaborative process between a client and
                a designer in conjunction with producers of form (i.e printers,
                programmers, sign-makers, etc) to covey a specific message to a
                target audience. The term “graphic design” can also refer to a
                number of artistic and professional disciplines that focus on
                visual communication and presentation.
              </p>

              <p className={`${styles.text}`}>
                The field is also often referred to as visual communication
                design. Various methods are used to create and combine words,
                symbols, and images to achieve visual representation of design
                ideas and Production. A graphic designer may use typography,
                visual arts and page layout techniques to produce his/her final
                work. Graphic design often refers to both the process(designing)
                by which the communication is created and the products(designs)
                are generated.
              </p>

              <p className={`${styles.text}`}>
                Graphic design teaches you to develop your creative ideas and
                produce projects in a cross-cultural environment and cultural
                environment and offers you proven techniques for successful
                work. Graphics provide a sense of professionalism from visual
                aspect. Graphics are of paramount importance on any
                communication media.{" "}
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
                <h2 className={`${styles.rankTitle}`}>Dr T.I Ibiwoye</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>
          </div>

          <h2 className={`${styles.rankTitle} ${styles.center}`}>
            Our Lecturer
          </h2>
          <div className={`${styles.imageContainer}`}>
            <div className={`${styles.imageWrapper}`}>
              <img src={ProfKayode} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. O.F Kayode</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={ProfOladumiye} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Prof. E.B Oladumiye</h2>
                <p>Senior ceramics lecturer</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={DrEtsename} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Dr. E.L Etsename</h2>
                <p>Graphics lecturer</p>
              </div>
            </div>
          </div>

          <h2 className={`${styles.rankTitle} ${styles.center}`}>
            Technologist
          </h2>
          <div className={`${styles.imageContainer}`}>
            <div className={`${styles.imageWrapper}`}>
              <img src={DrOdeyemi} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Dr. Odeyemi</h2>
                <p>Chief Technologist</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={MrUthman} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Mr. Uthman</h2>
                <p>Graphics Technologist</p>
              </div>
            </div>

            <div className={`${styles.imageWrapper}`}>
              <img src={mrDare} className={`${styles.image}`} />
              <div className={`${styles.rank}`}>
                <h2 className={`${styles.rankTitle}`}>Mr.Dare</h2>
                <p>Graphics Technologist</p>
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
            <span className="text-[#754FE2]">Graphics</span> Works Done
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

export default Graphics;
