import React, { useEffect, useState } from "react";

const PortfolioTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://anushkafreightcarriers.in/new/backend/api/getdata.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Placement Data</h2>
      <table className="table" border="1" cellPadding="10">
        <thead>
          <tr>
            {/* Change headings depending on your JSON structure */}
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
              {/* Update these fields based on your JSON keys */}
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <img
                  src={`https://anushkafreightcarriers.in/new/backend/uploads/${item.image}`}
                  alt="image"
                  width={200}
                />
              </td>
              <td>
                <button
                  onClick={async () => {
                    const res = await fetch(
                      `http://localhost/react_website_softgrowth/backend/api/port_delete.php?id=${item.id}`,
                      { method: "GET" }
                    );

                    const data = await res.json();

                    if (data.status) {
                      alert("Record deleted successfully!");

                      // Update table instantly
                      setData(data.data);
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
            {/* Change headings depending on your JSON structure */}
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
