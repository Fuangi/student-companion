import { Calendar, momentLocalizer } from "react-big-calendar";
import ClassEvent from "./ClassEvent";
import moment from "moment";

const localizer = momentLocalizer(moment);
// const storedValue = JSON.parse(localStorage.getItem("event"));

const events = [
  {
    start: moment("2024-02-19T09:30:00").toDate(), //for today's date
    end: moment("2024-02-19T10:30:00").toDate(),
    title: "My first event",
    data: {
      type: "resting", //regular
    },
  },
  {
    start: moment("2024-02-19T20:00:00").toDate(), //for today's date
    end: moment("2024-02-19T23:30:00").toDate(),
    title: "Learn React",
    data: {
      type: "studying", //appointment
    },
  },
  {
    start: moment("2024-02-19T02:00:00").toDate(), //for today's date
    end: moment("2024-02-19T05:30:00").toDate(),
    title: "Data Analysis with Python",
    data: {
      type: "class", //appointment
    },
  },
  {
    start: moment("2024-02-19T16:00:00").toDate(), //for today's date
    end: moment("2024-02-19T18:30:00").toDate(),
    title: "Play Games and Snack",
    data: {
      type: "others", //appointment
    },
  },
  /*   {
    start: storedValue.eventStart,
    end: storedValue.eventEnd,
    title: storedValue.eventName,
    data: storedValue.data,
  }, */
];

// Creating custom components to render the different event types in
const components = {
  event: (props) => {
    const eventType = props?.event?.data?.type;
    // the ? marks above are so that if it doesn't exist, it shouldn't give an error. that is if it's not passed

    switch (eventType) {
      case "others":
        return (
          <div style={{ background: "yellow", color: "white" }}>
            {props.title}
          </div>
        );
      case "class":
        return <ClassEvent children={props.title} />;
      case "studying":
        return (
          <div style={{ background: "blue", color: "white" }}>
            {props.title}
          </div>
        );
      case "resting":
        return (
          <div style={{ background: "violet", color: "white" }}>
            {props.title}
          </div>
        );
      default:
        return (
          <div style={{ background: "red", color: "white" }}>{props.title}</div>
        );
    }
  },
};
// created an event prop that takes all the event properties that will be showed

function MyCalendar({ defaultView, views }) {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      components={components}
      defaultView={defaultView}
      views={views}
    />
  );
}

export default MyCalendar;
