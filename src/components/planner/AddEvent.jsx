import { useState } from "react";

function AddEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventType, setEventType] = useState("");

  function handleCreateEvent(e) {
    e.preventDefault();

    const newEvent = {
      eventStart,
      eventEnd,
      eventName,
      data: {
        type: eventType,
      },
    };

    // Checking is any of the fields are empty
    if (Object.values(newEvent).some((value) => value === ""))
      localStorage.setItem("event", JSON.stringify(newEvent));
    alert("Event Created Successfully");
  }

  return (
    <form className="event_form">
      <h3 className="events-form-head">Create a new event</h3>

      <div className="form-input">
        <label htmlFor="Ename">Event Name</label>
        <input
          type="text"
          name="Ename"
          placeholder="Event Name"
          required
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          cols="20"
          rows="3"
          required
          placeholder="What is the event for?"
          value={eventDesc}
          onChange={(e) => setEventDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="form-input">
        <label htmlFor="type">Event Type</label>
        <select
          name="type"
          id="type"
          required
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="class">Class</option>
          <option value="studying">Studying</option>
          <option value="assignment">Assignment</option>
          <option value="resting">Resting / Relaxation</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="form-input">
        <label htmlFor="start">Event Start</label>
        <input
          type="datetime-local"
          name="start"
          id=""
          required
          value={eventStart}
          onChange={(e) => setEventStart(e.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="end">Event End</label>
        <input
          type="datetime-local"
          name="end"
          id=""
          required
          value={eventEnd}
          onChange={(e) => setEventEnd(e.target.value)}
        />
      </div>
      <button onClick={handleCreateEvent}>Create Event</button>
    </form>
  );
}

export default AddEvent;
