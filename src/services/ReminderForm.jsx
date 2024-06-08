import { useState } from "react";
import axios from "axios";

function ReminderForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [frequency, setFrequency] = useState("daily");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/notifications",
        data: { title, description, schedule, frequency },
      });
      console.log(response);
    } catch (err) {
      console.log("Error creating notification", err);
    }
  }

  return (
    <form className="reminder" onSubmit={handleSubmit}>
      <h2>Setup Reminder frequency for your plans</h2>
      <div className="reminder-input">
        <label htmlFor="reminderTitle">Title</label>
        <input
          type="text"
          name="reminderTitle"
          id="reminderTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="reminder-input">
        <label htmlFor="reminderDesc">Desc</label>
        <input
          type="text"
          name="reminderDesc"
          id="reminderDesc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="reminder-input">
        <label htmlFor="reminderTime">Time</label>
        <input
          type="datetime-local"
          name="reminderTime"
          id="reminderTime"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
      </div>
      <div className="reminder-input">
        <label htmlFor="reminderFreq">Frequency</label>
        <select
          name="reminderFreq"
          id="reminderFreq"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button>Set Reminder</button>
    </form>
  );
}

export default ReminderForm;
