import codewiz from "../../assets/company_logos/codewiz.jpeg";
import cognizant from "../../assets/company_logos/cognizant.svg";
import mnj from "../../assets/company_logos/mnj.png";
import plus91 from "../../assets/company_logos/plus91.jpg";
import singlepoint from "../../assets/company_logos/singlepoint.webp";
import capita from "../../assets/company_logos/capita.jpeg";
import adox from "../../assets/company_logos/adox.png";
import capgemini from "../../assets/company_logos/Capgemini.svg";
import volody from "../../assets/company_logos/Volody.svg";
import radiant from "../../assets/company_logos/radiant.png";
import kumaran from "../../assets/company_logos/kumaran.png";
import quickheal from "../../assets/company_logos/Quick_Heal.svg";
import deloitte from "../../assets/company_logos/deloitte.svg";
import hexaware from "../../assets/company_logos/hexaware.svg";
import infosys from "../../assets/company_logos/infosys.svg";
import tcs from "../../assets/company_logos/tcs.svg";

const ClientSections = () => {
  const companies = [
    { src: codewiz, delay: 0 },
    { src: cognizant, delay: 100 },
    { src: mnj, delay: 200, className: "w-50" },
    { src: plus91, delay: 300 },
    { src: singlepoint, delay: 400 },
    { src: capita, delay: 500, className: "w-25" },
    { src: adox, delay: 500, className: "w-25" },
    { src: capgemini, delay: 500 },
    { src: volody, delay: 500 },
    { src: radiant, delay: 500 },
    { src: kumaran, delay: 500 },
    { src: quickheal, delay: 500 },
    { src: deloitte, delay: 500 },
    { src: hexaware, delay: 500 },
    { src: infosys, delay: 500 },
    { src: tcs, delay: 500 },
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
