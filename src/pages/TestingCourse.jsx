import React from "react";

const TestingCourse = () => {
  return (
    <div>

      {/* ================= HERO SECTION (BLUE) ================= */}
      <section className="text-white py-5 position-relative overflow-hidden" id="curriculum">
        <div className="container py-lg-4">
          <div className="row g-4 align-items-start">

            {/* LEFT CONTENT */}
            <div className="col-lg-7">

              <div className="d-inline-flex align-items-center rounded-pill bg-secondary bg-opacity-25 px-3 py-2 mb-3 border border-secondary border-opacity-25">
                <i className="fa-solid fa-bolt me-2 text-warning"></i>
                <small className="fw-semibold">
                  Job-Oriented Software Testing Automation Program • Limited Seats
                </small>
              </div>

              <h1 className="display-6 fw-semibold lh-1 mb-3">
                Become a <span className="bg-warning text-dark px-2 rounded">Software Test Automation Engineer</span> with Java & Selenium
              </h1>

              <p className="fs-5 text-white-50 mb-4 col-lg-10">
                Master Manual Testing, Java, Selenium WebDriver, TestNG, Maven, Frameworks, API Testing,
                Database Testing, Jenkins CI, and work on live projects with placement-focused training.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-calendar-check me-2"></i> Duration: 4–6 Months
                </div>
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-chalkboard-user me-2"></i> Classroom
                </div>
                <div className="badge rounded-pill bg-light bg-opacity-10 text-white fw-normal px-3 py-2 border border-light border-opacity-25">
                  <i className="fa-solid fa-briefcase me-2"></i> 100% Placement Assistance
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 mb-4 text-white-50">
                <i className="fa-solid fa-location-dot"></i> Chandrapur
              </div>

              <div className="row g-3 bg-white bg-opacity-10 rounded-4 p-3 mx-0 border border-light border-opacity-10">
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">100+</div>
                  <small className="text-white-50">Testing Students Trained</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">4.9/5</div>
                  <small className="text-white-50">Avg Rating</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">10+</div>
                  <small className="text-white-50">Real-Time Scenarios</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">1:1</div>
                  <small className="text-white-50">Doubt Support</small>
                </div>
              </div>

              <div className="mt-4 d-flex flex-wrap gap-3">
                <a href="#curriculum" className="btn btn-light btn-lg fw-semibold">
                  View Detailed Curriculum
                </a>
                <a href="tel:+918888654507" className="btn btn-outline-light btn-lg">
                  <i className="fa-solid fa-phone me-2"></i> Call Counsellor
                </a>
              </div>
            </div>

            {/* ================= ENQUIRY FORM (RIGHT) ================= */}
            <div className="col-lg-5" id="enquiry">
              <div className="card border-0 shadow-lg rounded-4 text-dark">
                <div className="card-body p-4">

                  <h5 className="fw-bold mb-1 text-warning">Enquire for Syllabus, Fees & Next Batch</h5>
                  <p className="text-muted small mb-3">
                    Fill the form to get a call back with detailed syllabus PDF, fee structure, and batch timings.
                  </p>

                  <form>
                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Full Name</label>
                      <input type="text" className="form-control bg-light" placeholder="Enter your full name" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Mobile Number</label>
                      <input type="tel" className="form-control bg-light" placeholder="Enter your mobile number" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Email ID</label>
                      <input type="email" className="form-control bg-light" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Preferred Mode</label>
                      <select className="form-select bg-light">
                        <option>Select mode</option>
                        <option>Classroom</option>
                        <option>Flexible / Mixed</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Background</label>
                      <select className="form-select bg-light">
                        <option>Select your background</option>
                        <option>BE / B.Tech</option>
                        <option>BSc / BCA</option>
                        <option>MSc / MCA</option>
                        <option>Non-IT Graduate</option>
                        <option>Working Professional</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Message (Optional)</label>
                      <textarea className="form-control bg-light" rows="2" placeholder="Any specific query?" />
                    </div>

                    <button type="button" className="btn btn-warning w-100 fw-bold py-2">
                      Get Call Back
                    </button>

                    <p className="mt-3 mb-0 text-muted text-center" style={{ fontSize: "0.75rem" }}>
                      By submitting, you agree to be contacted via call / WhatsApp / SMS.
                    </p>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-5 bg-white" id="overview">
        <div className="container py-4">
          <div className="row g-5 align-items-center">

            <div className="col-lg-7">
              <div className="badge rounded-pill bg-warning text-dark border px-3 py-2 mb-3">
                <i className="fa-solid fa-bug-slash text-danger me-2"></i>
                Industry-Oriented Automation Testing Training
              </div>

              <h2 className="fw-bold mb-3 text-dark">
                Why Software Testing Automation with Java & Selenium?
              </h2>

              <p className="lead fs-6 text-dark">
                Automation Test Engineers are in high demand across companies.
                This course takes you from basics of Manual Testing to
                <strong> Java programming, Selenium WebDriver, frameworks, API testing, and CI tools</strong>.
              </p>

              <ul className="list-unstyled mt-4 vstack gap-2 text-dark">
                <li><i className="fa-solid fa-check-circle text-success me-2"></i> Ideal for freshers & non-IT backgrounds.</li>
                <li><i className="fa-solid fa-check-circle text-success me-2"></i> Hands-on automation using Java, Selenium & TestNG.</li>
                <li><i className="fa-solid fa-check-circle text-success me-2"></i> API testing, database testing & real project.</li>
              </ul>
            </div>

            <div className="col-lg-5">
              <div className="row g-3">

                {[
                  {
                    icon: "fa-laptop-code",
                    title: "Practical Sessions",
                    text: "Learn by doing – real scenarios & assignments.",
                  },
                  {
                    icon: "fa-user-tie",
                    title: "Expert Trainers",
                    text: "Trainers with real automation project experience.",
                  },
                  {
                    icon: "fa-diagram-project",
                    title: "Live Project",
                    text: "Build a complete automation framework.",
                  },
                  {
                    icon: "fa-certificate",
                    title: "Certification & Support",
                    text: "Course certificate + long-term support.",
                  },
                ].map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="card h-100 border rounded-4 shadow-sm">
                      <div className="card-body p-3">
                        <div
                          className="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-3 mb-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className={`fa-solid ${item.icon} text-danger`} />
                        </div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <p className="mb-0 small text-muted lh-sm">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="py-5 bg-primary bg-opacity-10" id="curriculum">
        <div className="container py-4">

          <div className="text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            <h2 className="fw-bold mb-2">Software Testing Automation – Curriculum</h2>
            <p className="text-white">
              Complete journey from Manual Testing to building automation frameworks using Java & Selenium.
            </p>
          </div>

          <div className="row g-4">

            {[
              { title: "Software Testing Fundamentals", mod: "1", items: ["SDLC & STLC", "Types & Levels of Testing", "Functional vs Non-Functional", "Agile Testing & Scrum"] },
              { title: "Manual Testing in Detail", mod: "2", items: ["Test Case Techniques", "Test Cases", "Test Strategy", "Bug Reporting", "JIRA / Bugzilla Overview"] },
              { title: "Core Java for Testers", mod: "3", items: ["Java Basics", "Loops", "Strings", "OOP", "Collections"] },
              { title: "Introduction to Automation & Selenium", mod: "4", items: ["Why Automation?", "Selenium Suite", "Environment Setup", "First Script"] },
              { title: "WebDriver Locators & Actions", mod: "5", items: ["Locators", "WebElements", "Dropdowns", "Actions Class", "Alerts & Frames"] },
              { title: "Synchronization & Advanced WebDriver", mod: "6", items: ["Waits", "WebDriverWait", "JavaScriptExecutor", "Screenshots"] },
              { title: "TestNG Framework", mod: "7", items: ["Annotations", "XML", "Assertions", "Reporting", "Parallel Execution"] },
              { title: "Maven & Project Structure", mod: "8", items: ["Pom.xml", "Dependencies", "Run Projects", "Automation Folder Structure"] },
              { title: "Automation Frameworks & POM", mod: "9", items: ["Hybrid", "Data-Driven", "Keyword", "POM", "PageFactory"] },
              { title: "Data-Driven Testing", mod: "10", items: ["Apache POI", "Parameterization", "DataProviders"] },
              { title: "API Testing with Postman", mod: "11", items: ["REST Basics", "GET/POST", "Collections", "Assertions"] },
              { title: "Database Testing (MySQL)", mod: "12", items: ["SQL Basics", "CRUD", "Joins", "DB Validation"] },
              { title: "Jenkins & CI Basics", mod: "13", items: ["CI/CD", "Installing Jenkins", "Creating Jobs", "Scheduling Scripts"] },
              { title: "Git & GitHub", mod: "14", items: ["Version Control", "Clone/Commit", "Branches", "Repositories"] },
              { title: "Live Project & Interview Prep", mod: "15", items: ["End-to-End Automation", "Framework", "Interview Q/A", "Resume & Mock Interviews"] },
            ].map((module, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="fw-bold mb-0">{module.title}</h6>
                      <span className="badge bg-light text-dark border">Module {module.mod}</span>
                    </div>
                    <ul className="small text-muted ps-3 mb-0">
                      {module.items.map((item, i) => (
                        <li key={i} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-5">
            <div className="bg-dark text-white rounded-4 p-4 d-flex flex-wrap align-items-center justify-content-between gap-3 shadow">
              <div>
                <div className="small text-uppercase text-white-50 fw-bold mb-1">
                  Want detailed syllabus PDF?
                </div>
                <div className="fw-semibold">
                  Get complete Automation Testing syllabus & fee structure on WhatsApp.
                </div>
              </div>
              <div className="d-flex gap-2">
                <a href="#enquiry" className="btn btn-primary fw-semibold">Send Me Syllabus</a>
                <a href="tel:+918888654507" className="btn btn-outline-light">
                  <i className="fa-solid fa-phone me-2"></i> Call Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="py-5 bg-white" id="tools">
        <div className="container py-4">
          <h2 className="fw-bold text-center text-dark mb-2">Tools & Technologies Covered</h2>
          <p className="text-muted text-center mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Learn the exact tools used by Automation Test Engineers.
          </p>

          <div className="row g-4 justify-content-center">

            {[
              { title: "Programming & Automation", icon: "fa-code", items: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Apache POI"] },
              { title: "Testing & DevOps", icon: "fa-gears", items: ["Postman", "MySQL", "Jenkins", "JIRA"] },
              { title: "Version Control & Collaboration", icon: "fa-diagram-project", items: ["Git", "GitHub", "VS Code", "IntelliJ", "Browser DevTools"] },
            ].map((section, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="text-center p-3 border rounded-4 h-100 bg-light bg-opacity-25">
                  <h6 className="fw-bold mb-3 text-dark">
                    <i className={`fa-solid ${section.icon} me-2 text-primary`}></i>
                    {section.title}
                  </h6>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {section.items.map((tool, i) => (
                      <span key={i} className="badge bg-white text-dark border fw-normal py-2 px-3">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CAREER SUPPORT ================= */}
      <section className="py-5 bg-primary bg-opacity-10" id="career">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-2">Placement & Career Support</h2>
          <p className="text-white text-center mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Softgrowth Infotech supports you till you crack interviews and start your testing career.
          </p>

          <div className="row g-4">

            {[
              { icon: "fa-file-lines", title: "Resume Building", text: "Build a strong QA/Automation Tester resume." },
              { icon: "fa-people-arrows", title: "Mock Interviews", text: "Manual + Automation interview practice." },
              { icon: "fa-building", title: "Interview Opportunities", text: "Placement assistance with interview calls." },
              { icon: "fa-user-graduate", title: "Career Guidance", text: "Guidance on career roadmap & growth." },
            ].map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center">
                  <div className="card-body p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle mb-3"
                      style={{ width: "50px", height: "50px" }}>
                      <i className={`fa-solid ${item.icon} text-danger fs-5`}></i>
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

      {/* ================= FAQ ================= */}
      <section className="py-5 mb-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-2 text-dark">Frequently Asked Questions</h2>
          <p className="text-muted text-center mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Clear your doubts about the Software Testing Automation course.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="accordion" id="faqAccordion">

                {[
                  { q: "I am from non-IT background. Can I join?", a: "Yes! We start from Manual Testing basics." },
                  { q: "Do you cover both Manual & Automation Testing?", a: "Yes, complete Manual + Automation with Java & Selenium." },
                  { q: "Will I work on a live project?", a: "Yes. You will build a full automation framework." },
                  { q: "Do you provide placement assistance?", a: "Yes! Resume prep, mock interviews, and job calls." },
                  { q: "How can I know the latest fees & batch dates?", a: "Fill the form or call us at +91 88886 54507." },
                ].map((faq, idx) => (
                  <div className="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm" key={idx}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${idx !== 0 ? "collapsed" : ""} fw-semibold bg-white`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${idx}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted small">{faq.a}</div>
                    </div>
                  </div>
                ))}

              </div>

              <div className="text-center mt-5">
                <a href="#enquiry" className="btn btn-warning btn-lg fw-bold px-5">
                  Still have questions? Enquire Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default TestingCourse;