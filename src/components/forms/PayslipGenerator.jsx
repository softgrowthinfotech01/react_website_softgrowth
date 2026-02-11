import { useState } from "react";
import PayslipPreview from "./PayslipPreview";

export default function PayslipGenerator() {
  const [formData, setFormData] = useState({
    employeeName: "",
    designation: "",
    month: "February 2026",
    basic: 0,
    skill: 0,
    hra: 0,
    conveyance: 0,
    professionalTax: 200,
    pf: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* LEFT SIDE – FORM */}
      <div className="bg-white p-4 border rounded">
        <h2 className="font-bold text-lg mb-4">Enter Salary Details</h2>

        <input
          name="employeeName"
          placeholder="Employee Name"
          className="input"
          onChange={handleChange}
        />

        <input
          name="designation"
          placeholder="Designation"
          className="input"
          onChange={handleChange}
        />

        <input
          name="basic"
          type="number"
          placeholder="Basic Salary"
          className="input"
          onChange={handleChange}
        />

        <input
          name="skill"
          type="number"
          placeholder="Skill Allowance"
          className="input"
          onChange={handleChange}
        />

        <input
          name="hra"
          type="number"
          placeholder="HRA"
          className="input"
          onChange={handleChange}
        />

        <input
          name="conveyance"
          type="number"
          placeholder="Conveyance"
          className="input"
          onChange={handleChange}
        />
      </div>

      {/* RIGHT SIDE – LIVE PREVIEW */}
      <PayslipPreview data={formData} />
    </div>
  );
}
