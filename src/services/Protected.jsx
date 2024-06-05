import { Navigate, useNavigate } from "react-router-dom";

function Protected({ isLoggedIn, children }) {
  const navigate = useNavigate();

  return isLoggedIn ? children : <Navigate to="/auth/login" />;
}

export default Protected;
