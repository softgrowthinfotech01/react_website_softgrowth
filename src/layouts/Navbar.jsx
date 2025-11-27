import "./Navbar.css";
import logo from "../assets/img/soft_logo_org.png";

export default function Navbar() {
  return (
    <header id="header" className="d-flex align-items-center sticky-top">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <a href="/" className="text-decoration-none text-white">
        <img src={logo} alt="img" />
       Softgrowth Infotech
        </a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a   className="nav-link scrollto" href="/#wellcome">Home</a></li>
          <li><a  className="nav-link scrollto" href="about">About</a></li>
          <li><a  className="nav-link scrollto" href="services">Services</a></li>
          <li><a  className="nav-link scrollto " href="portfolio">Portfolio</a></li>
          <li><a  className="nav-link scrollto" href="placements">Placements</a></li>
          <li className="dropdown"><a  href="#"><span>Courses</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="frontend" className="">Front-End Development</a></li>
              <li><a href="testing" className="">Software Testing </a></li>
              
            </ul>
          </li>
          <li><a  className="nav-link scrollto" href="contact">Contact</a></li>
          <li><a className="nav-link scrollto" href="http://softgrowthblog.com/">Blog</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle text-light"></i>
      </nav> {/* <!-- .navbar --> */}

    </div>
  </header>
  );
}
