import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Herosec from "../pages/Herosec";
import Placements from "../pages/placements";

import Mainlayout from "../pages/MainLayout";

export default function AppRouter() {
  return (
    <div>
    <Routes>
      <Route element={<Mainlayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placements" element={<Placements />} />
      </Route>
    </Routes>
    </div>
  );
}

