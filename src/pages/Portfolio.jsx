import { useEffect, useState } from "react";

export default function Portfolio() {


const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://softgrowthinfotech.com/backend/api/getdata.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, []);



  return (
    <>
      <main id="main">
 
        {/* Portfolio Section */}
        <div className="inner-page">
          <div className="container">
            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2 className="orangeborder3">Portfolio</h2>
                  <p>Recent Works</p>
                </div>

                {/* Portfolio Items */}
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {data.map((item, index) => (
                    <div
                      key={index+1}
                      className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
                    >
                      <div className="portfolio-wrap">
                        <img
                           src={`https://softgrowthinfotech.com/backend/uploads/${item.image}`}
                          className="img-fluid"
                          alt={item.title}
                        />
                        <div className="portfolio-info">
                          <h4>{item.title}</h4>
                          <p>Web</p>
                          <div className="portfolio-links">
                            <a
                              href={item.image}
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
        </div>
      </main>
    </>
  );
}
