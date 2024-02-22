import React from "react";
import Enroll from "../components/general/Enroll";
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
    <section className="pt-[8rem] bg-[#FAFAFA]">
      <div>
        <h2>Meet our Staffs</h2>

        <div>
          <div>
            <img src={ProfKayode} className={``} />
          </div>
        </div>

        <h2>Graphics section(Lecturers)</h2>
        <div>
          <div>
            <img src={ProfKayode} />
          </div>
          <div>
            <img src={ProfOladumiye} />
          </div>
          <div>
            <img src={DrEtsename} />
          </div>
        </div>

        <h2>Graphics section(Technologist)</h2>
        <div>
          <div>
            <img src={DrOdeyemi} />
          </div>
          <div>
            <img src={MrUthman} />
          </div>
          <div>
            <img src={DrDare} />
          </div>
        </div>

        <h2>Ceramics section(Lecturers)</h2>
        <div>
          <div>
            <img src={ProfKashim} />
          </div>
          <div>
            <img src={DrErhuanga} />
          </div>
          <div>
            <img src={DrAdelabu} />
          </div>
          <div>
            <img src={DrAjala} />
          </div>
          <div>
            <img src={DrOlogunwa} />
          </div>
        </div>
      </div>

      <Enroll />
    </section>
  );
};

export default Staffs;
