import StaffCard from "./StaffCard";

const OurStaffs = () => {
  return (
    <section className="py-10 px-5 max-w-[1270px] mx-auto">
      <div className="flex gap-10 items-center justify-between mb-10 md:mb-14">
        <h2 className="text-[22px] text-black md:first-letter:text-[32px] uppercase font-semibold">
          Highlighted Academic Staffs
        </h2>
        <button className="text-base text-primary md:text-xl flex-shrink-0 flex items-center gap-1">
          See all{" "}
          <img
            src="/arrow-right.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
      </div>
      <div className="slide-show flex gap-4 md:gap-5 overflow-x-scroll pb-2 lg:justify-center">
        <StaffCard
          name="Prof. O.F Kayode"
          position="HOD(Graphics Section)"
          primary={true}
          src="/homepage/staff-image.png"
          alt=""
        />
        <StaffCard
          name="Dr L.E Etsename"
          position="Graphics Section"
          src="/homepage/staff-image.png"
          alt=""
        />
        <StaffCard
          name="Prof. E.O Oladumiye"
          position="Graphics Section"
          src="/homepage/staff-image.png"
          alt=""
        />
        <StaffCard
          name="Dr Adelabu"
          position="Ceramics Section"
          src="/homepage/staff-image.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default OurStaffs;
