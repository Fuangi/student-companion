import { Loader } from "../components/Layout";
import AppLayout from "../components/Layout/AppLayout";
import MyCalendar from "../components/planner/Calendar";
import CalendarEvents from "../components/planner/CalendarEvents";

function Planner() {
  return (
    <div className="main_calendar">
      <div style={{ width: "60%", height: "90vh" }}>
        <MyCalendar />
      </div>
      <div className="events_container">
        <CalendarEvents />
      </div>
    </div>
  );
}

export default Planner;
