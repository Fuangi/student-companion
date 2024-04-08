import PageNav from "../components/nav/PageNav";
import MyCalendar from "../components/planner/Calendar";
import CalendarEvents from "../components/planner/CalendarEvents";

function Planner() {
  return (
    <div className="event-planner">
      <PageNav />
      <div className="main_calendar">
        <div style={{ width: "60%", height: "90vh" }}>
          <MyCalendar />
        </div>
        <div className="events_container">
          <CalendarEvents />
        </div>
      </div>
    </div>
  );
}

export default Planner;
