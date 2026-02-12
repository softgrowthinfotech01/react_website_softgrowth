import React, { useState } from "react";

const Enquiry_form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/softgrowthinfotech@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="col-lg-5" id="enquiry">
      <div className="card border-0 shadow-lg rounded-4 text-dark">
        <div className="card-body p-4">
          <h5 className="fw-bold mb-1 text-warning">
            Enquire for Syllabus, Fees & Batches
          </h5>

          <p className="text-muted small mb-3">
            Fill the form to get a call back with detailed syllabus PDF, fees,
            and nearest batch.
          </p>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />

            <div className="mb-3">
              <label className="form-label small fw-semibold">Full Name</label>
              <input
                type="text"
                name="full_name"
                className="form-control bg-light"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                className="form-control bg-light"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Email ID</label>
              <input
                type="email"
                name="email"
                className="form-control bg-light"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">
                Preferred Mode
              </label>
              <select
                name="preferred_mode"
                className="form-select bg-light"
                required
              >
                <option value="">Select mode</option>
                <option>Classroom</option>
                <option>Flexible / Mixed</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Background</label>
              <select
                name="background"
                className="form-select bg-light"
                required
              >
                <option value="">Select your background</option>
                <option>BE / B.Tech</option>
                <option>BSc / BCA</option>
                <option>MSc / MCA</option>
                <option>Non-IT Graduate</option>
                <option>Working Professional</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">
                Message (Optional)
              </label>
              <textarea
                name="message"
                className="form-control bg-light"
                rows="2"
                placeholder="Any specific query?"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn w-100 fw-bold py-2 ${
                submitted ? "btn-success" : "btn-warning"
              }`}
              disabled={submitted}
            >
              {submitted ? "Form Submitted ✅" : "Get Call Back"}
            </button>

            <p
              className="mt-3 mb-0 text-muted text-center"
              style={{ fontSize: "0.75rem" }}
            >
              By submitting, you agree to be contacted via call / WhatsApp /
              SMS.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry_form;
