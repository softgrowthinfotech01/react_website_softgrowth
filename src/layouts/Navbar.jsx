
import logo from "../assets/soft_logo_org.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header" className="d-flex align-items-center sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/" className="text-decoration-none text-white">
            <img src={logo} alt="img" />
            Softgrowth Infotech
          </Link>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/#wellcome">
                Home
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/services">
                Services
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/placements">
                Placements
              </Link>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span>Courses</span> <i className="bi bi-chevron-down"></i>
              </Link>

              <ul>
                <li>
                  <Link to="/frontend" className="">
                    Front-End Development
                  </Link>
                </li>

                <li>
                  <Link to="/testing" className="">
                    Software Testing
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/contact">
                Contact
              </Link>
            </li>

            <li>
              {/* external link must stay as <a> */}
              <a
                className="nav-link scrollto"
                href="http://softgrowthblog.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>{" "}
        {/* <!-- .navbar --> */}
      </div>
    </header>
  );
}
