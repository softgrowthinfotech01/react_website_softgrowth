import React from "react";

const ReviewForm = () => {
  return (
    <div className="container-fluid p-3">
      <div className="table-responsive">
        <h1>Review Table</h1>
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-light">
            <tr>
              <th>Profile Photo</th>
              <th>Name</th>
              <th>Current Position</th>
              <th>Company Name</th>
              <th>Review</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="rounded-circle"
                  width="60"
                  height="60"
                />
              </td>
              <td>Akshay Patil</td>
              <td>Frontend Developer</td>
              <td>Tech Solutions Pvt Ltd</td>
              <td>
                Great experience working with the team. Learned a lot about
                React, performance optimization, and UI best practices.
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="rounded-circle"
                  width="60"
                  height="60"
                />
              </td>
              <td>Rohit Sharma</td>
              <td>UI Engineer</td>
              <td>Innovate Labs</td>
              <td>
                Excellent work culture and strong focus on clean, scalable
                frontend architecture.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewForm;
