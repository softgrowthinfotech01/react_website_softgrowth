import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MyForm from "./pages/MyForm";
import FrontendCourse from "./pages/FrontendCourse";
import TestingCourse from "./pages/TestingCourse";
import EditPortfolio from "./components/forms/EditPortfolio";
import ScrollToTop from "./components/ScrollToTop";
import ThoughtForm from "./components/ThoughtForm";

// Only these two are lazy loaded
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Placements = lazy(() => import("./pages/placements"));

function App() {
  return (
    <BrowserRouter basename="/">
       <ScrollToTop />
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services" element={<Services />} />

            {/* Optimized pages */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/placements" element={<Placements />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/frontend_course" element={<FrontendCourse />} />
            <Route path="/software_testing" element={<TestingCourse />} />
            <Route path="/save" element={<MyForm />} />
<Route path="/thought" element={<ThoughtForm/>}/>
            <Route path="/edit-portfolio/:id" element={<EditPortfolio />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

