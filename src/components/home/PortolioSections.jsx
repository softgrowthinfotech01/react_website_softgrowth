import React from "react";
import { Link } from "react-router-dom";

// import images  
import bhumiLogo from "../../assets/portfolio/bhumi_logo.webp";
import wildlifeAdventure from "../../assets/portfolio/wildlife_adventure.webp";
import elysian from "../../assets/portfolio/elysian.webp";

const PortolioSections = () => {
  const portfolioItems = [
    {
      img: bhumiLogo,
      title: "Bhumi",
      type: "Web",
      filter: "filter-dynamic",
      link: "https://softgrowthinfotech.com/new/home.php",
    },
    {
      img: wildlifeAdventure,
      title: "Tadoba Wildlife Adventure",
      type: "Web",
      filter: "filter-web",
      link: "http://www.tadobawildlifeadventure.com/",
    },
    {
      img: elysian,
      title: "Elysian",
      type: "Web",
      filter: "filter-dynamic",
      link: "https://elysianartify.com/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">

        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2 className="orangeborder">Portfolio</h2>
          <p>
            We have worked with Static Websites, Dynamic Websites and many types
            of Websites
          </p>
        </div>

        {/* Portfolio Items */}
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters"></ul>
          </div>
        </div>

        {/* Portfolio List Rendering */}
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {portfolioItems.map((item, index) => (
            <div key={index} className={`col-lg-4 col-md-6 portfolio-item ${item.filter}`}>
              <div className="portfolio-wrap">
                <img src={item.img} className="img-fluid" alt={item.title} />

                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.type}</p>

                  <div className="portfolio-links">
                    <a
                      href={item.img}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title={item.title}
                    >
                      <i className="bx bx-plus" />
                    </a>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="More Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="service_button d-flex justify-content-center">
          <div>
            <Link to="/portfolio">
              <button className="about_button text-light text-decoration-underline underline-color-orange">
                Explore More
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortolioSections;
