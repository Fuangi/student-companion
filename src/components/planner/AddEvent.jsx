import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updatePlan } from "../../services/apiPlans";

function AddEvent({ plan }) {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventType, setEventType] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleCreateEvent(e) {
    e.preventDefault();

    const newEvent = {
      name: eventName,
      description: eventDesc,
      eventStart: eventStart.toString(),
      eventEnd: eventEnd.toString(),
      eventType,
    };

    setIsLoading(!isLoading);
    axios.post("http://localhost:4000/api/v1/plans", {
      data: newEvent,
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
      },
    });
    setIsLoading(false);
    navigate("/plans");
  }

  async function handleUpdateEvent(e) {
    e.preventDefault();
    console.log("updated");

    const event = {
      name: eventName,
      description: eventDesc,
      eventStart: eventStart.toString(),
      eventEnd: eventEnd.toString(),
      eventType,
    };
    // Checking and removing any empty value (one that wasn't updated)
    const updatedPlan = Object.fromEntries(
      Object.entries(event).filter(([_, value]) => value)
    );

    setIsLoading(!isLoading);
    const update = await updatePlan(plan._id, updatedPlan);
    console.log(update);
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
          defaultValue={plan ? plan.name : eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          cols="20"
          rows="5"
          required
          defaultValue={plan ? plan.description : eventDesc}
          placeholder="What is the event for?"
          // value={eventDesc}
          onChange={(e) => setEventDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="form-input">
        <label htmlFor="type">Event Type</label>
        <select
          name="type"
          id="type"
          required
          // value={eventType}
          defaultValue={plan ? plan.eventType : eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="class">Class</option>
          <option value="study">Studying</option>
          <option value="assignment">Assignment</option>
          <option value="rest">Resting / Relaxation</option>
          <option value="other">Others</option>
        </select>
      </div>
      <div className="form-input">
        <label htmlFor="start">Event Start</label>
        <input
          type="datetime-local"
          name="start"
          id=""
          required
          // value={eventStart}
          defaultValue={plan ? plan.eventStart : eventStart}
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
          // value={eventEnd}
          defaultValue={plan ? plan.eventEnd : eventEnd}
          onChange={(e) => setEventEnd(e.target.value)}
        />
      </div>
      <button
        onClick={handleCreateEvent}
        style={{ display: plan ? "none" : "" }}
      >
        Create Event
      </button>
      {plan && <button onClick={handleUpdateEvent}>Update Event</button>}
    </form>
  );
}

export default AddEvent;
