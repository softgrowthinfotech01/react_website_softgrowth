import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("isLoggedIn") === "true" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
