import Homepage from "./Pages/Homepage";
import ScrollToTop from "./components/general/ScrollToTop";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import Projects from "./Pages/Projects";
import Staffs from "./Pages/Staffs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resources from "./Pages/Resources";
import Graphics from "./Pages/Graphics";
import Faq from "./Pages/Faq";
import Ceramics from "./Pages/Ceramics";

import Academics from "./Pages/Academics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="staff" element={<Staffs />} />
          <Route path="Academics" element={<Academics />} />
          <Route path="contact" element={<Contact />} />
          <Route path="graphics" element={<Graphics />} />
          <Route path="faq" element={<Faq />} />
          <Route path="ceramics" element={<Ceramics />} />
          <Route path="about" element={<About />} />
          <Route path="Resources" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
