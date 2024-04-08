import { Routes, Route } from "react-router-dom";
import { Forums } from "../screens/index";

function ForumRoute() {
  return (
    <Routes>
      <Route path="/forums" element={<Forums />} />
    </Routes>
  );
}

export default ForumRoute;
