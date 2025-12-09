import React, { useEffect, useState } from "react";

const PlacementTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/react_website_softgrowth/backend/api/get_placement.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Placement Data</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            {/* Change headings depending on your JSON structure */}
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>image</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {/* Update these fields based on your JSON keys */}
              <td>{index+1}</td>
              <td>{item.id}</td>
              <td>{item.e_name}</td>
              <td>{item.c_name}</td>
              <td><img src={`http://localhost/react_website_softgrowth/backend/p_uploads/${item.image}`} alt="image" width={200}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementTable;
