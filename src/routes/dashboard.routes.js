import { Routes, Route } from "react-router-dom";
import Settings from "../screens/Settings";
import Trash from "../screens/Trash";
import Files from "../screens/Files";
import Notifications from "../screens/Notifications";
import Dashboard from "../components/dashboard/Dashboard";

function DashRoute() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="setting" element={<Settings />} />
        <Route path="trash" element={<Trash />} />
        <Route path="files" element={<Files />} />
        <Route path="me" element={<p>This is for your information</p>} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
}

export default DashRoute;
