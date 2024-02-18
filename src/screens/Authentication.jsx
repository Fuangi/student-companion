// import { Loader } from "../components/Layout";
// import { Outlet } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout";
import { FormSidebar } from "../components/forms";

function Authentication() {
  return (
    <div className="authentication">
      {/* this outlet is like a tab when using nested routes. so when a url
      of this route is opened(signup or login), the element that's to be rendered there should be 
      rendered here at this position. So the outlet represents the element */}
      <AuthLayout />
      <FormSidebar />
    </div>
  );
}

export default Authentication;
