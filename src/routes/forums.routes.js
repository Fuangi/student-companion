import { Routes, Route } from "react-router-dom";
import { Forums } from "../screens/index";
import Protected from "../services/Protected";

function ForumRoute() {
  return (
    <Routes>
      <Route
        path="/forums"
        element={
          <Protected>
            <Forums />
          </Protected>
        }
      />
    </Routes>
  );
}

export default ForumRoute;
