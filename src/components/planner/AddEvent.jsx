import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventType, setEventType] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleCreateEvent(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    const newEvent = {
      name: eventName,
      description: eventDesc,
      eventStart: new Date(eventStart).getTime(),
      eventEnd: new Date(eventEnd).getTime(),
      eventType,
      userId: user._id,
    };

    console.log(newEvent);

    setIsLoading(!isLoading);

    try {
      axios({
        method: "POST",
        url: "https://companion-backend.onrender.com/api/v1/plans",
        // url: "http://localhost:4000/api/v1/plans",
        data: newEvent,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      setTimeout(() => {
        alert(
          "Plan created successfully, refresh the page to view updated plans"
        );
        navigate("/plans");
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        alert("Sorry, failed to create plan");
        navigate("/plans");
      }, 1000);
    }

  }

  return (
    <form className="event_form">
      <h3 className="events-form-head">Create a new plan</h3>

      <div className="form-input">
        <label htmlFor="Ename">Plan Name</label>
        <input
          type="text"
          name="Ename"
          placeholder="Plan name"
          required
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
          placeholder="What is the plan for?"
          // value={eventDesc}
          onChange={(e) => setEventDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="form-input">
        <label htmlFor="type">Plan Type</label>
        <select
          name="type"
          id="type"
          required
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
        <label htmlFor="start">Plan Start</label>
        <input
          type="datetime-local"
          name="start"
          id=""
          required
          onChange={(e) => setEventStart(e.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="end">Plan End</label>
        <input
          type="datetime-local"
          name="end"
          id=""
          onChange={(e) => setEventEnd(e.target.value)}
        />
      </div>
      <button onClick={handleCreateEvent}>Create Plan</button>
    </form>
  );
}

export default AddEvent;
