import styles from "./OurAcademyPrograms.module.css";
import { academicDataOne, academicDataTwo } from "../../data";
import AcademicProgramCard from "./AcademicProgramCard";

const OurAcademyPrograms = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.sectionContainer}`}>
        <div className={`${styles.container1}`}>
          {academicDataOne.map((academicObjectOne, i) => (
            <AcademicProgramCard
              key={i}
              academicObjectOne={academicObjectOne}
            />
          ))}
        </div>
        <div className={`${styles.container2}`}>
          {academicDataTwo.map((academicObjectOne, i) => (
            <AcademicProgramCard
              key={i}
              academicObjectOne={academicObjectOne}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAcademyPrograms;