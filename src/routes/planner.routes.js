import { Route, Routes } from "react-router-dom";
import { Planner } from "../screens";
import Plans from "../components/planner/Plans";
import Modal from "../components/Layout/Modal";
import AddEvent from "../components/planner/AddEvent";
import DeleteAlert from "../components/Layout/DeleteAlert";
import UpdatePlan from "../components/planner/UpdatePlans";
import Protected from "../services/Protected";

function PlanRoute() {
  return (
    <Routes>
      <Route
        path="/plans"
        element={
          <Protected>
            <Planner />
          </Protected>
        }
      >
        <Route
          path="view"
          element={
            <Modal
              children={
                <Protected>
                  <Plans />
                </Protected>
              }
              prevLocation="/plans"
            />
          }
        />
        <Route
          path="new"
          element={
            <Modal
              children={
                <Protected>
                  <AddEvent />
                </Protected>
              }
              prevLocation="/plans"
            />
          }
        />
        <Route
          path="delete"
          element={
            <Modal
              children={
                <Protected>
                  <DeleteAlert res="plans" prevLoc="/plans" />
                </Protected>
              }
              prevLocation="/plans"
            />
          }
        />
        <Route
          path="edit"
          element={
            <Modal
              children={
                <Protected>
                  <UpdatePlan />
                </Protected>
              }
              prevLocation="/plans"
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default PlanRoute;
