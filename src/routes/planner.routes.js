import { Route, Routes } from "react-router-dom";
import { Planner } from "../screens";
import Plans from "../components/planner/Plans";
import Modal from "../components/Layout/Modal";
import AddEvent from "../components/planner/AddEvent";
import DeleteAlert from "../components/Layout/DeleteAlert";

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
          element={<Modal children={<AddEvent />} prevLocation="/plans" />}
        />
        <Route
          path="delete"
          element={<Modal children={<DeleteAlert />} prevLocation="/plans" />}
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
