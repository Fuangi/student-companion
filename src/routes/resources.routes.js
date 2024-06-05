import { Routes, Route } from "react-router-dom";
import { Resources } from "../screens/index";
import Protected from "../services/Protected";
function ResourceRoute() {
  return (
    <Routes>
      <Route
        path="/resources"
        element={
          <Protected>
            <Resources />
          </Protected>
        }
      />
    </Routes>
  );
}

export default ResourceRoute;
