import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment("2023-12-20T09:30:00").toDate(), //for today's date
    end: moment("2023-12-20T10:30:00").toDate(),
    title: "My first event",
  },
  {
    start: moment("2023-12-20T20:00:00").toDate(), //for today's date
    end: moment("2023-12-20T23:30:00").toDate(),
    title: "Learn React",
  },
];

function MyCalendar() {
  return <Calendar>localizer={localizer}</Calendar>;
}

export default MyCalendar;
