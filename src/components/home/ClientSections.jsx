
const ClientSections = () => {
  const companies = [
    { src: "/src/assets/company_logos/codewiz.jpeg", delay: 0 },
    { src: "/src/assets/company_logos/cognizant.svg", delay: 100 },
    { src: "/src/assets/company_logos/mnj.png", delay: 200, className: "w-50" },
    { src: "/src/assets/company_logos/plus91.jpg", delay: 300 },
    { src: "/src/assets/company_logos/singlepoint.webp", delay: 400 },
    { src: "/src/assets/company_logos/capita.jpeg", delay: 500, className: "w-25" },
    { src: "/src/assets/company_logos/adox.png", delay: 500, className: "w-25" },
    { src: "/src/assets/company_logos/Capgemini.svg", delay: 500 },
    { src: "/src/assets/company_logos/Volody.svg", delay: 500 },
    { src: "/src/assets/company_logos/radiant.png", delay: 500 },
    { src: "/src/assets/company_logos/kumaran.png", delay: 500 },
    { src: "/src/assets/company_logos/Quick_Heal.svg", delay: 500 },
    { src: "/src/assets/company_logos/deloitte.svg", delay: 500 },
    { src: "/src/assets/company_logos/hexaware.svg", delay: 500 },
    { src: "/src/assets/company_logos/infosys.svg", delay: 500 },
    { src: "/src/assets/company_logos/tcs.svg", delay: 500 },
  ];

  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className="text-dark text-uppercase pt-5">
            <b>
              companies where our{" "}
              <span className="orangeborder">students</span> have placed
            </b>
          </h2>
        </div>

        <div className="row align-items-center">
          {companies.map((logo, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-6"
              data-aos="zoom-in"
              data-aos-delay={logo.delay}
            >
              <img
                src={logo.src}
                className={`img-fluid ${logo.className || ""}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSections;
