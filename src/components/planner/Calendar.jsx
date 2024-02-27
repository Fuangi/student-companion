import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function MyCalendar() {
  return <Calendar localizer={localizer} />;
}

export default MyCalendar;
