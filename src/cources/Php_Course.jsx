import Enquiry_form from "./Enquiry_form";
import FrontendFAQ from "./FrontendFAQ";

const Php_Course = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white py-5 position-relative overflow-hidden"
        id="curriculum"
      >
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

              <div className="d-flex align-items-center gap-2 mb-4 text-white-50">
                <i className="fa-solid fa-location-dot"></i> Chandrapur
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
      <section className="py-5 bg-primary bg-opacity-10" id="modules">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-5">
            Laravel PHP – Course Modules
          </h2>

          <div className="row g-4">
            {[
              {
                title: "PHP Fundamentals",
                items: [
                  "Syntax & Variables",
                  "Forms Handling",
                  "Sessions & Cookies",
                  "File Handling",
                ],
              },
              {
                title: "MySQL & Database",
                items: [
                  "Database Creation",
                  "SQL Queries",
                  "Joins",
                  "Optimization",
                ],
              },
              {
                title: "Laravel Basics",
                items: [
                  "Installation",
                  "MVC Structure",
                  "Routing",
                  "Controllers",
                ],
              },
              {
                title: "Blade & Forms",
                items: ["Layouts", "Components", "Validation", "Form Handling"],
              },
              {
                title: "Eloquent ORM",
                items: ["Migrations", "Relationships", "CRUD", "Query Builder"],
              },
              {
                title: "Authentication & Security",
                items: [
                  "Login Systems",
                  "Middleware",
                  "Authorization",
                  "Security Best Practices",
                ],
              },
              {
                title: "API Development",
                items: ["REST APIs", "JSON", "AJAX Integration", "Testing"],
              },
              {
                title: "Deployment",
                items: [
                  "Hosting",
                  "Environment Setup",
                  "Optimization",
                  "Project Launch",
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
          <h2 className="fw-bold text-center mb-5 text-dark">
            Why Choose This Course?
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "fa-layer-group",
                title: "Foundation to Advanced",
                text: "Complete PHP to Laravel learning path.",
              },
              {
                icon: "fa-code",
                title: "Real Projects",
                text: "Build dynamic backend applications.",
              },
              {
                icon: "fa-certificate",
                title: "Certification",
                text: "Industry-recognized certificate.",
              },
              {
                icon: "fa-user-tie",
                title: "Career Support",
                text: "Interview preparation & guidance.",
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
      <section className="py-5  text-white text-center" id="curriculum">
        <div className="container">
          <h3 className="fw-bold">
            Become a Professional Laravel Backend Developer
          </h3>
          <p className="mt-2 text-white-50">
            Enroll today and start building scalable web applications.
          </p>
          <a
            href="#modules"
            className="btn btn-warning btn-lg mt-3 fw-semibold"
          >
            Apply Now
          </a>
        </div>
      </section>
      <FrontendFAQ />
    </div>
  );
};

export default Php_Course;
