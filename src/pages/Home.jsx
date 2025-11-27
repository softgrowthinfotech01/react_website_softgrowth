import Herosec from "./Herosec";
export default function Home() {
  return (
    <>
  {/*?php include_once "head.php"; ?*/}
  {/* ======= Loader Section ======= */}
  {/*?php include_once "loader.php"; ?*/}
  {/* ======= Hero Section ======= */}
  {/* End Hero */}
  {/* ======= Header ======= */}
  {/*?php include_once "header.php"; ?*/}
  <main id="main">
    {/* ======= Wellcome page ======= */}
    <section id="wellcome" className="wellcome">
      <div className="container">
        <div className="row mb-5">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center"
            data-aos="fade-right"
          >
            <div className="image-container px-5">
              <img
                src="./src/assets/img/landing-image1.jpg"
                className="img-fluid rounded "
                alt="landing-image"
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="section-title" data-aos="fade-up">
              <h3> Welcome to </h3>
              <h1 className="text-logo source-code-pro-500 ">
                <b>SOFTGROWTH INFOTECH</b>
              </h1>
              <p> Your Partner in Digital Success</p>
            </div>
            <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
              <p className="fst-italic">
                At Softgrowth Infotech, we are dedicated to empowering
                businesses and individuals with innovative technology solutions.
                Whether you're looking for a stunning website, seeking to
                enhance your skills, or need custom software tailored to your
                unique requirements, we’ve got you covered
              </p>
              <p>
                Softgrowth Is the result of the dream and hardwork of a young
                talented.The skilled &amp; sincere team of professionals is our
                biggest strength.We have been are liable organization
                inproviding the best services to the clients with the assistance
                of our proficient professionals.
              </p>
              <h3>Our Services</h3>
              <ul className="p-0">
                <li className=" nav-link p-0 text-light">
                  <i className="bx bx-check-double main-text-orange" /> Website
                  Design &amp; Development
                </li>
                <li className=" nav-link p-0 text-light">
                  <i className="bx bx-check-double main-text-orange" />{" "}
                  Professional Courses for Students
                </li>
                <li className=" nav-link p-0 text-light">
                  <i className="bx bx-check-double main-text-orange" /> Custom
                  Software Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End wellcome Us Section */}
    {/* ======= About Us Section ======= */}
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
    {/* End About Us Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="orangeborder">Services</h2>
          <p>
            We always try to provide best services. Get more insight to it.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up">
              {/* <i class="bx bx-receipt"></i> */}
              <i className="bx bx-code-block main-text-orange" />
              <h4>Website Design &amp; Development</h4>
              <p>Make your online presence shine!</p>
              <ul className="list-unstyled">
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />{" "}
                  Responsive Design: Websites that look great on any device.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Custom Websites: Tailored designs that reflect your brand
                  identity.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  E-Commerce Solutions: Seamless online stores to boost your
                  sales.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  SEO-Friendly: Optimized websites to rank higher and attract
                  more visitors.
                </li>
              </ul>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* <i class="bx bx-cube-alt"></i> */}
              <i className="bx bx-book-content main-text-orange" />
              <h4>Professional Courses for Students</h4>
              <p>Unlock your potential with hands-on learning.</p>
              <ul className="list-unstyled">
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Web Development: Master HTML, CSS, JavaScript, and frameworks
                  like React and Angular.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Software Development: Learn programming languages, database
                  management, and system design.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Digital Marketing: Become an expert in SEO, social media, and
                  online branding.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Certification Programs: Industry-recognized certifications to
                  boost your career prospects.
                </li>
              </ul>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* <i class="bx bx-shield"></i> */}
              <i className="bx bx-desktop main-text-orange" />
              <h4>Custom Software Development</h4>
              <p>Solutions as unique as your business.</p>
              <ul className="list-unstyled">
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Enterprise Applications: Streamline operations with efficient
                  software.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Mobile Apps: Engage customers with user-friendly apps.
                </li>
                <li>
                  <i
                    className="bx bx-right-arrow-alt main-text-orange p-1"
                    style={{ fontSize: 18 }}
                  />
                  Integration Services: Seamlessly connect your existing
                  systems.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="image col-lg-6 order-1 order-lg-2 img-fluid rounded "
            style={{ backgroundImage: 'url("src/assets/img/services-image.jpg")' }}
            data-aos="fade-left"
            data-aos-delay={100}
          />
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Featured Section ======= */}
    <section id="featured " className="featured text-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 parallax" data-aos="fade-right">
            {/* <div class="parallax"></div> */}
            <div className="tab-content">
              <div
                className="tab-pane active show "
                style={{ height: 100 }}
                id="tab-1"
              >
                <figure>
                  <img src="src/assets/img/featured-1.png" alt="" class="w-50" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0 text-dark" data-aos="fade-left">
            <h2 className="text-dark">Why Choose Us?</h2>
            <ul className="nav  flex-column">
              <li className="nav-item">
                <a className="nav-link ">
                  <h4 className="text-dark">
                    <i className="bx  bx-certification main-text-orange" />{" "}
                    Experienced Team: Skilled professionals with a passion for
                    technology.
                  </h4>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link">
                  <h4 className="text-dark">
                    <i className="bx  bx-certification main-text-orange" />{" "}
                    Customer-Centric Approach: Solutions designed to meet your
                    goals.
                  </h4>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link">
                  <h4 className="text-dark">
                    <i className="bx  bx-certification main-text-orange" />{" "}
                    Affordable Pricing: High-quality services at competitive
                    rates.
                  </h4>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link">
                  <h4 className="text-dark">
                    <i className="bx  bx-certification main-text-orange" />{" "}
                    End-to-End Support: From concept to delivery and beyond.
                  </h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* End Featured Section */}
    {/* ======= Why Us Section ======= */}
    {/* ======= Portfolio Section ======= */}
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="orangeborder">Portfolio</h2>
          <p>
            We have worked with Static Websites, Dynamic Websites and many types
            of Websites
          </p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {/* <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-dynamic">Dynamic</li>
        <li data-filter=".filter-static">Static</li> */}
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
                src="assets/img/portfolio/bhumi_logo.webp"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Bhumi</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/bhumi_logo.webp"
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
                src="assets/img/portfolio/wildlife_adventure.webp"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>tadoba wildlife adventure</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/wildlife_adventure.webp"
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
                src="assets/img/portfolio/elysian.webp"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>elysian</h4>
                <p>web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/elysian.webp"
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
        </div>
        <div className="service_button d-flex justify-content-center">
          <div>
            <a href="portfolio">
              <button className="about_button text-light text-decoration-underline underline-color-orange">
                Explore More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}
    {/* ======= Testimonials Section ======= */}
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
              data-src="src/assets/img/company/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className="w-100 h-100 img-fluid shadow-1-strong mb-3"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 px-2  ">
            <a
              className="lg-item"
              data-lg-size="1600-2400"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className="w-100 h-100 shadow-1-strong "
                alt="Wintry Mountain Landscape"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-2398"
              data-src="assets/img/portfolio/atma.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className="w-100 h-100 shadow-1-strong mb-3"
                alt="Mountains in the Clouds"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 px-2">
            <a
              className="lg-item"
              data-lg-size="1600-1065"
              data-src="assets/img/portfolio/bhumi_logo.png"
            >
              <img
                src="src/assets/img/gallary/classroom.png"
                className=" w-100 h-100 shadow-1-strong"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Testimonials Section */}
    {/* ======= Clients Section ======= */}
    <section id="clients" className="clients">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="text-dark text-uppercase pt-5 ">
            <b>
              companies where our{" "}
              <span className="orangeborder"> students </span>have placed
            </b>
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-6" data-aos="zoom-in">
            <img
              src="assets/img/company_logos/codewiz.jpeg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <img
              src="assets/img/company_logos/cognizant.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src="assets/img/company_logos/mnj.png"
              className="img-fluid w-50"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <img
              src="assets/img/company_logos/plus91.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <img
              src="assets/img/company_logos/singlepoint.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/capita.jpeg"
              className="img-fluid w-25"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/adox.png"
              className="img-fluid w-25"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/Capgemini.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/Volody.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/radiant.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/kumaran.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/Quick_Heal.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/**/}
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/deloitte.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/**/}
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/hexaware.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/**/}
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/infosys.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/**/}
          <div
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in"
            data-aos-delay={500}
          >
            <img
              src="assets/img/company_logos/tcs.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* End Clients Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="">
            Frequently Asked <span className="orangeborder">Questions</span>
          </h2>
        </div>
        <ul className="faq-list">
          <li data-aos="fade-up">
            <a
              data-bs-toggle="collapse"
              className="collapsed"
              data-bs-target="#faq1"
            >
              What services does Softgrowth Infotech offer?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Softgrowth Infotech provides a wide range of software
                development services, including web development with Static and
                Dynamic websites. We also offer IT consulting and system
                integration services.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={100}>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              className="collapsed"
            >
              How long has Softgrowth Infotech been in business?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Softgrowth Infotech has been delivering top-notch software
                solutions since 2015. With 9 years of experience, we have
                established a strong presence in the industry.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={200}>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              className="collapsed"
            >
              What programming languages and technologies do you use ?{" "}
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Our team is proficient in a wide range of programming languages
                and technologies, including but not limited to, JavaScript, PHP,
                Angular, React. We stay updated with the latest trends to
                deliver cutting-edge solutions.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={300}>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              className="collapsed"
            >
              Can you handle large-scale projects?{" "}
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Absolutely. Our team has successfully managed and delivered
                large-scale projects for various industries. We have the
                resources and expertise to handle complex and extensive software
                development projects.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={400}>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              className="collapsed"
            >
              What is your approach to client communication?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Effective communication is key to our success. We maintain
                regular contact with our clients through meetings, emails, and
                project management tools. We ensure that clients are updated on
                progress and any changes throughout the project.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={500}>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
              className="collapsed"
            >
              Do you provide post-launch support and maintenance?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                Yes, we offer comprehensive post-launch support and maintenance
                services to ensure the smooth functioning of your software. Our
                team is available to address any issues, implement updates, and
                provide ongoing support.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  {/*?php require_once "footer.php"; ?*/}
  {/* End Footer */}
  <a
    href="#header"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>
  );
}
