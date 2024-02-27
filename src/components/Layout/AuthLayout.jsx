import { Outlet } from "react-router-dom";
import AuthNav from "../nav/AuthNav";
// import { Login, Signup } from "../forms";

function AuthLayout() {
  return (
    <div className="auth-layout">
      {/* this outlet is like a tab when using nested routes. so when a url
      of this route is opened(signup or login), the element that's to be rendered there should be 
      rendered here at this position. So the outlet represents the element */}
      <AuthNav />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
