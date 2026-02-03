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
            <li>
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-decoration-none">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-decoration-none">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-decoration-none">
                About
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-decoration-none">
                Career
              </Link>
            </li>

            <li className="dropdown">
              <span>
                TRAINING PROGRAMS <i className="bi bi-chevron-down"></i>
              </span>
              <ul>
                <li>
                  <Link to="/frontend_course" className="text-decoration-none">
                    Front-End Development
                  </Link>
                </li>
                <li>
                  <Link to="/software_testing" className="text-decoration-none">
                    Software Testing
                  </Link>
                </li>
                <li>
                  <Link to="/placements" className="text-decoration-none">
                    Placements
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className="text-decoration-none">
                Contact
              </Link>
            </li>

            <li>
              <a
                href="http://softgrowthblog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
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
