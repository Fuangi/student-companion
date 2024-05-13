import { FaList } from "react-icons/fa6";
import { DashLayout } from "../components/Layout";
import MyCalendar from "../components/planner/Calendar";

function Goals() {
  return (
    <DashLayout>
      {/* <CreateGoal /> */}
      <div className="my-goals">
        <div className="my-goals-header">
          <h2>My Goals...</h2>
        </div>
        <h3 className="goal-inspiration">%Something inspirational here</h3>
        <div className="my-goals-body">
          <h4>Happiness is freeee...</h4>
          <div className="goals-container">
            <div className="goals">
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
              <Goal />
            </div>
            <div className="affirmations">
              <div className="datetime">
                <MyCalendar
                  defaultView="month"
                  views={["month", "day", "agenda"]}
                />
              </div>
              <div className="affirm">
                <h4>My affirmations</h4>
                <ol>
                  <li>I affirm that</li>
                  <li>I affirm that</li>
                  <li>I affirm that</li>
                  <li>I affirm that</li>
                  <li>I affirm that</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
}

export default Goals;

export function Goal() {
  return (
    <div>
      <h5>Daily Goals</h5>
      <p>
        <FaList className="goal-icon" /> Your Daily Goals
      </p>
    </div>
  );
}
