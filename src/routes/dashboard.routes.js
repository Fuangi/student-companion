import { Routes, Route } from "react-router-dom";
import Settings from "../screens/Settings";
import Trash from "../screens/Trash";
import Files from "../screens/Files";
import Notifications from "../screens/Notifications";
import Dashboard from "../components/dashboard/Dashboard";
import Protected from "../services/Protected";

function DashRoute() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
      <Route
        path="setting"
        element={
          <Protected>
            <Settings />
          </Protected>
        }
      />
      <Route
        path="files"
        element={
          <Protected>
            <Files />
          </Protected>
        }
      />
      <Route
        path="me"
        element={
          <Protected>
            <p>This is for your information</p>
          </Protected>
        }
      />
      <Route
        path="trash"
        element={
          <Protected>
            <Trash />
          </Protected>
        }
      />
      <Route
        path="notifications"
        element={
          <Protected>
            <Notifications />
          </Protected>
        }
      />
    </Routes>
  );
}

export default DashRoute;
