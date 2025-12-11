import React, { lazy, Suspense } from "react";
import AboutSection from "../components/home/AboutSection";
import FrequentlySection from "../components/home/FrequentlySection";
// import images
import landingImage from "../assets/landing-image1.webp";
import servicesImage from "../assets/services-image.webp";
import featuredImage from "../assets/featured-1.webp";

const ClientSections = lazy(() => import("../components/home/ClientSections"));
const EnvirnmentSections = lazy(() =>
  import("../components/home/EnvirnmentSections")
);

const PortolioSections = lazy(() =>
  import("../components/home/PortolioSections")
);

export default function Home() {
  return (
    <>
      <main id="main">
        {/* ======= Wellcome page ======= */}
        <section id="wellcome" className="wellcome">
          <div className="container">
            <div className="row mb-5">
              <div
                className="col-lg-6 d-flex justify-content-center align-items-center"
                data-aos="fade-right"
              >
                <div className="image-container px-5">
                  <img
                    src={landingImage}
                    className="img-fluid rounded "
                    alt="landing-image"
                  />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="section-title" data-aos="fade-up">
                  <h3> Welcome to </h3>
                  <h1 className="text-logo source-code-pro-500">
                    <b>SOFTGROWTH INFOTECH</b>
                  </h1>
                  <p> Your Partner in Digital Success</p>
                </div>
                <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                  <p className="fst-italic">
                    At Softgrowth Infotech, we are dedicated to empowering
                    businesses and individuals with innovative technology
                    solutions. Whether you're looking for a stunning website,
                    seeking to enhance your skills, or need custom software
                    tailored to your unique requirements, we’ve got you covered
                  </p>
                  <p>
                    Softgrowth Is the result of the dream and hardwork of a
                    young talented.The skilled &amp; sincere team of
                    professionals is our biggest strength.We have been are
                    liable organization inproviding the best services to the
                    clients with the assistance of our proficient professionals.
                  </p>
                  <h3>Our Services</h3>
                  <ul className="p-0">
                    <li className=" nav-link p-0 text-light">
                      <i className="bx bx-check-double main-text-orange" />{" "}
                      Website Design &amp; Development
                    </li>
                    <li className=" nav-link p-0 text-light">
                      <i className="bx bx-check-double main-text-orange" />{" "}
                      Professional Courses for Students
                    </li>
                    <li className=" nav-link p-0 text-light">
                      <i className="bx bx-check-double main-text-orange" />{" "}
                      Custom Software Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2 className="orangeborder">Services</h2>
              <p>
                We always try to provide best services. Get more insight to it.{" "}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up">
                  <i className="bx bx-code-block main-text-orange" />
                  <h4>Website Design &amp; Development</h4>
                  <p>Make your online presence shine!</p>
                  <ul className="list-unstyled">
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Responsive Design: Websites that look great on any device.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Custom Websites: Tailored designs that reflect your brand
                      identity.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      E-Commerce Solutions: Seamless online stores to boost your
                      sales.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      SEO-Friendly: Optimized websites to rank higher and
                      attract more visitors.
                    </li>
                  </ul>
                </div>

                <div
                  className="icon-box mt-5"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <i className="bx bx-book-content main-text-orange" />
                  <h4>Professional Courses for Students</h4>
                  <p>Unlock your potential with hands-on learning.</p>
                  <ul className="list-unstyled">
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Web Development: Master HTML, CSS, JavaScript, and
                      frameworks like React and Angular.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Software Development: Learn programming languages,
                      database management, and system design.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Digital Marketing: Become an expert in SEO, social media,
                      and online branding.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Certification Programs: Industry-recognized certifications
                      to boost your career prospects.
                    </li>
                  </ul>
                </div>

                <div
                  className="icon-box mt-5"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bx bx-desktop main-text-orange" />
                  <h4>Custom Software Development</h4>
                  <p>Solutions as unique as your business.</p>
                  <ul className="list-unstyled">
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Enterprise Applications: Streamline operations with
                      efficient software.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Mobile Apps: Engage customers with user-friendly apps.
                    </li>
                    <li>
                      <i
                        className="bx bx-right-arrow-alt main-text-orange p-1"
                        style={{ fontSize: 18 }}
                      />
                      Integration Services: Seamlessly connect your existing
                      systems.
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="image col-lg-6 order-1 order-lg-2 img-fluid rounded "
                style={{
                  backgroundImage: `url(${servicesImage})`,
                }}
                data-aos="fade-left"
                data-aos-delay={100}
              />
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section id="featured " className="featured text-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 parallax" data-aos="fade-right">
                <div className="tab-content">
                  <div
                    className="tab-pane active show "
                    style={{ height: 100 }}
                    id="tab-1"
                  >
                    <figure>
                      <img
                        src={featuredImage}
                        alt=""
                        className="w-50"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 mt-4 mt-lg-0 text-dark"
                data-aos="fade-left"
              >
                <h2 className="text-dark">Why Choose Us?</h2>
                <ul className="nav  flex-column">
                  <li className="nav-item">
                    <a className="nav-link ">
                      <h4 className="text-dark">
                        <i className="bx  bx-certification main-text-orange" />{" "}
                        Experienced Team: Skilled professionals with a passion
                        for technology.
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link">
                      <h4 className="text-dark">
                        <i className="bx  bx-certification main-text-orange" />{" "}
                        Customer-Centric Approach: Solutions designed to meet
                        your goals.
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link">
                      <h4 className="text-dark">
                        <i className="bx  bx-certification main-text-orange" />{" "}
                        Affordable Pricing: High-quality services at competitive
                        rates.
                      </h4>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <a className="nav-link">
                      <h4 className="text-dark">
                        <i className="bx  bx-certification main-text-orange" />{" "}
                        End-to-End Support: From concept to delivery and beyond.
                      </h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Lazy Loaded Sections ===== */}
        <Suspense fallback={<div>Loading...</div>}>
          <PortolioSections />
          <EnvirnmentSections />
          <ClientSections />
        </Suspense>
        <FrequentlySection />
      </main>
    </>
  );
}