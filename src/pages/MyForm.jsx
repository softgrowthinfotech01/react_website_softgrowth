import { useState } from "react";

export default function MyForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);

    const res = await fetch("http://localhost/react_website_softgrowth/backend/api/save.php", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.status) {
      setMessage("Data has been saved successfully!");
      setForm({ title: "", description: "", image: null }); // Clear form fields
      e.target.reset(); // Reset input values
    } else {
      setMessage("Error while saving data!");
    }
  };

  return (
    <div className="py-5 container">

<h2 className="text-2xl">
  Portfolio Form
</h2>

      {message && (
        <div style={{
          padding: "10px",
          backgroundColor: "#d4edda",
          border: "1px solid #c3e6cb",
          color: "#155724",
          marginBottom: "10px",
          borderRadius: "5px"
        }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form w-50 mx-auto d-flex flex-column gap-3">
        <input
          type="text" 
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="form-control"
          required
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <input
          type="file"
          className="form-control"
          required
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />

        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
}
