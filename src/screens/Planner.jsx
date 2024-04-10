import MyCalendar from "../components/planner/Calendar";
import Plans from "../components/planner/Plans";
import { DashLayout } from "../components/Layout";

function Planner() {
  return (
    <DashLayout>
      <div className="event-planner">
        <div className="main_calendar">
          <div className="events_container">
            <h1>All your events</h1>
            <Plans />
          </div>
          <div style={{ width: "40%", height: "50vh" }}>
            <MyCalendar />
          </div>
        </div>
      </div>
    </DashLayout>
  );
}

export default Planner;
