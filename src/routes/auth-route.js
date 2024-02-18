import { Navigate, Route, Routes } from "react-router-dom";
import { Signup, Login, ForgotPassword } from "../components/forms";
import { Forums, Planner, Resources } from "../screens/index";
// import AuthLayout from "../components/Layout/AuthLayout";
import Authentication from "../screens/Authentication";

function AuthRoute() {
  return (
    <Routes>
      <Route path="/authentication" element={<Authentication />}>
        <Route index element={<Navigate to="signup" />} />
        {/* Setting the index route so when the user opens the authentication, the signup page should be displayed first */}
        <Route path="signup" element={<Signup />} index />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/resources" element={<Resources />} />
      <Route path="/forums" element={<Forums />} />
      <Route path="/planner" element={<Planner />} />
    </Routes>
  );
}

export default AuthRoute;
