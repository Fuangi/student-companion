import { Route, Routes } from "react-router-dom";
import Modal from "../components/Layout/Modal";
import Goals from "../screens/Goals";
import CreateGoal from "../components/goals/CreateGoal";
import DeleteAlert from "../components/Layout/DeleteAlert";

function GoalsRoute() {
  return (
    <Routes>
      <Route path="/goals" element={<Goals />}>
        <Route
          path="new"
          element={<Modal children={<CreateGoal />} prevLocation="/goals" />}
        />
        <Route path="edit" element={<Modal prevLocation="/goals" />} />
        <Route
          path="delete"
          element={<Modal children={<DeleteAlert />} prevLocation="/goals" />}
        />
      </Route>
    </Routes>
  );
}

export default GoalsRoute;
