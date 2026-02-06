import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const expiryTime = sessionStorage.getItem("expiryTime");

  if (!isLoggedIn || !expiryTime) {
    return <Navigate to="/login" replace />;
  }

  // check session expiry
  if (Date.now() > Number(expiryTime)) {
    sessionStorage.clear(); // auto logout
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
