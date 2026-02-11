export default function PayslipPreview({ data }) {
  const totalEarnings =
    Number(data.basic) +
    Number(data.skill) +
    Number(data.hra) +
    Number(data.conveyance);

  const totalDeductions = Number(data.professionalTax) + Number(data.pf);

  const netPay = totalEarnings - totalDeductions;

  return (
    <div className="bg-gray-50 p-6 border rounded">
      <h2 className="text-center font-bold text-lg mb-4">
        Pay Slip – {data.month}
      </h2>

      <p>
        <b>Name:</b> {data.employeeName || "—"}
      </p>
      <p>
        <b>Designation:</b> {data.designation || "—"}
      </p>

      <hr className="my-3" />

      <h3 className="font-semibold">Earnings</h3>
      <p>Basic: ₹{data.basic}</p>
      <p>Skill: ₹{data.skill}</p>
      <p>HRA: ₹{data.hra}</p>
      <p>Conveyance: ₹{data.conveyance}</p>

      <p className="font-bold mt-2">Total: ₹{totalEarnings}</p>

      <hr className="my-3" />

      <h3 className="font-semibold">Deductions</h3>
      <p>Professional Tax: ₹{data.professionalTax}</p>
      <p>PF: ₹{data.pf}</p>

      <p className="font-bold mt-2">Net Pay: ₹{netPay}</p>
    </div>
  );
}
