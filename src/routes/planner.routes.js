import { Route, Routes } from "react-router-dom";
import { Planner } from "../screens";
import Plans from "../components/planner/Plans";

function PlanRoute() {
  return (
    <Routes>
      <Route path="/plans" element={<Planner />}>
        <Route path="view" element={<Plans />} />
        <Route path="new" element={<Plans />} />
        <Route path="delete" element={<Plans />} />
        <Route path="edit" element={<Plans />} />
      </Route>
    </Routes>
  );
}

export default PlanRoute;
