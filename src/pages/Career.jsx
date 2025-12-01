import React from "react";

const Careers = () => {
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="text-bold">careers</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>careers</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Inner Page */}
        <section className="inner-page">
          <div className="container">
            <section className="about pt-0" id="about">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-12" data-aos="fade-up">
                  <div className="section-title" data-aos="fade-up">
                    <h2 className="orangeborder2">careers</h2>
                  </div>
                </div>
              </div>

              <div
                className="row bg-light text-dark p-5 justify-content-center"
                data-aos="fade-up"
              >
                

                {/* Career Form */}
                <div className="container">
                  <div className="career-form">
                    <h2 className="form-title text-black fw-bold pb-2 my-md-5 border-bottom border-warning">
                      Join Our Team at Softgrowth Infotech
                    </h2>

                    <form>
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="+91-XXXXXXXXXX"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="position" className="form-label">
                          Position Applying For
                        </label>
                        <select className="form-select" id="position" required>
                          <option disabled value="">
                            Choose a role
                          </option>
                          <option>Frontend Developer</option>
                          <option>Backend Developer</option>
                          <option>Full Stack Developer</option>
                          <option>UI/UX Designer</option>
                          <option>QA Engineer</option>
                          <option>DevOps Engineer</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="resume" className="form-label">
                          Upload Resume
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Cover Letter / Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="4"
                          placeholder="Tell us why you're a great fit..."
                          required
                        ></textarea>
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn bg-main">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* End Career Form */}
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;
