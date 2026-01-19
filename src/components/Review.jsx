import { useState } from "react";

const Review = () => {
  const [formData, setFormData] = useState({
    name: "",
    current_position: "",
    title: "",
    review: "",
    image: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
      payload.append(key, formData[key]);
    });

    try {
      const res = await fetch(
        "http://localhost/react_website_softgrowth/backend/api/thoughts/thoughts.php",
        {
          method: "POST",
          body: payload,
        }
      );

      const data = await res.json();

      if (data.status) {
        setMessage("Data has been saved successfully!");
        setFormData({
          name: "",
          current_position: "",
          title: "",
          review: "",
          image: null,
        });
        e.target.reset();
      } else {
        setMessage("Error while saving data!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error!");
    }
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="border rounded p-4">
              <h4 className="fw-bold mb-1">Submit Your Review</h4>
              <p className="mb-3">Share your experience as a student or client</p>

              {message && <p className="text-success">{message}</p>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Current Position
                  </label>
                  <input
                    type="text"
                    name="current_position"
                    className="form-control"
                    value={formData.current_position}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Review</label>
                  <textarea
                    name="review"
                    className="form-control"
                    rows="5"
                    value={formData.review}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

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
