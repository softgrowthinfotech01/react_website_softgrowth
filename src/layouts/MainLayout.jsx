import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Herosec from "../pages/Herosec";
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
