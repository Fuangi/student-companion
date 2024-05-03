import MyCalendar from "../components/planner/Calendar";
import Plans from "../components/planner/Plans";
import { DashLayout } from "../components/Layout";
import UpComingEvent from "../components/planner/UpComingEvent";

function Planner() {
  return (
    <DashLayout>
      <div className="main_calendar">
        <div className="events_container">
          <h1>All your events</h1>
          <Plans />
        </div>
        <div
          style={{ width: "30%", height: "50vh" }}
          className="calendar-container"
        >
          <MyCalendar />
          <div className="event--upcoming">
            <UpComingEvent />
          </div>
        </div>
      </div>
    </DashLayout>
  );
}

export default Planner;
