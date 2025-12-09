import React, { useEffect, useState } from "react";

const PortfolioTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/react_website_softgrowth/backend/api/getdata.php")
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
            <th>Title</th>
            <th>Description</th>
            <th>image</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {/* Update these fields based on your JSON keys */}
              <td>{index+1}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td><img src={`http://localhost/react_website_softgrowth/backend/uploads/${item.image}`} alt="image" width={200}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
