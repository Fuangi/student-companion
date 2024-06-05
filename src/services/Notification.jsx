import axios from "axios";
import { useState } from "react";

function Notification() {
  const [message, setMessage] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notification = { message, schedule };
    console.log(notification);

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/notifications",
        data: notification,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label>Schedule (cron):</label>
        <input
          type="time"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
      </div>
      <button type="submit">Create Notification</button>
    </form>
  );
}

export default Notification;
