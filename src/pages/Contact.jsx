import React from 'react'

const Contact = () => {
  return (
   <main id="main">
        {/* Page Heading */}
        <section className="inner-page">
          <div className="container">
            <section className="about pt-0" id="about">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-12" data-aos="fade-up">
                  <div className="section-title" data-aos="fade-up">
                    <h2 className="orangeborder2">Contact</h2>
                  </div>
                </div>
              </div>

              {/* Match Career Layout */}
              <div
                className="row bg-light text-dark p-5 justify-content-center"
                data-aos="fade-up"
              >
                <div className="container">
                  <div className="career-form">
                    <h2 className="form-title text-black fw-bold pb-2 my-md-5 border-bottom border-warning">
                      Get in Touch With Softgrowth Infotech
                    </h2>

                    <div className="row">
                      {/* Contact Info */}
                      <div className="col-lg-4 mb-4">
                        <div className="info d-flex flex-column justify-content-start">
                          <div className="address mb-4">
                            <i className="bi bi-geo-alt"></i>
                            <h4 className="text-dark">Location:</h4>
                            <p>
                              Royal Villa, Plot No 22, MIDC Road,
                              <br />
                              near Sai temple, Datala <br />
                              Kosara, Chandrapur, Maharashtra 442402
                            </p>
                          </div>

                          <div className="email mb-4">
                            <i className="bi bi-envelope"></i>
                            <h4 className="text-dark">Email:</h4>
                            <p>
                              info@softgrowthinfotech.com
                              <br />
                              softgrowthinfotech@gmail.com
                            </p>
                          </div>

                          <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4 className="text-dark">Call:</h4>
                            <p>+91-8888654507</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <div className="col-lg-8">
                        <form className="php-email-form">
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Your Name</label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                required
                              />
                            </div>

                            <div className="col-md-6 mb-3">
                              <label className="form-label">Your Email</label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="you@example.com"
                                required
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea
                              className="form-control"
                              name="message"
                              rows="4"
                              placeholder="Write your message..."
                              required
                            ></textarea>
                          </div>

                          <div className="d-grid mt-4">
                            <button type="submit" className="btn bg-main">
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Career-Style Layout */}
            </section>
          </div>
        </section>
      </main>
  )
}

export default Contact
