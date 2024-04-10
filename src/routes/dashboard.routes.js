import { Routes, Route } from "react-router-dom";
import Settings from "../screens/Settings";
import Trash from "../screens/Trash";
import Files from "../screens/Files";
import Notifications from "../screens/Notifications";

function DashRoute() {
  return (
    <Routes>
      <Route path="/setting" element={<Settings />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/files" element={<Files />} />
      <Route path="/me" element={<p>This is for your information</p>} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default DashRoute;
