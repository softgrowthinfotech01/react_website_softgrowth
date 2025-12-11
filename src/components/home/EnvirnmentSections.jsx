import React from "react";
// import images  
import classroom1 from "../../assets/gallary/classroom1.webp";
import classroom2 from "../../assets/gallary/classroom2.webp";
import classroom3 from "../../assets/gallary/classroom3.webp";
import classroom4 from "../../assets/gallary/classroom4.webp";
import classroom5 from "../../assets/gallary/classroom5.webp";
import classroom6 from "../../assets/gallary/classroom6.webp";
import classroom7 from "../../assets/gallary/classroom7.webp";
import classroom8 from "../../assets/gallary/classroom8.webp";
import classroom9 from "../../assets/gallary/classroom9.webp";

const EnvirnmentSections = () => {
  return (
    <section>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="">
            Discover Our <span className="orangeborder">Vibrant</span>{" "}
            Environment
          </h2>
          <p>With Proffessional staff</p>
        </div>
        <div className="row mx-0" id="" data-aos="fade-up">
          <div className="col-lg-4 col-md-12 mb-4 px-2  ">
            <a
              className="lg-item"
              data-lg-size="1600-1067"
              data-src="src/assets/company/bhumi_logo.png"
            >
              <img
                src={classroom1}
                className="w-100 h-100 img-fluid shadow-1-strong mb-3"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 px-2  ">
            <a
              className="lg-item"
              data-lg-size="1600-2400"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom2}
                className="w-100 h-100 shadow-1-strong "
                alt="Wintry Mountain Landscape"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-2398"
              data-src="assets/portfolio/atma.png"
            >
              <img
                src={classroom3}
                className="w-100 h-100 shadow-1-strong mb-3"
                alt="Mountains in the Clouds"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom4}
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom5}
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom6}
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom7}
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom8}
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/portfolio/bhumi_logo.png"
            >
              <img
                src={classroom9}
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvirnmentSections;
