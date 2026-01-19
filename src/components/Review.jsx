import { useState } from "react";

const Review = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    title: "",
    review: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your review!");
  };

  return (
    <div className="py-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="border rounded p-4 ">
              {/* Header */}
              <div className="mb-4">
                <h4 className="fw-bold">Submit Your Review</h4>
                <p className=" mb-0">
                  Share your experience as a student or client
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Role */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Current Position
                  </label>
                  <input
                    type="text"
                    name="current_position"
                    className="form-control"
                    placeholder="Enter your current position"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Company Name"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Review */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Review
                  </label>
                  <textarea
                    name="review"
                    className="form-control"
                    rows="5"
                    placeholder="Write your experience here..."
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Image */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-dark px-4">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;