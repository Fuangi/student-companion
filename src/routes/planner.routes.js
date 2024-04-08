import { Route, Routes } from "react-router-dom";
import { Planner } from "../screens";

function PlanRoute() {
  return (
    <Routes>
      <Route path="/planner" element={<Planner />} />
    </Routes>
  );
}

export default PlanRoute;
