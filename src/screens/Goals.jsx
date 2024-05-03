import { DashLayout } from "../components/Layout";
import CreateGoal from "../components/goals/CreateGoal";

function Goals() {
  return (
    <DashLayout>
      {/* <Loader /> */}
      <CreateGoal />
    </DashLayout>
  );
}

export default Goals;
