import React, { useState } from "react";

const PlacementForm = () => {
  const [form, setForm] = useState({
    e_name: "",
    c_name: "",
    image: null,
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("e_name", form.e_name);
    formData.append("c_name", form.c_name);
    formData.append("image", form.image);

    const res = await fetch(
      "https://anushkafreightcarriers.in/new/backend/api/placement.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data.status) {
      setMessage("Data has been saved successfully!");
      setForm({ e_name: "", c_name: "", image: null });
      e.target.reset();
    } else {
      setMessage("Error while saving data!");
    }
  };

  return (
    <div>
      <div className="py-5 container">
        <h2 className="text-2xl">Placement Form</h2>

        {message && (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#d4edda",
              border: "1px solid #c3e6cb",
              color: "#155724",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="form w-50 mx-auto d-flex flex-column gap-3"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name..."
            required
            onChange={(e) => setForm({ ...form, e_name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Enter Company name ..."
            className="form-control"
            required
            onChange={(e) =>
              setForm({ ...form, c_name: e.target.value })
            }
          />

          <input
            type="file"
            className="form-control"
            required
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />

          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};


export default PlacementForm;
