import logo from "../assets/soft_logo_org.png";
import line from "../assets/lineSeparatorWhite.png";

export default function Navbar() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top text-left pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <a href="#header" className="scrollto footer-logo">
                <img src={logo} alt="img" style={{ width: 150 }} />
              </a>
              <h3>Softgrowth Infotech</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-mid footer-top text-left pb-0"
        style={{ textAlign: "left !important" }}
      >
        <div className="container">
          <div className="row justify-content-space-between">
            <div className="col-md-4">
              <h2
                className="text-uppercase"
                data-scroll-reveal="enter left move 10px over 1s after 0.2s"
              >
                About Softgrowth
              </h2>
              <img
                src={line}
                className="img-responsive lineSeparator py-4"
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
                alt="separator"
              />
              <p
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
                className="my-1 h6"
              >
                As a top best web design company in Chandrapur we provide all
                facilities related to the digitalization of your business.
              </p>
              <h2
                className="text-uppercase"
                data-scroll-reveal="enter left move 10px over 1s after 0.2s"
              >
                Our Placements
              </h2>
              <img
                src={line}
                className="img-responsive lineSeparator py-4"
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
                alt="separator"
              />
              <a
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
                href="placements"
                style={{ color: "white" }}
              >
                - Placements
              </a>
            </div>
            <div className="col-md-4">
              <h2
                className="text-uppercase"
                data-scroll-reveal="enter left move 10px over 1s after 0.2s"
              >
                Newsletter
              </h2>
              <img
                src={line}
                className="img-responsive lineSeparator py-4"
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
                alt="separator"
              />
              <div
                className="form-group"
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
              >
                <div className="input-group">
                  <div className="input-group-addon">
                    {/* <i class="fa fa-envelope-o"></i> */}
                    <i className="bx bx-envelope p-3" />
                  </div>
                  <input
                    className="text-uppercase form-control bg-light border-0 text-dark opacity-50 w-75"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h2
                className="text-uppercase"
                data-scroll-reveal="enter left move 10px over 1s after 0.2s"
              >
                Contact
              </h2>
              <img
                src={line}
                className="img-responsive lineSeparator py-4"
                data-scroll-reveal="enter left move 10px over 1s after 0.3s"
                alt="separator"
              />
              <div className="row h6">
                <div className="col-md-6 ">
                  <ul className="infoContact list-unstyled text-light">
                    <li>
                      {/* <i class="fa fa-location-arrow"></i> */}
                      <i className="bx bx-current-location" />
                      Global Tower, Kosara Road, Datala
                    </li>
                    <li>Kosara,Chandrapur. Maharashtra 442402</li>
                  </ul>
                  <ul className="infoContact list-unstyled">
                    <li>
                      {" "}
                      <i className="bx bx-phone-call" />
                      +91-8888654507
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="infoContact list-unstyled text-light">
                    <li className="">
                      <i className="bx bx-envelope" />
                      info@softgrowthinfotech.com
                    </li>
                    <li>softgrowthinfotech@gmail.com</li>
                  </ul>
                  <ul className="infoContact list-unstyled">
                    <li>
                      {/* <i class="bx bx-clock"></i> */}
                      <i className="bx bx-time-five" />
                      Monday - Saturday
                    </li>
                    <li>9.30 AM - 7.30 PM </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix pt-0">
          <div className="social-links text-center p-3">
            <a href="https://x.com/SoftgrowthIndia" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a
              href="https://www.facebook.com/softgrowthinfotech/"
              className="facebook"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              href="https://www.instagram.com/softgrowth_infotech/"
              className="instagram"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqCPPXJhtHVxdVo6KLgf_Pw/featured"
              className="google-plus"
            >
              <i className="bx bxl-youtube" />
            </a>
            <a
              href="https://in.linkedin.com/company/softgrowth-infotech"
              className="linkedin"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Softgrowth Infotech</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://softgrowthinfotech.com/" target="_blank">
              Softgrowth Infotech
            </a>
          </div>
          {/* <div class="credits">
Distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a>
    </div> */}
        </div>
      </div>
    </footer>
  );
}
