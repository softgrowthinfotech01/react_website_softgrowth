import React, { useEffect, useState } from "react";

const PortfolioTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://softgrowthinfotech.com/backend/api/getdata.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Portfolio Data</h2>
      <table className="table" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <img
                  src={`https://softgrowthinfotech.com/backend/uploads/${item.image}`}
                  alt="image"
                  width={200}
                />
              </td>
              <td>
                <button
                  onClick={async () => {
                    const res = await fetch(
                      `https://softgrowthinfotech.com/backend/api/port_delete.php?id=${item.id}`,
                      { method: "GET" }
                    );

                    const response = await res.json();

                    if (response.status) {
                      alert("Record deleted successfully!");

                      // instant UI update
                      setData((prev) =>
                        prev.filter((d) => d.id !== item.id)
                      );
                    } else {
                      alert("Error deleting record!");
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PortfolioTable;
