import { Outlet } from "react-router-dom";
import AuthNav from "../nav/AuthNav";
// import { Login, Signup } from "../forms";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <AuthNav />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
