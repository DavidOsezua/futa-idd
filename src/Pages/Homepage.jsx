import Banner from "../components/homepage/Banner";
import Values from "../components/homepage/Values";
import AboutUs1 from "../components/homepage/AboutUs1";
import AboutUs2 from "../components/homepage/AboutUs2";
import OurProjects from "../components/homepage/OurProjects";
import OurAcademyPrograms from "../components/homepage/OurAcademyPrograms";
import OurStaffs from "../components/homepage/OurStaffs";
import Enroll from "../components/general/Enroll";
import Testimonial from "../components/homepage/Testimonial";
const Homepage = () => {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Values />
      <AboutUs1 />
      <AboutUs2 />
      <OurProjects />
      <OurAcademyPrograms />
      <OurStaffs />
      <Testimonial />
      <Enroll />
    </main>
  );
};

export default Homepage;
