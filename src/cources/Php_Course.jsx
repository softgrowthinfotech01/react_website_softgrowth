import React from "react";
import Enquiry_form from "./Enquiry_form";

const Php_Course = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="text-white py-5 position-relative overflow-hidden bg-dark">
        <div className="container py-lg-4">
          <div className="row g-5 align-items-start">
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center rounded-pill bg-secondary bg-opacity-25 px-3 py-2 mb-3 border border-secondary border-opacity-25">
                <i className="fa-solid fa-server me-2 text-warning"></i>
                <small className="fw-semibold">
                  Backend Development Program • Limited Seats
                </small>
              </div>

              <h1 className="display-6 fw-semibold lh-1 mb-3">
                Become a{" "}
                <span className="bg-warning text-dark px-2 rounded">
                  Laravel Backend Developer
                </span>{" "}
                with Real Project Experience
              </h1>

              <p className="fs-5 text-white-50 mb-4 col-lg-10">
                Learn PHP fundamentals, MySQL, MVC architecture, Laravel
                framework, authentication, REST APIs and deployment with
                real-world backend projects.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-calendar-check me-2"></i> Duration:
                  4–6 Months
                </div>
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-chalkboard-user me-2"></i> Classroom
                </div>
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-briefcase me-2"></i> Placement
                  Assistance
                </div>
              </div>

              <div className="row g-3 bg-white bg-opacity-10 rounded-4 p-3 mx-0 border border-light border-opacity-10">
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">150+</div>
                  <small className="text-white-50">Students Trained</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">4.8/5</div>
                  <small className="text-white-50">Avg Rating</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">15+</div>
                  <small className="text-white-50">Live Projects</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">1:1</div>
                  <small className="text-white-50">Mentor Support</small>
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

      {/* REST OF YOUR SECTIONS REMAIN SAME */}
      {/* OVERVIEW */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold text-center text-dark mb-4">
            Laravel PHP Course Overview
          </h2>
          <p className="text-center text-muted col-lg-8 mx-auto">
            This course begins with PHP fundamentals and database concepts
            before moving into the Laravel framework. You will build dynamic web
            applications, manage authentication systems, develop REST APIs, and
            deploy professional backend systems.
          </p>
        </div>
      </section>

      {/* KEEP REMAINING CODE SAME */}
    </div>
  );
};

export default Php_Course;
