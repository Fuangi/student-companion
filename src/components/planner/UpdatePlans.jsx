/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPlan } from "../../services/apiPlans";

function UpdatePlan() {
  const [searchParams] = useSearchParams();
  const [plan, setPlan] = useState({});
  const id = searchParams.get("id");
  let start;
  let end;

  useEffect(() => {
    async function fetchPlan() {
      const Myplan = await getPlan(id);
      start = new Date(Myplan.eventStart).toLocaleString();
      end = new Date(Myplan.eventEnd).toLocaleString();
      setPlan(Myplan);
    }
    fetchPlan();
  }, []);

  return (
    <form className="event-form">
      <h3 className="events-form-head">Update Event</h3>
      <div className="form-input">
        <label htmlFor="Ename">Event Name</label>
        <input
          type="text"
          name="Ename"
          placeholder="Event Name"
          required
          defaultValue={plan.name}
        />
      </div>
      <div className="form-input">
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          cols="20"
          rows="5"
          required
          placeholder="What is the event for?"
          defaultValue={plan.description}
        ></textarea>
      </div>
      <div className="form-input">
        <label htmlFor="type">Event Type</label>
        <select name="type" id="type" required defaultChecked={plan.eventType}>
          <option value="class">Class</option>
          <option value="study">Studying</option>
          <option value="assignment">Assignment</option>
          <option value="rest">Resting / Relaxation</option>
          <option value="other">Others</option>
        </select>
      </div>
      <div className="form-input">
        <label htmlFor="start">Event Start</label>
        <input type="text" name="start" id="" required defaultValue={start} />
      </div>
      <div className="form-input">
        <label htmlFor="end">Event End</label>
        <input
          type="text"
          name="end"
          id=""
          required
          value={end}
          // defaultValue={end}
          placeholder={end}
        />
      </div>
      <button>Update Event</button>
    </form>
  );
}

export default UpdatePlan;
