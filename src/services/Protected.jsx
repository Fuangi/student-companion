import { Navigate } from "react-router-dom";

function Protected({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default Protected;
