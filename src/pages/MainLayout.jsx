import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Outlet, useLocation  } from "react-router-dom";
import "./MainLayout.css";
import Herosec from "./Herosec";
import Loader from "../loader/Loader";

export default function MainLayout() {
  const location = useLocation();
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
