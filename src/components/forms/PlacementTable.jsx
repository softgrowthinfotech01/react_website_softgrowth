import React, { useEffect, useState } from "react";

const PlacementTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://softgrowthinfotech.com/backend/api/get_placement.php")
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
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>image</th>
            <th>Action</th> {/* added */}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.e_name}</td>
              <td>{item.c_name}</td>
              <td>
                <img
                  src={`https://softgrowthinfotech.com/backend/p_uploads/${item.image}`}
                  alt="image"
                  width={200}
                />
              </td>
              <td>
                <button
                  onClick={async () => {
                    const res = await fetch(
                      `https://softgrowthinfotech.com/backend/api/placement_delete.php?id=${item.id}`,
                      { method: "GET" }
                    );

                    const response = await res.json();

                    if (response.status) {
                      alert("Record deleted successfully!");

                      // remove row instantly
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
            <th>Name</th>
            <th>Company</th>
            <th>image</th>
            <th>Action</th> {/* added */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PlacementTable;
