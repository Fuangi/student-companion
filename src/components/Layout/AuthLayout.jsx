import { Outlet } from "react-router-dom";
import AuthNav from "../nav/AuthNav";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <AuthNav />
      <Outlet />
      {children}
    </div>
  );
}

export default AuthLayout;
