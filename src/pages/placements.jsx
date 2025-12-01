import React from "react";

const Placements = () => {
  const placements = [
    {
      name: "Trupti Nikhade",
      company: "Volody Products Pvt Ltd",
      image: "trupti.webp",
    },
    {
      name: "Dinesh Anandrao",
      company: "DNB Multiapps LLP",
      image: "dinesh.webp",
    },
    { name: "Damini Deogade", company: "Cognizant", image: "damini.webp" },

    { name: "Jayshree Kasture", company: "Capgemini", image: "jayshree.webp" },
    { name: "Yamini Shegaonkar", company: "Capgemini", image: "yamini.webp" },
    {
      name: "Sakshi Chaudhari",
      company: "Sara Solutions",
      image: "sakshi.webp",
    },
    { name: "Nayana Vyas", company: "Adex Labs", image: "nayana.webp" },
    { name: "Franklin Joshi", company: "OspLabs", image: "frankline.webp" },
    { name: "Kshipra Sharma", company: "Kumaran System", image: "kship.webp" },
    { name: "Chandan Tumsare", company: "Codewiz Labs", image: "chandan.webp" },
    {
      name: "Ravikeeran Gampawar",
      company: "Radiant Appliances & Electronics",
      image: "ravikiran.webp",
    },
    {
      name: "Vaishali Matte",
      company: "Capita India Pvt. Ltd",
      image: "vaishali.webp",
    },
    { name: "Nilima Ashok Thawari", company: "Plus 91", image: "nilima.webp" },
    { name: "Rutuja Chilbule", company: "MNJ Software", image: "rutuja.webp" },
    {
      name: "Shital Motghare",
      company: "Single Point Solutions",
      image: "shital.webp",
    },
    {
      name: "Sumit Kamble",
      company: "Sensia Energy Private Limited",
      image: "sumit.webp",
    },
    { name: "Jyoti Gupta", company: "Quick Heal", image: "jyoti.webp" },
  ];

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Placements</h2>
            <ol>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>Placements</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page p-0">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2 className="orangeborder">Placements</h2>
          </div>

          <div className="row g-4">
            {placements.map((item, index) => (
              <div
                className="col-md-3 col-sm-6 d-flex justify-content-center"
                key={index}
              >
                <div
                  className="card h-100 border-0 rounded-3 overflow-hidden"
                  style={{
                    width: "100%",
                    maxWidth: "260px",
                    background: "transparent", // ❌ removed white bg
                    boxShadow: "none", // ❌ removed shadow
                  }}
                >
                  {/* Square Image */}
                  <div className="ratio ratio-1x1 overflow-hidden rounded">
                    <img
                      src={`src/assets/placements/${item.image}`}
                      alt={item.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <div className="card-body text-center p-3">
                    <h6
                      className="card-title mb-2"
                      style={{ color: "#FFD700", fontWeight: "600" }} // ⭐ Yellow name
                    >
                      {item.name}
                    </h6>

                    <h5
                      className="fw-bold mb-0"
                      style={{ color: "#ffffff", fontWeight: "600" }} // ⭐ Same weight as name
                    >
                      {item.company}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Placements;
