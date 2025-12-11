import React, { useEffect, useState } from "react";

export default function EditPortfolio({ id }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [file, setFile] = useState(null);

  // Fetch old data from JSON
  useEffect(() => {
    fetch(
      `http://localhost/react_website_softgrowth/backend/api/get_single.php?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("id", id);
    fd.append("title", form.title);
    fd.append("description", form.description);

    if (file) {
      fd.append("image", file);
    }

    const res = await fetch(
      "http://localhost/react_website_softgrowth/backend/api/update_portfolio.php",
      { method: "POST", body: fd }
    );

    const result = await res.json();

    if (result.status) {
      alert("Updated Successfully!");
    } else {
      alert("Update Failed!");
    }
  };

  return (
    <div>
      <h2>Edit Portfolio #{id}</h2>

      <form onSubmit={updateData}>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="form-control mb-3"
          placeholder="Title"
        />

        <textarea
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="form-control mb-3"
          placeholder="Description"
        ></textarea>

        <p>Old Image:</p>
        <img
          src={`http://localhost/react_website_softgrowth/backend/uploads/${form.image}`}
          width={200}
        />

        <input
          type="file"
          className="form-control mt-3"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
}
