import { Routes, Route } from "react-router-dom";
import { Resources } from "../screens/index";
function ResourceRoute() {
  return (
    <Routes>
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}

export default ResourceRoute;
