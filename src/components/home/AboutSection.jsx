import React from "react";

const AboutSection = () => {
  return (
    <section className="about bg-light text-dark" id="about">
      <div className="row justify-content-center">
        <div className="col-lg-8" data-aos="fade-up">
          <div className="section-title" data-aos="fade-up">
            <h2 className="text-dark orangeborder">About Us</h2>
          </div>
          <div className="content pt-4 px-3 ">
            <p className="text-justify " style={{ textAlign: "justify" }}>
              As a top best web design company in Chandrapur we provide all
              facilities related to the digitalization of your
              business.Softgrowth Infotech is happy to offer services in all the
              areas of Vidarbha, Maharashtra including Bhandara, Chandrapur,
              Gadchiroli, Gondia etc and even outside india.countries like
              USA,South Africa,Australia.
            </p>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              Softgrowth Infotech is a First leading software company in
              Chandrapur much known website designing and software development
              company located in Maharashtra India. We are specialized in
              creating Desktop Applications, Static website, Dynamic website,
              eCommerce Web Design Development along with well optimized code
              and SEO friendly website. We have professionals having 10+ years
              of experience in development. Our expert team work on latest
              technologies like PHP, Cake PHP, .Net , Python, Laravel, Magento
              to give the best solution as per clients requirement and business
              need.
            </p>
          </div>
          <div>
            <a href="about">
              <button className="about_button  text-decoration-underline underline-color-orange">
                Know More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
