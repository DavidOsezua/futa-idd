import React from "react";
import Enroll from "../components/general/Enroll";
import styles from "./Staffs.module.css";
import {
  DrAdelabu,
  DrAjala,
  DrDare,
  DrErhuanga,
  DrEtsename,
  DrOdeyemi,
  DrOlogunwa,
  MrUthman,
  ProfKashim,
  ProfKayode,
  ProfOladumiye,
} from "../assests";

const Staffs = () => {
  return (
    <section className="pt-[8rem] bg-[#dddada]">
      <div className={`${styles.container}`}>
        <h2 className={`${styles.title} text-center`}>
          Meet our <span className="text-[#754FE2]"> Staffs</span>
        </h2>

        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.imageWrapper}`}>
            <img src={ProfKayode} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2 className={`${styles.title}`}>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
        </div>

        <h2 className={`${styles.title}`}>Graphics section(Lecturers)</h2>
        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.imageWrapper}`}>
            <img src={ProfKayode} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2 className={`${styles.title}`}>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
          <div className={`${styles.imageWrapper}`}>
            <img src={ProfOladumiye} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2 className={`${styles.title}`}>Prof. E.B Oladumiye</h2>
              <p>Senior ceramics lecturer</p>
            </div>
          </div>

          <div className={`${styles.imageWrapper}`}>
            <img src={DrEtsename} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2 className={`${styles.title}`}>Dr. E.L Etsename</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
        </div>

        <h2 className={`${styles.title}`}>Graphics section(Technologist)</h2>
        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.imageWrapper}`}>
            <img src={DrOdeyemi} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
          <div className={`${styles.imageWrapper}`}>
            <img src={MrUthman} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>

          <div className={`${styles.imageWrapper}`}>
            <img src={DrDare} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
        </div>

        <h2 className={`${styles.title}`}>Ceramics section(Lecturers)</h2>
        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.imageWrapper}`}>
            <img src={ProfKashim} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>

          <div className={`${styles.imageWrapper}`}>
            <img src={DrErhuanga} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
          <div className={`${styles.imageWrapper}`}>
            <img src={DrAdelabu} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
          <div className={`${styles.imageWrapper}`}>
            <img src={DrAjala} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
          <div className={`${styles.imageWrapper}`}>
            <img src={DrOlogunwa} className={`${styles.image}`} />
            <div className={`${styles.rank}`}>
              <h2>Prof. O.F Kayode</h2>
              <p>Senior graphics lecturer</p>
            </div>
          </div>
        </div>
      </div>

      <Enroll />
    </section>
  );
};

export default Staffs;
