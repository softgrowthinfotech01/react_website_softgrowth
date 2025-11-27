import Herosec from "./Herosec";

export default function About() {
  return (
   <>
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-bold;">About Us</h2>
          <ol>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>About Us</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End Breadcrumbs */}
    <section className="inner-page text-center">
      <div className="container">
        <section className="about pt-0" id="about">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="section-title" data-aos="fade-up">
                <h2 className="orangeborder2">About Us</h2>
              </div>
            </div>
          </div>
          <div
            className="row bg-light text-dark p-5  justify-content-center"
            data-aos="fade-up"
          >
            <div className="content col-md-10 pt-5 pt-lg-0 pl-0 pl-lg-3 ">
              <p className="text-justify" style={{ textAlign: "justify" }}>
                "Welcome to Softgrowth Infotech, where creativity meets
                cutting-edge technology! We specialize in website design,
                software application development, and custom website solutions
                tailored to elevate your business in the digital world. As a top
                best web design company in Chandrapur we provide all facilities
                related to the digitalization of your business.Softgrowth
                Infotech is happy to offer services in all the areas of
                Vidarbha, Maharashtra including Bhandara, Chandrapur,
                Gadchiroli, Gondia etc and even outside india.countries like
                USA,South Africa,Australia."
              </p>
            </div>
            <div className="col-md-6 text-start justify-content-start">
              <h3 className="text-dark py-5 px-3">
                <i className="bx bx-code-alt main-text-orange img-fluid" /> OUR
                VISION
              </h3>
              Providing complete IT innovative solutions to make our customers
              and industry successful through determination, creativity,
              passion, productivity, value for money, ensuring our products of
              outstanding quality, instill pride of ownership by innovative and
              sustainable technical solutions.
            </div>
            <div className="col-md-6 text-start">
              <h3 className="text-dark py-5 px-3">
                <i className="bx bx-code-alt main-text-orange img-fluid" /> OUR
                MISSION
              </h3>
              To become an exclusive IT service provider, aimed for operational
              excellence by continuously creating more innovative opportunities
              for growth in our strategic business and focusing to exceed
              customer expectations by understanding their business needs to be
              total rewarded with a smile &amp; social responsibility.
            </div>
            <div className="col-md-6 text-start">
              <h3 className="text-dark py-5 px-3">
                <i className="bx bx-code-alt main-text-orange img-fluid" /> OUR
                STRENGTH
              </h3>
              Softgrowth Infotech offers a team of hard-working and dedicated
              professionals proficient in advanced hardware and software
              technologies. Our state-of-the-art infrastructure guarantees
              hassle-free operations and 24x7 supports to our global clients.
            </div>
            <div className="col-md-6 text-start">
              <h3 className="text-dark py-5 px-3">
                <i className="bx bx-code-alt main-text-orange img-fluid align-item-center" />{" "}
                EXPERTISE
              </h3>
              Softgrowth Infotech expertise in the arena of IT solutions is well
              known &amp; world recognized. Our severe adherence to
              international quality standards on web, best quality services,
              creative designs, practical ideas, cost-effective and economical
              prices, time bound &amp; speedy project completion strategies,
              user-friendly &amp; easy to surf web presence differentiate us
              from others.
            </div>
          </div>
        </section>
        <div className="row  text-light ">
          <div className="col-md-6 text-start">
            <h4 className="text-light text-uppercase ps-3 text-decoration-underline ">
              {" "}
              Who we are?
            </h4>
            Are you looking for a Website Design and Development Company in
            Hyderabad, India and Allen, Texas with real style and visual appeal?
            Software Creatives have been relentlessly striving to promote ' a
            culture of Website Design and Development service excellence' to
            better make our chances to stand in the forefront. We would like to
            be at the disposal of our clients 24/7 and work round the clock to
            deliver the projects within turnaround time. We offer a wide range
            of services in IT Industry throughout the Globe. Software Creatives
            Services includes Website Design, Web Development(PHP, NET), Web
            applications Development, Mobile Applications Development, Software
            Development, Content Management Systems, Ecommerce Website Design,
            Logo Design, Domain Registrations, Web Hosting Services, Search
            Engine Optimization (SEO), Payment gateway solutions.
          </div>
          <div className="col-md-6">
            <div className="img-container">
              <img
                src="assets/img/who-we-are.png"
                alt="who-we-are"
                className="img-fluid px-5 "
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* End #main */}
</>

  );
}
