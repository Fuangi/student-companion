import { Route, Routes } from "react-router-dom";
import Modal from "../components/Layout/Modal";
import Goals from "../screens/Goals";
import CreateGoal from "../components/goals/CreateGoal";
import DeleteAlert from "../components/Layout/DeleteAlert";
import Protected from "../services/Protected";

function GoalsRoute() {
  return (
    <Routes>
      <Route
        path="/goals"
        element={
          <Protected>
            <Goals />
          </Protected>
        }
      >
        <Route
          path="new"
          element={
            <Modal
              children={
                <Protected>
                  <CreateGoal />
                </Protected>
              }
              prevLocation="/goals"
            />
          }
        />
        <Route path="edit" element={<Modal prevLocation="/goals" />} />
        <Route
          path="delete"
          element={
            <Modal
              children={
                <Protected>
                  <DeleteAlert />
                </Protected>
              }
              prevLocation="/goals"
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default GoalsRoute;
