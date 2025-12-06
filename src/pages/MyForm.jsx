import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { useState } from "react";
import PorpolioForm from "../components/forms/PorpolioForm";
import PlacementForm from "../components/forms/PlacementForm";

export default function MyForm() {
  const [activeMenu, setActiveMenu] = useState("portfolio");

  return (
    <>
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
                style={{ cursor: "pointer" }}
                onClick={() => setActiveMenu("portfolio")}
              >
                Portfolio
              </li>

              <li
                className={`nav-link text-white ${
                  activeMenu === "placements" ? "fw-bold" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveMenu("placements")}
              >
                Placements
              </li>
            </ul>
          </div>

          {/* Right Content Area */}
          <div className="col-9 p-4">
            {activeMenu === "portfolio" && (
              <div>
                <PorpolioForm />
              </div>
            )}

            {activeMenu === "placements" && (
              <div>
                <PlacementForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
