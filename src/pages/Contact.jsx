export default function Contact() {
  return (
    <>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact Us</h2>
          <ol>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>Contact Us</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End Breadcrumbs */}
    <section className="inner-page">
      <div className="container-fluid p-0">
        <section id="contact" className="contact section-bg">
          <div className="container">
            <div className="section-title">
              <h2 className="text-dark orangeborder">Contact</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="info d-flex flex-column justify-content-center"
                  data-aos="fade-right"
                >
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4 className="text-dark">Location:</h4>
                    <p>
                      Royal Villa, Plot No 22, MIDC Road,
                      <br />
                      near Sai temple, Datala <br />
                      Kosara,Chandrapur. Maharashtra 442402
                    </p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4 className="text-dark">Email:</h4>
                    <p>
                      info@softgrowthinfotech.com
                      <br />
                      softgrowthinfotech@gmail.com
                    </p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4 className="text-dark">Call:</h4>
                    <p>+91-8888654507</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="<?php echo $_SERVER['PHP_SELF']; ?>"
                  method="post"
                  role="form"
                  className="php-email-form"
                  data-aos="fade-left"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"> </div>
                    <div className="sent-message">
                      {" "}
                      {/*?php
                                          if (!empty($mass)) { ?*/}
                      <div style={{ background: "green" }}>
                        {/*?php echo $mass; ?*/}
                      </div>
                      {/*?php
                                          }
                ?*/}
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>
    </section>
  </main>
  {/* End #main */}
</>

  );
}
