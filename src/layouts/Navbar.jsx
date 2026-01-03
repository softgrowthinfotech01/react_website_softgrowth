import logo from "../assets/soft_logo_org.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header id="header" className="d-flex align-items-center sticky-top">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="logo">
          <Link to="/" className="text-decoration-none text-white">
            <img src={logo} alt="img" />
            Softgrowth Infotech
          </Link>
        </div>

        <nav
          id="navbar"
          className={`navbar ${mobileNav ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/career">Career</Link></li>

            <li className="dropdown">
              <span>
                Training Programs <i className="bi bi-chevron-down"></i>
              </span>
              <ul>
                <li><Link to="/frontend_course">Front-End Development</Link></li>
                <li><Link to="/software_testing">Software Testing</Link></li>
                <li><Link to="/placements">Placements</Link></li>
              </ul>
            </li>

            <li><Link to="/contact">Contact</Link></li>

            <li>
              <a
                href="http://softgrowthblog.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>

          {/* MOBILE TOGGLE ICON */}
          <i
            className={`bi ${
              mobileNav ? "bi-x" : "bi-list"
            } mobile-nav-toggle text-light`}
            onClick={toggleMobileNav}
          />
        </nav>
      </div>
    </header>
  );
}
