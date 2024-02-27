// import { Loader } from "../components/Layout";
// import { Outlet } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout";
import { FormSidebar } from "../components/forms";

function Authentication() {
  return (
    <div className="authentication">
      <AuthLayout />
      <FormSidebar />
    </div>
  );
}

export default Authentication;
