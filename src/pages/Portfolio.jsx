export default function Portfolio() {
  return (
    <>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-uppercase">Portfolio</h2>
          <ol>
            <li>
              <a href="index">Home</a>
            </li>
            <li>Portfolio </li>
          </ol>
        </div>
      </div>
    </section>
    {/* End Breadcrumbs */}
    <section className="inner-page">
      <div className="container">
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2 className="orangeborder3">Portfolio</h2>
              <p>Recent Works</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-dynamic">Dynamic</li>
                  <li data-filter=".filter-static">Static</li>
                  {/* <li data-filter=".filter-web">Web</li> */}
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-dynamic">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/bhumi_logo.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Bhumi</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/bhumi_logo.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://softgrowthinfotech.com/new/home.php"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/wildlife_adventure.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>tadoba wildlife adventure</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/wildlife_adventure.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="http://www.tadobawildlifeadventure.com/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-dynamic">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/elysian.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>elysian</h4>
                    <p>web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/elysian.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://elysianartify.com/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-static">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/easycracker.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>easy cracker</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/easycracker.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://easycracker.in/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/tadoba_wildlife.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>tadoba wildlife resort</h4>
                    <p>web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/tadoba_wildlife.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="http://tadobawildliferesort.in/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-dynamic">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/atma.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Atma</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/atma.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.atmachandrapur.in/en/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-static">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/ctvnews.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>ctv news</h4>
                    <p>web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/ctvnews.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://ctvnewschandrapur.com/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-static">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/akojwar.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>akojwar jwellers</h4>
                    <p>web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/akojwar.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://akojwarjewellers.com/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/pahel.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>pahel</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/pahel.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.pahelmultipurposesociety.com/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/chandrapur_police.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>chandrapur police</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/chandrapur_police.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="https://chandrapurpolice.gov.in/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/shashwat.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>shashwat</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/shashwat.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="http://softgrowthblog.com/agrinomics/"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/portfolio/ashuda.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Ashuda</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/portfolio/ashuda.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        target="_blank"
                        href="http://www.ashuda.in/home"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
      </div>
    </section>
  </main>
  {/* End #main */}
</>

  );
}
