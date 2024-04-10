import moment from "moment";

const events = [
  {
    start: moment("2024-02-19T09:30:00").toDate().toLocaleDateString(), //for today's date
    end: moment("2024-02-19T10:30:00").toDate().toLocaleDateString(),
    title: "My first event",
    data: {
      type: "resting", //regular
    },
  },
  {
    start: moment("2024-02-19T20:00:00").toDate().toLocaleDateString(), //for today's date
    end: moment("2024-02-19T23:30:00").toDate().toLocaleDateString(),
    title: "Learn React",
    data: {
      type: "studying", //appointment
    },
  },
  {
    start: moment("2024-02-19T02:00:00").toDate().toLocaleDateString(), //for today's date
    end: moment("2024-02-19T05:30:00").toDate().toLocaleDateString(),
    title: "Data Analysis with Python",
    data: {
      type: "class", //appointment
    },
  },
  {
    start: moment("2024-02-19T16:00:00").toDate().toLocaleDateString(), //for today's date
    end: moment("2024-02-19T18:30:00").toDate().toLocaleDateString(),
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
  },  */
];

// const events = [];

function Plans() {
  return (
    <div>
      <div className="add-events">
        <button>Add Events</button>
      </div>
      {events.length === 0 ? (
        <p className="no-events">
          You don't have any events. Click on the buttons to add some
        </p>
      ) : (
        events.map((event) => {
          return (
            <div className="my-plans">
              <h2>{event?.title}</h2>
              <p>
                <span>{event?.data?.type}</span>, from{" "}
                <span>{event?.start}</span> to {""}
                <span>{event?.end}</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                suscipit sint incidunt laborum dignissimos cupiditate laudantium
                dolor, voluptatum tenetur impedit numquam quae tempore quo
                magni.
              </p>
              <div className="plan-actions">
                <button>Delete Event</button>
                <button>Update Event</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Plans;
