import React from "react";

const faqData = [
  {
    id: "faq1",
    question: "What services does Softgrowth Infotech offer?",
    answer:
      "Softgrowth Infotech provides a wide range of software development services, including static and dynamic websites, IT consulting, and system integration.",
  },
  {
    id: "faq2",
    question: "How long has Softgrowth Infotech been in business?",
    answer:
      "Softgrowth Infotech has been delivering top-notch software solutions since 2015, with 9+ years of experience.",
  },
  {
    id: "faq3",
    question: "What programming languages and technologies do you use?",
    answer:
      "Our team is proficient in JavaScript, PHP, Angular, React, and other modern technologies.",
  },
  {
    id: "faq4",
    question: "Can you handle large-scale projects?",
    answer:
      "Yes, our team has successfully managed and delivered large-scale, complex projects across industries.",
  },
  {
    id: "faq5",
    question: "What is your approach to client communication?",
    answer:
      "We maintain strong communication via meetings, emails, and project tools — ensuring clients stay updated throughout.",
  },
  {
    id: "faq6",
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer full post-launch support, bug fixes, updates, and long-term maintenance.",
  },
];

const FrequentlySection = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>
            Frequently Asked <span className="orangeborder">Questions</span>
          </h2>
        </div>

        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target={`#${item.id}`}
                href="#!"
              >
                {item.question}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-x icon-close" />
              </a>

              {/* ❌ removed data-bs-parent to prevent auto-scroll */}
              <div id={item.id} className="collapse">
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FrequentlySection;
