// import React from "react";
// // import images
// import trupti from "../assets/placements/trupti.webp";
// import dinesh from "../assets/placements/dinesh.webp";
// import damini from "../assets/placements/damini.webp";  
// import jayshree from "../assets/placements/jayshree.webp";
// import yamini from "../assets/placements/yamini.webp";
// import sakshi from "../assets/placements/sakshi.webp";
// import nayana from "../assets/placements/nayana.webp";
// import frankline from "../assets/placements/frankline.webp";
// import kship from "../assets/placements/kship.webp";
// import chandan from "../assets/placements/chandan.webp";
// import ravikiran from "../assets/placements/ravikiran.webp";
// import vaishali from "../assets/placements/vaishali.webp";
// import nilima from "../assets/placements/nilima.webp";
// import rutuja from "../assets/placements/rutuja.webp";
// import shital from "../assets/placements/shital.webp";
// import sumit from "../assets/placements/sumit.webp";
// import jyoti from "../assets/placements/jyoti.webp";

import { useEffect, useState } from "react";

const Placements = () => {
  // const placements = [
  //   {
  //     name: "Trupti Nikhade",
  //     company: "Volody Products Pvt Ltd",
  //     image: trupti,
  //   },
  //   {
  //     name: "Dinesh Anandrao",
  //     company: "DNB Multiapps LLP",
  //     image: dinesh,
  //   },
  //   { name: "Damini Deogade", company: "Cognizant", image: damini },

  //   { name: "Jayshree Kasture", company: "Capgemini", image: jayshree },
  //   { name: "Yamini Shegaonkar", company: "Capgemini", image: yamini },
  //   {
  //     name: "Sakshi Chaudhari",
  //     company: "Sara Solutions",
  //     image: sakshi,
  //   },
  //   { name: "Nayana Vyas", company: "Adex Labs", image: nayana },
  //   { name: "Franklin Joshi", company: "OspLabs", image: frankline },
  //   { name: "Kshipra Sharma", company: "Kumaran System", image: kship },
  //   { name: "Chandan Tumsare", company: "Codewiz Labs", image: chandan  },
  //   {
  //     name: "Ravikeeran Gampawar",
  //     company: "Radiant Appliances & Electronics",
  //     image: ravikiran,
  //   },
  //   {
  //     name: "Vaishali Matte",
  //     company: "Capita India Pvt. Ltd",
  //     image: vaishali,
  //   },
  //   { name: "Nilima Ashok Thawari", company: "Plus 91", image: nilima },
  //   { name: "Rutuja Chilbule", company: "MNJ Software", image: rutuja },
  //   {
  //     name: "Shital Motghare",
  //     company: "Single Point Solutions",
  //     image: shital,
  //   },
  //   {
  //     name: "Sumit Kamble",
  //     company: "Sensia Energy Private Limited",
  //     image: sumit,
  //   },
  //   { name: "Jyoti Gupta", company: "Quick Heal", image: jyoti },
  // ];

 const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://softgrowthinfotech.com/backend/api/get_placement.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, []);

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
            {data.map((item, index) => (
              <div
                className="col-md-3 col-sm-6 d-flex justify-content-center"
                key={index+1}
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
                     src={`https://softgrowthinfotech.com/backend/p_uploads/${item.image}`}
                      alt={item.e_name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <div className="card-body text-center p-3">
                    <h6
                      className="card-title mb-2"
                      style={{ color: "#FFD700", fontWeight: "600" }} // ⭐ Yellow name
                    >
                      {item.e_name}
                    </h6>

                    <h5
                      className="fw-bold mb-0"
                      style={{ color: "#ffffff", fontWeight: "600" }} // ⭐ Same weight as name
                    >
                      {item.c_name}
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
