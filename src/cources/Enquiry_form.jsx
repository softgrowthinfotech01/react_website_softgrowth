import React from "react";

const Enquiry_form = () => {
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

          <form>
            <div className="mb-3">
              <label className="form-label small fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control bg-light"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Email ID</label>
              <input
                type="email"
                className="form-control bg-light"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">
                Preferred Mode
              </label>
              <select className="form-select bg-light">
                <option>Select mode</option>
                <option>Classroom</option>
                <option>Flexible / Mixed</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Background</label>
              <select className="form-select bg-light">
                <option>Select your background</option>
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
                className="form-control bg-light"
                rows="2"
                placeholder="Any specific query?"
              ></textarea>
            </div>

            <button
              type="button"
              className="btn btn-warning w-100 fw-bold py-2"
            >
              Get Call Back
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
