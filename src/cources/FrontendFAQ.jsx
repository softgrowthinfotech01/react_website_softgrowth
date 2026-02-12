import React from "react";

const FrontendFAQ = () => {
  return (
    <section className="py-5 mb-5 bg-white">
      <div className="container py-4">
        <h2 className="fw-bold text-center mb-2 text-dark">
          Frequently Asked Questions
        </h2>

        <p
          className="text-muted text-center mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Clear your doubts about the Front-End Development course.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "Who can join this course?",
                  a: "Any student, fresher, or working professional from IT / non-IT background.",
                },
                {
                  q: "Do you provide placement support?",
                  a: "Yes. We provide 100% placement assistance.",
                },
                {
                  q: "Will I work on a live project?",
                  a: "Yes! You will build at least one complete front-end project.",
                },
                {
                  q: "Is coding experience required?",
                  a: "No. We start completely from basics.",
                },
                {
                  q: "How can I know the latest fees?",
                  a: "Fill the enquiry form or call us to get the latest fee details.",
                },
              ].map((faq, idx) => (
                <div
                  className="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm"
                  key={idx}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        idx !== 0 ? "collapsed" : ""
                      } fw-semibold bg-white`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${idx}`}
                    >
                      {faq.q}
                    </button>
                  </h2>

                  <div
                    id={`collapse${idx}`}
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted small">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <a
                href="#enquiry"
                className="btn btn-warning btn-lg fw-bold px-5"
              >
                Still have questions? Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendFAQ;
