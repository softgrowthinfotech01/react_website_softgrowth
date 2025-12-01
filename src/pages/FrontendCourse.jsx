import React from 'react';

const FrontendCourse = () => {
  return (
    <div>

      {/* Hero Section – BLUE */}
      <section className="text-white py-5 position-relative overflow-hidden" id="curriculum">
        <div className="container py-lg-4">
          <div className="row g-5 align-items-start">
            
            {/* Left Content */}
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center rounded-pill bg-secondary bg-opacity-25 px-3 py-2 mb-3 border border-secondary border-opacity-25">
                <i className="fa-solid fa-bolt me-2 text-warning"></i>
                <small className="fw-semibold">
                  Job-Oriented Front-End Development Program • Limited Seats
                </small>
              </div>

              <h1 className="display-6 fw-semibold lh-1 mb-3">
                Become a <span className="bg-white text-dark px-2 rounded">Front-End Developer</span> with Real-World Project Experience
              </h1>

              <p className="fs-5 text-white-50 mb-4 col-lg-10">
                Master HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript, React.js, Angular, Git & GitHub with live projects, mock interviews, and placement-focused training.
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
                  <div className="fw-bold fs-5">200+</div>
                  <small className="text-white-50">Students Trained</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">4.9/5</div>
                  <small className="text-white-50">Avg Rating</small>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold fs-5">20+</div>
                  <small className="text-white-50">Live Projects</small>
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

            {/* Enquiry Form */}
            <div className="col-lg-5" id="enquiry">
              <div className="card border-0 shadow-lg rounded-4 text-dark">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-1">Enquire for Syllabus, Fees & Batches</h5>
                  <p className="text-muted small mb-3">
                    Fill the form to get a call back with detailed syllabus PDF, fees, and nearest batch.
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
                      <textarea className="form-control bg-light" rows="2" placeholder="Any specific query?"></textarea>
                    </div>

                    <button type="button" className="btn btn-warning w-100 fw-bold py-2">
                      Get Call Back
                    </button>

                    <p className="mt-3 mb-0 text-muted text-center" style={{ fontSize: '0.75rem' }}>
                      By submitting, you agree to be contacted via call / WhatsApp / SMS.
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview – WHITE */}
      <section className="py-5 bg-white" id="overview">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="badge rounded-pill bg-light text-dark border px-3 py-2 mb-3">
                <i className="fa-solid fa-graduation-cap text-danger me-2"></i>
                Industry-Oriented Front-End Development Training
              </div>
              <h2 className="fw-bold mb-3 text-dark">Why Front-End Development at Softgrowth Infotech?</h2>
              <p className=" lead fs-6 text-dark">
                Front-end developers are in high demand across startups, product companies, and MNCs.
                This course is designed to take you from basic web design to building
                <strong> modern, responsive, and component-based web applications</strong>.
              </p>

              <ul className="list-unstyled mt-4 vstack gap-2 text-dark">
                <li><i className="fa-solid fa-check-circle text-success me-2"></i> Perfect for beginners and non-IT graduates.</li>
                <li><i className="fa-solid fa-check-circle text-success me-2"></i> Multiple mini-projects + 4 live projects.</li>
                <li><i className="fa-solid fa-check-circle text-success me-2"></i> Mock interviews, resume guidance & placement support.</li>
              </ul>
            </div>

            <div className="col-lg-5">
              <div className="row g-3">
                {[ 
                  { icon: "fa-laptop-code", title: "Hands-on Training", text: "Implementation-focused sessions with practical examples." },
                  { icon: "fa-user-tie", title: "Mentors from Industry", text: "Learn from experienced front-end developers." },
                  { icon: "fa-layer-group", title: "Live Project", text: "Work on a real project from design to deployment." },
                  { icon: "fa-certificate", title: "Certificate & Support", text: "Course certificate + interview support." }
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

      {/* Curriculum – BLUE LIGHT */}
      <section className="py-5 bg-primary bg-opacity-10" id="curriculum">
        <div className="container py-4">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            <h2 className="fw-bold mb-2">Front-End Development – Curriculum</h2>
            <p className="text-white">
              Step-by-step journey from basic web pages to professional applications.
            </p>
          </div>

          <div className="row g-4">
            {[
              { title: "Internet & Basics of Web", mod: "1", items: ["Client–Server Arch", "Browsers & DevTools", "VS Code Setup", "Project Structure"] },
              { title: "HTML5", mod: "2", items: ["HTML Structure", "Semantic Tags", "Forms & Tables", "Media Tags", "SEO Basics"] },
              { title: "CSS3 & Responsive", mod: "3", items: ["Box Model", "Typography", "Flexbox", "Grid", "Animations"] },
              { title: "Bootstrap 5", mod: "4", items: ["Grid System", "Components", "Utilities", "Responsive Layouts"] },
              { title: "Tailwind CSS", mod: "5", items: ["Utility-First Concept", "Config & Setup", "Modern UI", "Responsive Design"] },
              { title: "JavaScript (ES6+)", mod: "6", items: ["Variables", "Arrays", "DOM Manipulation", "Fetch API", "Logic Building"] },
              { title: "React.js", mod: "7", items: ["Components", "Hooks", "React Router", "API Integration", "Project Build"] },
              { title: "Angular Basics", mod: "8", items: ["Components", "Modules", "Data Binding", "Services & DI"] },
              { title: "Git & GitHub", mod: "9", items: ["Version Control", "Commit", "Branch", "Merge", "Collaboration"] },
              { title: "Live Project", mod: "10", items: ["UI/UX", "Build", "Hosting", "Portfolio"] },
              { title: "Career Prep", mod: "11", items: ["Mock Interviews", "Resume Building", "Interview Questions", "Career Guidance"] },
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

          {/* CTA Strip */}
          <div className="mt-5">
            <div className="bg-dark text-white rounded-4 p-4 d-flex flex-wrap align-items-center justify-content-between gap-3 shadow">
              <div>
                <div className="small text-uppercase text-white-50 fw-bold mb-1">
                  Want complete syllabus PDF?
                </div>
                <div className="fw-semibold">
                  Get detailed Front-End syllabus & fee structure on WhatsApp.
                </div>
              </div>
              <div className="d-flex gap-2">
                <a href="#enquiry" className="btn btn-warning fw-semibold">Send Me Syllabus</a>
                <a href="tel:+918055257791" className="btn btn-outline-light">
                  <i className="fa-solid fa-phone me-2"></i> Call Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tools – WHITE */}
      <section className="py-5 bg-white" id="tools">
        <div className="container py-4">
          <h2 className="fw-bold text-center text-dark mb-2">Tools & Technologies Covered</h2>
          <p className="text-muted text-center mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Learn the exact tools used by modern front-end teams.
          </p>

          <div className="row g-4 justify-content-center">
            {[
              { title: "Core Web", icon: "fa-code", items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"] },
              { title: "UI Frameworks", icon: "fa-layer-group", items: ["Bootstrap 5", "Tailwind CSS", "React.js", "Angular (Basics)"] },
              { title: "Dev Tools", icon: "fa-gears", items: ["Git", "GitHub", "VS Code", "DevTools", "Figma"] },
            ].map((section, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="text-center p-3 border rounded-4 h-100 bg-light bg-opacity-25">
                  <h6 className="fw-bold mb-3 text-dark" >
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

      {/* Career – BLUE LIGHT */}
      <section className="py-5 bg-primary bg-opacity-10" id="career">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-2">Placement & Career Support</h2>
          <p className="text-muted text-center mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Softgrowth Infotech prepares you not only to learn but also to get job-ready.
          </p>

          <div className="row g-4">
            {[
              { icon: "fa-file-lines", title: "Resume Building", text: "Create a strong front-end resume with your projects." },
              { icon: "fa-people-arrows", title: "Mock Interviews", text: "Technical + HR mock interviews to boost confidence." },
              { icon: "fa-building", title: "Interview Calls", text: "Placement assistance through interview calls shared." },
              { icon: "fa-user-graduate", title: "Career Guidance", text: "Guidance on pathways, freelancing & portfolio." },
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

      {/* FAQ – WHITE */}
      <section className="py-5 mb-5 bg-white">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-muted text-center mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Clear your doubts about the Front-End Development course.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="accordion" id="faqAccordion">
                {[
                  { q: "Who can join this course?", a: "Any student, fresher, or working professional from IT / non-IT background." },
                  { q: "Do you provide placement support?", a: "Yes. We provide 100% placement assistance." },
                  { q: "Will I work on a live project?", a: "Yes! You will build at least one complete front-end project." },
                  { q: "Is coding experience required?", a: "No. We start completely from basics." },
                  { q: "How can I know the latest fees?", a: "Fill the enquiry form or call us to get the latest fee details." },
                ].map((faq, idx) => (
                  <div className="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm" key={idx}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button ${idx !== 0 ? "collapsed" : ""} fw-semibold bg-white`} 
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${idx}`}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`collapse${idx}`} className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#faqAccordion">
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

export default FrontendCourse;
