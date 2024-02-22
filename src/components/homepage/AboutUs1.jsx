import { Slide, Fade, Bounce } from "react-awesome-reveal";
import { about1 } from "../../assests";

const AboutUs1 = () => {
  return (
    <section className="bg-slate-100 py-12 px-5 md:py-28 flex flex-col gap-7 md:flex-row md:gap-7 md:items-center justify-center lg:gap-10">
      <Slide>
        <div className="md:py-1 md:w-[500px]">
          <h2 className="text-center mb-2 text-sm uppercase font-normal text-black/40 md:text-lg md:text-start">
            ABOUT INDUSTRIAL DESIGN
          </h2>
          <p className="text-center mb-4 text-4xl leading-9 text-primary-dark md:text-[40px] md:text-start">
            We’re a group of creatives
          </p>
          <p className="text-[#5B5B5B] text-base leading-7 md:text-lg md:leading-8 mb-4">
            Welcome to the FUTA Industrial Design Department, where innovation
            meets creativity. Our department is a dynamic hub for aspiring
            designers and visionary thinkers. With a rich history of excellence,
            we have consistently nurtured talent, pushing the boundaries
          </p>
          <button className="block primary-button mx-auto md:mx-0">
            Learn more
          </button>
        </div>
      </Slide>

      <div className="relative rounded-md w-full h-[305px] max-w-[334px] md:max-w-[388px] md:h-[355px] bg-stroke mx-auto md:mx-0 order-1">
        <img src={about1} alt="" />
        <img
          src="/play-circle.svg"
          className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
        />
      </div>
  </section>
  );
};

export default AboutUs1;
