import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import AboutUs1 from "./components/homepage/AboutUs1";
import AboutUs2 from "./components/homepage/AboutUs2";
import Banner from "./components/homepage/Banner";
import OurAcademyPrograms from "./components/homepage/OurAcademyPrograms";
import OurProjects from "./components/homepage/OurProjects";
import OurStaffs from "./components/homepage/OurStaffs";
import Testimonial from "./components/homepage/Testimonial";
import Values from "./components/homepage/Values";

export default function App() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <Banner />
        <Values />
        <AboutUs1 />
        <AboutUs2 />
        <OurProjects />
        <OurAcademyPrograms />
        <OurStaffs />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
