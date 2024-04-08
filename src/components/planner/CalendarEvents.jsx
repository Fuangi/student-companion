import { useState } from "react";
import EventsForm from "./EventsForm";
import MyCalendar from "./Calendar";

function CalendarEvents() {
  const [createEvent, setCreateEvent] = useState(false);
  return (
    <div>
      <MyCalendar defaultView={"agenda"} views={["agenda"]} />
      {createEvent && <EventsForm />}
      <button onClick={() => setCreateEvent(true)}>Add Events</button>
    </div>
  );
}

export default CalendarEvents;
