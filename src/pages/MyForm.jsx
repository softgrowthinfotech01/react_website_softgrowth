import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PorpolioForm from "../components/forms/PorpolioForm";
import PlacementForm from "../components/forms/PlacementForm";
import PlacementTable from "../components/forms/PlacementTable";
import PortfolioTable from "../components/forms/PortfolioTable";
import ReviewForm from "../components/forms/ReviewForm";
import PayslipGenerator from "../components/forms/PayslipGenerator";

export default function MyForm() {
  const [activeMenu, setActiveMenu] = useState("portfolio");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <div className="col-3 bg-dark text-white p-4">
          <h4 className="mb-4">Sidebar</h4>

          <ul className="nav flex-column gap-3">
            <li
              className={`nav-link text-white ${
                activeMenu === "portfolio" ? "fw-bold" : ""
              }`}
              onClick={() => setActiveMenu("portfolio")}
            >
              Portfolio
            </li>

            <li
              className={`nav-link text-white ${
                activeMenu === "placements" ? "fw-bold" : ""
              }`}
              onClick={() => setActiveMenu("placements")}
            >
              Placements
            </li>

            <li
              className={`nav-link text-white ${
                activeMenu === "placementstable" ? "fw-bold" : ""
              }`}
              onClick={() => setActiveMenu("placementstable")}
            >
              Placements Table
            </li>

            <li
              className={`nav-link text-white ${
                activeMenu === "PortfolioTable" ? "fw-bold" : ""
              }`}
              onClick={() => setActiveMenu("PortfolioTable")}
            >
              Portfolio Table
            </li>

            <li
              className={`nav-link text-white ${
                activeMenu === "ReviewForm" ? "fw-bold" : ""
              }`}
              onClick={() => setActiveMenu("ReviewForm")}
            >
              Review Table
            </li>

            <li
              className={`nav-link text-white ${
                activeMenu === "ReviewForm" ? "fw-bold" : ""
              }`}
              onClick={() => setActiveMenu("salarySlip")}
            >
              Generate Payslip
            </li>

            <li className="nav-link text-danger" onClick={handleLogout}>
              <button> Logout</button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="col-9 p-4">
          {activeMenu === "portfolio" && <PorpolioForm />}
          {activeMenu === "placements" && <PlacementForm />}
          {activeMenu === "placementstable" && <PlacementTable />}
          {activeMenu === "PortfolioTable" && <PortfolioTable />}
          {activeMenu === "ReviewForm" && <ReviewForm />}
          {activeMenu === "salarySlip" && <PayslipGenerator />}
        </div>
      </div>
    </div>
  );
}
