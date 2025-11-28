import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Herosec from "../pages/Herosec";
import Loader from "../loader/Loader";
import { useEffect } from "react";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
  
export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: false,     // animation should happen only once
    });
  }, []);

  return (
    <>
      {/* {location.pathname} */}
      {/* Show only on home page */}
      <Loader />
      {location.pathname === "/" && <Herosec />}
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
