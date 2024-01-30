import { useState } from "react";
import "./Slider.css"; // Import your CSS file
import { student } from "../../assests";

const Testimonial = () => {
  // Dummy data for slides
  const dummySlides = [
    `“At the Industrial Design Department, I'm not just learning design; I'm living it. The dynamic projects, supportive faculty, and collaborative spirit make every day an opportunity to innovate. Grateful for the hands-on experiences shaping my journey in industrial design. At the Industrial Design Department, I'm not just learning design; I'm living it. The dynamic projects, supportive faculty, and collaborative spirit make every day an opportunity to innovate. The dynamic projects, supportive faculty, and collaborative spirit make every day an opportunity to innovate.”`,
    `"Being a part of the Industrial Design Department is more than just a learning experience; it's a journey of creativity and innovation. The challenging projects, guidance from dedicated faculty, and the culture of collaboration inspire me every day. Proud to be shaping my path in industrial design through hands-on experiences."`,
    `"The Industrial Design Department is a vibrant community where learning extends beyond the classroom. Engaging in dynamic projects, receiving support from passionate faculty, and embracing a culture of collaboration fuel my journey in design. Each day is an exciting opportunity to explore, create, and innovate."`,
  ];

  // State variables
  const [currSlide, setCurrSlide] = useState(0);

  // Function to move to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrSlide(slideIndex);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrSlide((prevCurrSlide) =>
      prevCurrSlide === dummySlides.length - 1 ? 0 : prevCurrSlide + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrSlide((prevCurrSlide) =>
      prevCurrSlide === 0 ? dummySlides.length - 1 : prevCurrSlide - 1
    );
  };

  return (
    <section className="pb-[3rem] pt-[3rem]">
      <div className="text-center">
        <h2 className="title">TESTIMONIALS</h2>
        <p className="text">
          Hear What Our
          <span className="text-[#754FE2]"> Students Have to Say </span>{" "}
        </p>
      </div>

      <div className="testContainer">
        {/* Render your slide components here */}
        <div className="textAndControl">
          <div className="slide-container">
            <div
              className="slide"
              style={{ transform: `translateX(-${currSlide * 100}%)` }}
            >
              {dummySlides.map((slide, index) => (
                <div key={index} className="slide-item">
                  <p className="mb-[1rem] slide-text"> {slide}</p>
                  <p>-Adelu Adetayo</p>
                </div>
              ))}
            </div>
          </div>

          <div className="imgContainer mobile">
            <img src={student} />
          </div>

          <div className="control">
            <div className="flex gap-[0.2rem] controlContainer">
              {dummySlides.map((slide, index) => (
                <div
                  key={index}
                  className={`dot ${
                    index === currSlide ? "bg-[#754FE2]" : ""
                  } cursor-pointer`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>

            <div className="btnContainer">
              {/* Buttons for navigation */}
              <button className="slider__btn--left" onClick={prevSlide}>
                Previous
              </button>
              <button className="slider__btn--right" onClick={nextSlide}>
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="desktop">
          <img src={student} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
