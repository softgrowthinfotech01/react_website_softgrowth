import React from "react";
import Enquiry_form from "./Enquiry_form";

const Web_Development = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="text-white py-5 position-relative overflow-hidden bg-dark">
        <div className="container py-lg-4">
          <div className="row g-5 align-items-start">
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center rounded-pill bg-secondary bg-opacity-25 px-3 py-2 mb-3 border border-secondary border-opacity-25">
                <i className="fa-solid fa-globe me-2 text-warning"></i>
                <small className="fw-semibold">
                  Full Stack Web Development Program • Limited Seats
                </small>
              </div>

              <h1 className="display-6 fw-semibold lh-1 mb-3">
                Become a{" "}
                <span className="bg-warning text-dark px-2 rounded">
                  Full Stack Web Developer
                </span>{" "}
                with Real Projects
              </h1>

              <p className="fs-5 text-white-50 mb-4 col-lg-10">
                Learn front-end design, JavaScript programming, backend
                development using PHP & MySQL, and build dynamic web
                applications from scratch.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-calendar-check me-2"></i> Duration:
                  6 Months
                </div>
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-laptop-code me-2"></i> Full Stack
                  Training
                </div>
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-briefcase me-2"></i> Placement
                  Support
                </div>
              </div>

              {/* STATS */}
              <div className="row g-3 bg-white bg-opacity-10 rounded-4 p-3 mx-0 border border-light border-opacity-10">
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">300+</div>
                  <small className="text-white-50">Students Trained</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">20+</div>
                  <small className="text-white-50">Projects Built</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">4.9/5</div>
                  <small className="text-white-50">Student Rating</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">100%</div>
                  <small className="text-white-50">Practical Training</small>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="#modules"
                  className="btn btn-warning btn-lg fw-semibold"
                >
                  View Curriculum
                </a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <Enquiry_form />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold text-center text-dark mb-4">
            Course Overview
          </h2>

          <p className="text-center text-muted col-lg-8 mx-auto">
            This course is designed for beginners and aspiring developers who
            want to build professional web applications. You will learn
            front-end design, responsive layouts, JavaScript programming, and
            backend development using PHP and MySQL. By the end of the course,
            you will create real-world projects and deploy dynamic websites.
          </p>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-5 bg-primary bg-opacity-10" id="modules">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-5">Course Modules</h2>

          <div className="row g-4">
            {[
              {
                title: "HTML5",
                items: [
                  "Page Structure",
                  "Forms & Inputs",
                  "Semantic Tags",
                  "Media Elements",
                ],
              },
              {
                title: "CSS3",
                items: [
                  "Selectors & Styling",
                  "Flexbox & Grid",
                  "Animations",
                  "Responsive Design",
                ],
              },
              {
                title: "Bootstrap 5",
                items: [
                  "Grid System",
                  "Components",
                  "Forms",
                  "Responsive Layout",
                ],
              },
              {
                title: "JavaScript",
                items: [
                  "Variables & Functions",
                  "DOM Manipulation",
                  "Events",
                  "ES6 Basics",
                ],
              },
              {
                title: "jQuery & AJAX",
                items: [
                  "Selectors",
                  "Animations",
                  "API Calls",
                  "Dynamic Data Loading",
                ],
              },
              {
                title: "PHP & MySQL",
                items: [
                  "Backend Logic",
                  "CRUD Operations",
                  "Database Design",
                  "Login Systems",
                ],
              },
            ].map((module, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <h6 className="fw-bold mb-3">{module.title}</h6>
                    <ul className="small text-muted ps-3 mb-0">
                      {module.items.map((item, i) => (
                        <li key={i} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold text-center text-dark mb-5">
            Why Join This Course?
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "fa-laptop-code",
                title: "Live Projects",
                text: "Hands-on practical training.",
              },
              {
                icon: "fa-user-tie",
                title: "Expert Trainers",
                text: "Industry experienced mentors.",
              },
              {
                icon: "fa-certificate",
                title: "Certification",
                text: "Course completion certificate.",
              },
              {
                icon: "fa-briefcase",
                title: "Placement Support",
                text: "Interview preparation assistance.",
              },
            ].map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center">
                  <div className="card-body p-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle mb-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className={`fa-solid ${item.icon} text-danger`}></i>
                    </div>
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="small text-muted mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h3 className="fw-bold">Start Your Web Development Journey Today</h3>
          <p className="mt-2 text-white-50">
            Limited seats available — Register now
          </p>
          <a
            href="#modules"
            className="btn btn-warning btn-lg mt-3 fw-semibold"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Web_Development;
