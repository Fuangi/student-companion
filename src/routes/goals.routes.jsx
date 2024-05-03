import { Route, Routes } from "react-router-dom";
import Goals from "../screens/Goals";

function GoalsRoute() {
  return (
    <Routes>
      <Route path="/goals" element={<Goals />} />
    </Routes>
  );
}

export default GoalsRoute;
