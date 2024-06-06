import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? <div>{children}</div> : <Navigate to="/auth/login" />;
}

export default Protected;
