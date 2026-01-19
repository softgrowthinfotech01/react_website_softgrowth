import React, { useEffect, useState } from "react";

const ReviewForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://softgrowthinfotech.com/backend/api/thoughts/get.php"
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setData(result.data);
          console.log(result.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container-fluid p-3">
      <div className="table-responsive">
        <h1 className="mb-3">Review Table</h1>

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
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={
                        item.image
                          ? `https://softgrowthinfotech.com/backend/api/thoughts/uploads/${item.image}`
                          : "https://via.placeholder.com/60"
                      }
                      alt="Profile"
                      className="rounded-circle object-fit-cover"
                      width="60"
                      height="60"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.company}</td>
                  <td>{item.review}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No reviews found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewForm;
