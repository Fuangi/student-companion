import { Route, Routes } from "react-router-dom";
import { Planner } from "../screens";
import Plans from "../components/planner/Plans";
import Modal from "../components/Layout/Modal";

function PlanRoute() {
  return (
    <Routes>
      <Route path="/plans" element={<Planner />}>
        <Route
          path="view"
          element={<Modal children={<Plans />} prevLocation="/plans" />}
        />
        <Route
          path="new"
          element={<Modal children={<p>New Plan</p>} prevLocation="/plans" />}
        />
        <Route
          path="delete"
          element={
            <Modal children={<p>Delete Plan</p>} prevLocation="/plans" />
          }
        />
        <Route
          path="edit"
          element={
            <Modal children={<p>Update Plan</p>} prevLocation="/plans" />
          }
        />
      </Route>
    </Routes>
  );
}

export default PlanRoute;
