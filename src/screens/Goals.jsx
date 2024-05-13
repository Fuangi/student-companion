import { FaList } from "react-icons/fa6";
import { DashLayout } from "../components/Layout";
// import CreateGoal from "../components/goals/CreateGoal";

function Goals() {
  return (
    <DashLayout>
      {/* <CreateGoal /> */}
      <div className="my-goals">
        <div className="my-goals-header">
          <h2>My Goals...</h2>
        </div>
        <h3>%Something inspirational here</h3>

        <div className="my-goals-body">
          <h4>Happiness is freeee...</h4>
          <div className="goals-container">
            <div className="goals">
              {}
              <div>
                <h5>Daily Goals</h5>
                <p>
                  <FaList /> Your Daily Goals
                </p>
              </div>
            </div>
            <div className="affirmations">Some other things here</div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
}

export default Goals;
