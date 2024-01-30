import CustomImageNM from "../general/CustomImageNM";
import { Slide, Fade, Bounce } from "react-awesome-reveal";

// eslint-disable-next-line no-unused-vars
const Banner = () => {
  return (
    <section className="pt-28 pb-28 md:pt-36 relative bg-primary-bg flex flex-col gap-10 md:gap-20">
      {/* hero content */}
      <Slide>
        <div className="text-center flex flex-col gap-4 md:gap-6">
          <h1 className="text-primary-dark text-display lg:text-[65px] mx-auto font-bold leading-[54px] tracking-[-0.9px] max-w-[682px]">
            Building the <span className="text-primary">Future</span> of Design
            that works
          </h1>
          <p className="max-w-[742px] mx-auto text-[#5B5B5B] text-base leading-5 md:text-xl">
            Nestled within the Federal University of Technology, Akure (FUTA),
            the Industrial Design Department shines as a beacon of creativity
            and innovation.
          </p>

          <button className="primary-button mx-auto">Learn more</button>
        </div>
      </Slide>
      {/* hero image */}

      <Fade>
        <div className="block sm:flex gap-3 items-start w-max mx-auto">
          <CustomImageNM
            className="w-full h-[308px] max-w-[334px] sm:max-w-[281px] sm:h-[319px]"
            src="/homepage/banner-image-1.jpg"
            alt=""
          />
          <CustomImageNM
            className="hidden sm:block w-full h-[308px] max-w-[334px] sm:max-w-[281px] sm:h-[319px] mt-8"
            src="/homepage/banner-image-2.jpg"
            alt=""
          />
          <CustomImageNM
            className="hidden lg:block w-full h-[308px] max-w-[334px] sm:max-w-[281px] sm:h-[319px]"
            src="/homepage/banner-image-3.jpg"
            alt=""
          />
          <CustomImageNM
            className="hidden xl:block w-full h-[308px] max-w-[334px] sm:max-w-[281px] sm:h-[319px] mt-8"
            src="/homepage/banner-image-4.jpg"
            alt=""
          />

          {/* <div className="hidden sm:block rounded-md w-full h-[308px] max-w-[334px] bg-stroke mx-auto">
                <img src="" alt="" />
            </div>
            <div className="hidden md:block rounded-md w-full h-[308px] max-w-[334px] max-h-[308px] bg-stroke mx-auto">
                <img src="" alt="" />
            </div>
            <div className="hidden md:blockrounded-md w-full h-[308px] max-w-[334px] max-h-[308px] bg-stroke mx-auto">
                <img src="" alt="" />
            </div> */}
        </div>
      </Fade>

      {/* hero card */}

      <div className="bg-white border border-stroke p-3 absolute top-full -translate-y-1/2 left-5 right-5 grid grid-cols-2 gap-y-5 justify-items-center md:grid-cols-4 lg:w-[984px] lg:right-0 lg:left-1/2 lg:-translate-x-1/2">
        <div className="flex flex-col gap-1">
          <span className="text-black text-3xl font-normal md:text-[42px] md:font-medium">
            40+
          </span>
          <span className="text-black text-sm font-light md:text-lg">
            Lecturers and staff
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-black text-3xl font-normal md:text-[42px] md:font-medium">
            10000+
          </span>
          <span className="text-black text-sm font-light md:text-lg">
            Graduates
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-black text-3xl font-normal md:text-[42px] md:font-medium">
            4
          </span>
          <span className="text-black text-sm font-light md:text-lg">
            Active programs
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-black text-3xl font-normal md:text-[42px] md:font-medium">
            20
          </span>
          <span className="text-black text-sm font-light md:text-lg">
            Active programs
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
