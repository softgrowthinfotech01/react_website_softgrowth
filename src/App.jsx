import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FrontendCourse from "./pages/FrontendCourse";
import TestingCourse from "./pages/TestingCourse";
import ScrollToTop from "./components/ScrollToTop";
import Review from "./components/Review";
import Login from "./login/Login";
import ProtectedRoute from "./login/ProtectedRoute";
import MyForm from "./pages/MyForm";
import NotFound from "./pages/NotFound";

const Portfolio = lazy(() => import("./pages/Portfolio"));
const Placements = lazy(() => import("./pages/placements"));

function App() {
  return (
    //  basename="/react_website_softgrowth/"
    <BrowserRouter basename="/react_website_softgrowth/">
      <ScrollToTop />
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/frontend_course" element={<FrontendCourse />} />
            <Route path="/software_testing" element={<TestingCourse />} />
            <Route path="/review" element={<Review />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* 🔐 PROTECTED SAVE COMPONENT */}
            <Route
              path="/save"
              element={
                <ProtectedRoute>
                  <MyForm />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
