export default function Portfolio() {
  const portfolioItems = [
    {
      img: "/src/assets/portfolio/bhumi_logo.webp",
      title: "Bhumi",
      category: "filter-dynamic",
      link: "https://softgrowthinfotech.com/new/home.php",
    },
    {
      img: "/src/assets/portfolio/wildlife_adventure.webp",
      title: "tadoba wildlife adventure",
      category: "filter-web",
      link: "http://www.tadobawildlifeadventure.com/",
    },
    {
      img: "/src/assets/portfolio/elysian.webp",
      title: "elysian",
      category: "filter-dynamic",
      link: "https://elysianartify.com/",
    },
    {
      img: "/src/assets/portfolio/easycracker.webp",
      title: "easy cracker",
      category: "filter-static",
      link: "https://easycracker.in/",
    },
    {
      img: "/src/assets/portfolio/tadoba_wildlife.webp",
      title: "tadoba wildlife resort",
      category: "filter-web",
      link: "http://tadobawildliferesort.in/",
    },
    {
      img: "/src/assets/portfolio/atma.webp",
      title: "Atma",
      category: "filter-dynamic",
      link: "https://www.atmachandrapur.in/en/",
    },
    {
      img: "/src/assets/portfolio/ctvnews.webp",
      title: "ctv news",
      category: "filter-static",
      link: "https://ctvnewschandrapur.com/",
    },
    {
      img: "/src/assets/portfolio/akojwar.png",
      title: "akojwar jwellers",
      category: "filter-static",
      link: "https://akojwarjewellers.com/",
    },
    {
      img: "/src/assets/portfolio/pahel.webp",
      title: "pahel",
      category: "filter-web",
      link: "https://www.pahelmultipurposesociety.com/",
    },
    {
      img: "/src/assets/portfolio/chandrapur_police.webp",
      title: "chandrapur police",
      category: "filter-web",
      link: "https://chandrapurpolice.gov.in/",
    },
    {
      img: "/src/assets/portfolio/shashwat.webp",
      title: "shashwat",
      category: "filter-web",
      link: "http://softgrowthblog.com/agrinomics/",
    },
    {
      img: "/src/assets/portfolio/ashuda.webp",
      title: "Ashuda",
      category: "filter-web",
      link: "http://www.ashuda.in/home",
    },
    {
      img: "/src/assets/portfolio/ability.png",
      title: "Ability",
      category: "filter-static",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/archivault.png",
      title: "Archivault",
      category: "filter-web",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/chatap.png",
      title: "Chatap",
      category: "filter-static",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/estern.png",
      title: "Estern",
      category: "filter-web",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/gurukripa.png",
      title: "Gurukripa",
      category: "filter-static",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/gurusai.png",
      title: "Gurusai",
      category: "filter-static",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/lake_view.png",
      title: "Lake View",
      category: "filter-web",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/neon.png",
      title: "Neon",
      category: "filter-dynamic",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/orbit.png",
      title: "Orbit",
      category: "filter-web",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/thakre.png",
      title: "Thakre",
      category: "filter-static",
      link: "#",
    },
    {
      img: "/src/assets/portfolio/vkart.png",
      title: "Vkart",
      category: "filter-web",
      link: "#",
    },
  ];

  return (
    <>
      <main id="main">
        {/* Breadcrumbs */}


        {/* Portfolio Section */}
        <section className="inner-page">
          <div className="container">
            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2 className="orangeborder3">Portfolio</h2>
                  <p>Recent Works</p>
                </div>

                {/* Filters */}
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">
                        All
                      </li>
                      <li data-filter=".filter-dynamic">Dynamic</li>
                      <li data-filter=".filter-static">Static</li>
                    </ul>
                  </div>
                </div>

                {/* Portfolio Items */}
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {portfolioItems.map((item, index) => (
                    <div
                      key={index}
                      className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
                    >
                      <div className="portfolio-wrap">
                        <img
                          src={item.img}
                          className="img-fluid"
                          alt={item.title}
                        />
                        <div className="portfolio-info">
                          <h4>{item.title}</h4>
                          <p>Web</p>
                          <div className="portfolio-links">
                            <a
                              href={item.img}
                              className="portfolio-lightbox"
                              data-gallery="portfolioGallery"
                            >
                              <i className="bx bx-plus" />
                            </a>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bx bx-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
